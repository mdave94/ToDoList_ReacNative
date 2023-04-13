import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";

function GoalItem(props) {
  const [isPressed, setIsPressed] = useState(false);

  const onLongPressDelete = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      props.onDeleteItem(props.id);
    }, 500);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onLongPress={onLongPressDelete}
        onPressOut={() => setIsPressed(false)}
        style={({ pressed }) =>
          pressed || isPressed ? styles.pressedItem : null
        }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
