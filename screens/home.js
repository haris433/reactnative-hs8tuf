import React, { useEffect, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../styles/styles.js'

var tasks = [
  {
      name: "Do Homework",
      dueDate: new Date().toDateString(),
      done: false,
      doneDate: new Date().toDateString()
  },
  {
      name: "Study",
      dueDate: new Date().toDateString(),
      done: true,
      doneDate: new Date().toDateString()
  },
  {
    name: "Exercise",
      dueDate: new Date().toDateString(),
      done: false,
      doneDate: new Date().toDateString()
  }
]

function sorting(){
  var notDoneItems = [];
  var doneItems = [];
  tasks.map((task, i) => {
    if (task.done == true){
      doneItems.push(task)
    } else {
      notDoneItems.push(task)
    }


    // Compare dates, dueDate for notDoneItems, doneDate for doneItems    
    doneItems.sort(function(a,b){
      return new Date(a.doneDate) - new Date(b.doneDate)
    });

    notDoneItems.sort(function(a,b){
      return new Date(a.dueDate) - new Date(b.dueDate)
    });

    tasks = []
    notDoneItems.map((task, i) =>{
      tasks.push(task)
    })
    doneItems.map((task, i) => {
      tasks.push(task)
    })

    
  })

  return (null);
}

const Home = ({ route, navigation }) => {

  if (route.params){
    if (route.params.key == 0){
      //console.log(route.params)
      tasks.push({name: route.params.name, dueDate: route.params.dueDate, done: route.params.done,
        doneDate: route.params.doneDate})
      route.params.key = -1
      sorting()
    } 
    if (route.params.key == 1){
      tasks[route.params.itemPos] = {
        name: route.params.name,
        dueDate: route.params.dueDate,
        done: route.params.done,
        doneDate: route.params.doneDate
      }
      route.params.key = -1
      sorting()
    }
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [check, setCheck] = useState(false)
  sorting()

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View>
          {tasks.map((task, i) => {

            var doneDateText = "Not Completed"
            if (task.done == true){
              doneDateText = "Completed On: " + task.doneDate
            }

            return (
              <>
              <View>
                <TouchableOpacity
                  key={i}
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate('EditItem', {itemPos: i, name: task.name, dueDate: task.dueDate, done: task.done, doneDate: task.doneDate})  
                  }
                >
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{task.name}</Text>
                <Text style={{fontSize: 15}}>{"Due On: " + task.dueDate}</Text>
                <Text style={{ fontSize: 18 }}>Completed?</Text>
                <CheckBox
                  disabled={false}
                  value={task.done}
                  onValueChange={(newValue) => {
                    tasks[i].done = newValue
                    tasks[i].doneDate = new Date().toDateString()
                    setCheck(!check)
                    sorting()
                  }}
                />
                <Text style={{fontSize: 15}}>{doneDateText}</Text> 

                </TouchableOpacity>
              </View>
              </>
            );
            
          })}

        </View>
        
      </ScrollView>
      
      <TouchableOpacity 
            style={styles.floatingActionButton}
            onPress={() =>
                navigation.navigate('AddItem')
              }
        >
          <Text style={{fontSize:25}}>{"+"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;