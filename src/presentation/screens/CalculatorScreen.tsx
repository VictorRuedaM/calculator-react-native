import {Pressable, Text, View} from 'react-native';
import { globalStyles } from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.containerScreen}>
        <Text style={globalStyles.subResult}>15</Text>
        <Text style={globalStyles.mainResult}>1500</Text>
      </View>

      <View style={globalStyles.containerRows}>
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>1</Text>
        </Pressable>
      </View>
    </View>
  );
};
