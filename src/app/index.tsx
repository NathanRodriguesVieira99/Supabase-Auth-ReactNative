import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import colors from '../constants/colors/colors';

export default function Index() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={44} color={colors.green} />
    </View>
  );
}
