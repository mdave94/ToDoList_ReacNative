import { View, TextInput, StyleSheet, Button, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function inputHandler(inputText) {
    setEnteredGoalText(inputText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal animationType="slide" visible={props.isVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal here !"
          onChangeText={inputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Enter" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    borderRadius: 12,
    padding: 8,
  },
  inputContainer: {
    padding:16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
