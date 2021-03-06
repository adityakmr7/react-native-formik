import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
const { width:wWidth,height:wHeight} = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="User Name"
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Password"
        />
      </View>
      <View style={styles.signUpButtonBox}>
        <TouchableWithoutFeedback>
          <View style={styles.signUpButton}>
            <Text>SignUp</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000000',
    width: wWidth - 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
    
  },
  signUpButtonBox: {
    marginVertical: 10
  },
  signUpButton: {
    backgroundColor: 'cyan',
    width: wWidth - 40,
    height: 40,
    justifyContent: 'center',
    alignItems:'center'
  }
});
