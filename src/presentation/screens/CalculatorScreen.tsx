import {Text, View} from 'react-native';
import { colors, globalStyles } from '../../config/theme/app-theme';
import { CalculatorButton} from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const {number, buildNumber} = useCalculator();
  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.containerScreen}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={globalStyles.mainResult}>{number}</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.containerRows}>
        <CalculatorButton onPress={() => console.log('')} label="C" color={colors.lightGray} blackText={true} />
        <CalculatorButton onPress={() => console.log('')} label="+/-" color={colors.lightGray} blackText={true} />
        <CalculatorButton onPress={() => console.log('')} label="Del" color={colors.redLight} blackText={true} />
        <CalculatorButton onPress={() => console.log('')} label="÷" color={colors.orange} blackText={true}/>
      </View>

      <View style={globalStyles.containerRows}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" color={colors.darkGray} />
        <CalculatorButton onPress={() => console.log('')} label="x" color={colors.orange} blackText={true}/>
      </View>

      <View style={globalStyles.containerRows}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" color={colors.darkGray} />
        <CalculatorButton onPress={() => console.log('')} label="−" color={colors.orange} blackText={true}/>
      </View>

      <View style={globalStyles.containerRows}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" color={colors.darkGray} />
        <CalculatorButton onPress={() => console.log('')} label="+" color={colors.orange} blackText={true}/>
      </View>

      <View style={globalStyles.containerRows}>
        <CalculatorButton onPress={() => buildNumber('0')} label="0" color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber('.')} label="." color={colors.darkGray} />
        <CalculatorButton onPress={() => console.log('')} label="=" color={colors.orange} doubleSize={true}  blackText={true}/>
      </View>

    </View>
  );
};
