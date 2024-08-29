import {useRef, useState} from 'react';

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperator = useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
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
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch(lastOperator.current){

      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        throw new Error('Incorrect Operation');
    };
    setPrevNumber('0');
  }

  return {
    //Properties
    number,
    prevNumber,

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
