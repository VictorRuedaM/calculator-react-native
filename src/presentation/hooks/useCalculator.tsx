import {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '−',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const [formula, setFormula] = useState('');

  const lastOperator = useRef<Operator>();

  useEffect(() => {
    if(lastOperator.current){
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
    }else{
      setFormula(number);
    }
  },[number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('');
    lastOperator.current = undefined;
  };

  const deleteOperation = () => {
    if (number.length === 2 && number[0].includes('−')) {
      return setNumber('0');
    }
    if (number.length > 1) {
      return setNumber(number.substring(0, number.length - 1));
    }
    return setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('−')) {
      return setNumber(number.replace('−', ''));
    }
    return setNumber('−' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString.includes('.')) return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal point
      if (number === '.') {
        return setNumber(number + numberString);
      }
      //Evaluate if It's another zero and there is no point
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      //Evaluate if It's different from zero, there is no point and It's the first number
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      //Avoid zero whiout decimal point
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();
    
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const addOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.add;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.subtract;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.multiply;
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.divide;
  };

  const calculateResult = () => {

    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperator.current = undefined;
    setPrevNumber('0');
    
  };

  const calculateSubResult = (): number => {

    const [firstValue, operation, secondValue] = formula.split(' ');


    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if(isNaN(num2)) return num1;

    switch (lastOperator.current) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Incorrect Operation');
    }
  };

  return {
    //Properties
    number,
    prevNumber,
    formula,

    //Methods
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
  };
};
