import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
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
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal here !"
          onChangeText={inputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#b180f0"  title="Enter" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.close} />
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
    borderColor: "#e4d0ff",
    width: "100%",
    backgroundColor:"#e4d0ff",
    color:"#120438",
    borderRadius: 12,
    padding: 16,
    
  },
  inputContainer: {
    padding: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
    borderBottomWidth: 1,
    
    flex: 1,
    backgroundColor:'#311b6b',
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20,

  }
});
