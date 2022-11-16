//Luodaan muuttuja, joka tallentaa kaikki buttonit ja teksti-elementit käyttöen querySelector
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

//Luodaan class,jonka nimi on Calculator, jolla on toiminnot
class Calculator
{
    constructor(){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if( isNaN(prev) || isNaN(current)) return;
        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default: return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number){
        const stringNum = number.toString();
        const int = parseFloat(stringNum.split('.')[0]);
        const dec = stringNum.split('.')[1];
        let intDisplay;

        if (isNaN(int)) intDisplay = '';
        else intDisplay = int.toLocaleString('en', {maximumFractionDigits: 0});

        if (dec != null) return `${intDisplay}.${dec}`;
        else return intDisplay;
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null)
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        else this.previousOperandTextElement.innerText = '';
    }
}
    //Luodaan addEventListener numeron klikkaamista varten
    //Kutsutaan appendNumber metodia ja sen jälkeen updateDisplay metodia
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
    //Luodaan addEventListener operaattorin klikkaamista varten
    //Kutsutaan chooseOperation sekä updateDisplay metodia ja sn jälkeen updateDisplay metodia
    operationButtons.forEach(button => {
      button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})
    ////Luodaan addEventListener (=) -operaattorin klikkaamista varten
    //Kutsutaan compute metodia sekä updateDisplay metodia
      equalsButton.addEventListener('click', () => {
        calculator.compute();
        calculator.updateDisplay();
})
    //Luodaan addEventListener (AC) -operaattorin klikkaamista varten
    //Kutsutaan clear metodia sekä updateDisplay metodia
      allClearButton.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
})
    //Luodaan addEventListener (DEL) -operaattorin klikkaamista varten
    //Kutsutaan clear metodia sekä updateDisplay metodia
    deleteButton.addEventListener('click', () => {
        calculator.delete();
        calculator.updateDisplay();
})
  //Laskin saa edeletävistä tiedoista datan ja alempana se käynnistää toiminnot
  const calculator = new Calculator();
