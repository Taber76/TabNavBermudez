import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <AppNavigator />  
  );
}
