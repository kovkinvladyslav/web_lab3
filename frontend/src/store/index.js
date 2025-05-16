import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        auth: {
            isAuthenticated: false,
            token: null,
        },
        user: {
            id: null,
            email: null,
            birthDate: null,
            gender: null,
            fullName: null
        },
    }),

    getters: {
        authenticated: (state) => state.auth.isAuthenticated,
    },

    actions: {
        async register(fullName, email, password, gender, birthDate) {
            try {
                await axios.post("http://localhost:3000/register", {
                    fullName,
                    email,
                    password,
                    gender,
                    birthDate
                });
                return true;
            } catch (err) {
                console.error("Register error:", err);
                return false;
            }
        },

        async login(email, password) {
            try {
                const res = await axios.post("http://localhost:3000/login", {
                    email,
                    password
                });

                const token = res.data.token;
                const decoded = JSON.parse(atob(token.split(".")[1]));

                this.auth.isAuthenticated = true;
                this.auth.token = token;
                this.user.id = decoded.id;
                this.user.email = email;

                localStorage.setItem("token", token);
                return true;
            } catch (err) {
                console.error("Login error:", err);
                return false;
            }
        },

        logout() {
            this.auth.isAuthenticated = false;
            this.auth.token = null;
            this.user.id = null;
            this.user.email = null;
            localStorage.removeItem("token");
        },

        async fetchProfile() {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    this.logout();
                    return false;
                }

                const res = await axios.get("http://localhost:3000/profile", {
                    headers: {
                        "x-access-token": token,
                    },
                });

                this.user.id = res.data.id;
                this.user.email = res.data.email;
                this.user.fullName = res.data.fullName;
                this.user.birthDate = res.data.birthDate;
                this.user.gender = res.data.gender;
                this.auth.token = token;

                return true;
            } catch (err) {
                console.error("Profile fetch failed:", err);
                this.logout();
                return false;
            }
        }
    }
});
