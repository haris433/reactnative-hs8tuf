import React from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      padding: 5,
      marginBottom: 5,
      borderRadius: 15,
      backgroundColor: '#FF018786',
    },
    floatingActionButton: {
      elevation: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#AFE1AF",
      padding: 5,
      borderRadius: 15,
      position: 'absolute',
      bottom: 10,
      right: 10,
      width: 50,
      height: 50,
    },
    submitButton: {
      position: 'relative',
      elevation: 5,
      alignItems: "center",
      backgroundColor: "#AFE1AF",
      padding: 5,
      borderRadius: 30,
      marginLeft: '20%',
      marginRight: '20%',
      marginBottom: 10
    },
  });

export default styles;