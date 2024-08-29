import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString.includes('.')) return;

    if(number.startsWith('0') || number.startsWith('-0')) {
      // Decimal point
      if(number === '.'){
        return setNumber(number + numberString);
      }
      //Evaluate if It's another zero and there is no point
      if(numberString === '0' && number.includes('.')){
        return setNumber(number + numberString);
      }
      //Evaluate if It's different from zero, there is no point and It's the first number
      if(numberString !== '0' && !number.includes('.')){
        return setNumber(numberString);
      }
      //Avoid zero whiout decimal point
      if(numberString === '0' && !number.includes('.')){
        return;
      }
      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  return {
    //Properties
    number,

    //Methods
    buildNumber,
  };
};
