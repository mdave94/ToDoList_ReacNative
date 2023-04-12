
import {View ,TextInput,StyleSheet,Button} from 'react-native'

function GoalInput(props) {
    
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goal here !"
        onChangeText={props.inputHandler}
      />
      <Button title="Enter" onPress={props.addGoalHandler} />
    </View>
  );
}

export default GoalInput;


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        borderRadius: 12,
        marginRight: 7,
        padding: 8,
      }, 
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        flex: 1,
      },
});