import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker'
import CheckBox from '@react-native-community/checkbox';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Button,
  Alert,
  TextInput,
} from 'react-native';

import { StyleSheet, TouchableOpacity, Text } from "react-native";

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../styles/styles.js'

const Home = ({ route, navigation }) => {

  const [date, setDate] = useState(new Date(route.params.dueDate))
  const [open, setOpen] = useState(false)
  const [ddOpen, setDDOpen] = useState(false)
  const [name, setName] = useState( route.params.name )
  const [done, setDone] = useState ( route.params.done )
  const [doneDate, setDoneDate] = useState ( new Date(route.params.doneDate) )

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={{alignSelf:'center', fontSize:16}}>
        {"Task Title"}
      </Text>

      <TextInput style={{alignSelf:'center', fontSize:13}}
        value={name}
        onChangeText={(value) => setName(value)}
        />

      <Text style={{alignSelf:'center', fontSize:16}}>
        {"Due Date"}
      </Text>
      <Text style={{alignSelf:'center', fontSize:13}}>
        {"Selected: " + date.toDateString()}
      </Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => setOpen(true)} 
      >
        <Text style={{ fontSize: 12 }}>Select New Due Date</Text>
      </TouchableOpacity>
      
      <DatePicker style={{alignSelf:'center'}}
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

      <Text style={{alignSelf:'center', fontSize: 16}}>
        {"Completed?"}
      </Text>

      <CheckBox style={{alignSelf:'center'}}
        disabled={false}
        value={done}
        onValueChange={(newValue) => setDone(newValue)}
      />

      <Text style={{alignSelf:'center', fontSize: 16}}>
        {"Done Date"}
      </Text>

      <Text style={{alignSelf:'center', fontSize: 13}}>
        {"Selected: " + doneDate.toDateString()}
      </Text>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => setDDOpen(true)} 
      >
        <Text style={{ fontSize: 12 }}>Select New Done Date</Text>
      </TouchableOpacity>
      <DatePicker style={{alignSelf:'center'}}
        modal
        open={ddOpen}
        date={doneDate}
        mode='date'
        onConfirm={(newDate) => {
          setDDOpen(false)
          setDoneDate(newDate)
        }}
        onCancel={() => {
          setDDOpen(false)
        }}
      />

      <TouchableOpacity
      style={styles.submitButton}
      onPress={() =>
        navigation.navigate('Home', {
          key: 1, 
          itemPos: route.params.itemPos,
          name: name, 
          dueDate: date.toDateString(), 
          done: done,
          doneDate: doneDate.toDateString()
        })  
      }
      >
        <Text style={{fontSize:16}}>{"Submit"}</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Home;