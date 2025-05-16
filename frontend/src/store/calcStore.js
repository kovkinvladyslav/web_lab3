import { defineStore } from 'pinia'

export const useCalcStore = defineStore('calc', {
  state: () => ({
    mode: 'Normal',
    display: '0',
    exprEvaled: false,
    base: 'DEC',
  }),
  actions: {
    clear() {
      this.display = '0'
      this.exprEvaled = false
    },
    setMode(newMode) {
      this.mode = newMode
      this.clear()
    },
    processBtn(btnVal) {
       if (btnVal === 'CE') {
            this.display = ''
        } else if (btnVal === '=') {
            try {
                const expression = this.display
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/−/g, '-')
                    .replace(/AND/g, '&')
                    .replace(/XOR/g, '^')
                    .replace(/OR/g, '|')
                    .replace(/NOT/g, '~')

                //console.log(expression)
                let convertedExpr = expression;
                if (this.mode === 'Programmer') {
                    const baseMap = { 'BIN': 2, 'DEC': 10, 'HEX': 16 };
                    convertedExpr = this.convertExpressionFromBase(expression, baseMap[this.base]);
                }
                
                const result = eval(convertedExpr);
                this.display = result.toString()
                this.convertBase('DEC', this.base)


                this.ExprEvaled = true;
            } catch (error) {
                this.display = 'Error'
            }
        } else if (btnVal === '⌫') {
            this.display = this.display.slice(0, -1)
        } else if (btnVal === '.') {
            let lastDisplayChar = this.display.at(-1)
            if(this.display.match(/\d+$/) && !this.display.match(/\.\d+$/)){
                this.display += '.'
            }
        } else if (['BIN', 'DEC', 'HEX'].includes(btnVal)) {
            this.setNewBase(btnVal);
        } else {
            if ((/\d/).test(btnVal) && (this.display === '0' || this.display === 'Error' || this.ExprEvaled) || this.display === 'INFINITY') {
                this.display = '';
            }
            const validDigis = {
                'BIN': ['0', '1'],
                'DEC': ['0','1','2','3','4','5','6','7','8','9'],
                'HEX': ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
            }
            const systemOperators = ['AND', 'OR', 'XOR', 'NOT', '+', '−', '×', '÷'];
            const controlButtons = ['C', '⌫', '='];

            const isDigit = validDigis[this.base].includes(btnVal);
            const isOperator = systemOperators.includes(btnVal);
            const isControl = controlButtons.includes(btnVal);
            
            if (isDigit || isOperator || isControl) {
                this.display += btnVal;
                this.ExprEvaled = false
            }
        
        }
    },
    convertExpressionFromBase(expr, base) {
        return expr.replace(/\b[0-9A-F]+\b/gi, match => {
            return parseInt(match, base).toString(10);
        });
    },
    
    convertBase(from, to) {
        if (this.display === '' || this.display === 'Error' || this.display === 'INFINITY') return;
    
        const baseMap = { 'BIN': 2, 'DEC': 10, 'HEX': 16 };
        const base = baseMap[to];
        const oldbase = baseMap[from]
        const currentExpr = this.display
                        .replace(/AND/g, '&')
                        .replace(/XOR/g, '^')
                        .replace(/OR/g, '|')
                        .replace(/NOT/g, '~')
                        .replace(/\b[0-9A-F]+\b/gi, (match) => {
            const dec = parseInt(match, oldbase); 
            if (isNaN(dec)) return match;
            return dec.toString(base).toUpperCase();
        })
    
        this.display = currentExpr 
                .replace(/&/g, 'AND')
                .replace(/\^/g, 'XOR')
                .replace(/\|/g, 'OR')
                .replace(/~/g, 'NOT');
    },
    
    setNewBase(btnVal){
        this.oldbase = this.base;
        this.base = btnVal;
        this.convertBase(this.oldbase, this.base);
    }
  },
})
