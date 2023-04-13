import { StyleSheet, View, FlatList,Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";


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
    setModalIsVisible(false)
  }

  function deleteGoalhandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal)=> goal.id !== id);
    })
    
  }

  function endAddGoalhendler(){
    setModalIsVisible(false)
  }

  return (
    <>{/* for user experience. Status bar became white */}
    <StatusBar style="light"/>  
    <View style={styles.appContainer}>
      <Button color="#b180f0"  title="Add Goal"  onPress={startAddGoalHandler}/>
      <GoalInput close={endAddGoalhendler} isVisible={modalIsVisible} addGoalHandler={addGoalHandler} />
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
    </>
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
