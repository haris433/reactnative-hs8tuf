import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker'

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

const Home = ({ navigation }) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")

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
      <Text style={{alignSelf:'center', fontSize:20}}>
        {"Task Title"}
      </Text>

      <TextInput style={{alignSelf:'center', fontSize:18}}
        placeholder={"Task"}
        onChangeText={(value) => setName(value)}
        />

      <Text style={{alignSelf:'center', fontSize:20}}>
        {"Due Date"}
      </Text>
      <Text style={{alignSelf:'center', fontSize:18}}>
        {"Selected: " + date.toDateString()}
      </Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => setOpen(true)} 
      >
        <Text style={{ fontSize: 18 }}>Select New Due Date</Text>
      </TouchableOpacity>

      {/* Date Picker */}
      {/* https://github.com/henninghall/react-native-date-picker */}
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

      <TouchableOpacity
      style={styles.submitButton}
      onPress={() =>
        navigation.navigate('Home', {key: 0, name: name, dueDate: date.toDateString(), done: false, doneDate: new Date().toDateString()})  
      }
      >
        <Text style={{fontSize:25}}>{"Submit"}</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Home;