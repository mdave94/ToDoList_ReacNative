
import {View ,TextInput,StyleSheet,Button} from 'react-native'
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function inputHandler(inputText) {
        setEnteredGoalText(inputText);
      }

    function addGoalHandler(){
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goal here !"
        onChangeText={inputHandler}
      />
      <Button title="Enter" onPress={addGoalHandler} />
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