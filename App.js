import { StyleSheet, View, FlatList,Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible,setModalIsVisible] = useState(false)


  function startAddGoalHandler(){
    setModalIsVisible(true)
  }


  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalhandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal)=> goal.id !== id);
    })
    
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" color="blue" onPress={startAddGoalHandler}/>
      <GoalInput isVisible={modalIsVisible} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id = {itemData.item.id}
                onDeleteItem={deleteGoalhandler}
              />
            );
          }}
          alwaysBounceHorizontal={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
