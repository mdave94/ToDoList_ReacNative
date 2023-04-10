import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your goal here !'/>
        <Button title='Enter'/>
      </View>
      <View style={styles.goalsContainer}>
        <Text> List of Goals </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer :{
    paddingTop: 50,
    paddingHorizontal:16,
    flex:1

  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:16,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    flex:1,
    
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    borderRadius:12,
    marginRight:7,
    padding:8,
    
  },
  goalsContainer:{
    flex:5
  }
  
});
