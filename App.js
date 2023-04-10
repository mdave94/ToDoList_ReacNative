import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.blueBorder}>Hello World! </Text>
  
      <Button title='Button' /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBorder:{
    borderWidth:2,
    borderColor:'blue',
    margin:16,
    padding:16
  }
});
