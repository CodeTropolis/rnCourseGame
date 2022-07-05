import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'

const StartGame = () => {
  const [enteredNumber, setEnteredNumber] = useState('')
  // We get the param from React Native
  function numberInputHandler(inputText) {
    setEnteredNumber(inputText);
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Entry', 'Number has to be between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
      return;
    }
    console.log('Confirmed Number: ' + chosenNumber);
  }
  function resetInputHandler() {
    setEnteredNumber('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType='number-pad'
        value={enteredNumber}
        onChangeText={numberInputHandler}
        />
      <View style={styles.buttonsContainer}>
      {/* Each button has own view with its own flexbox container (flexbox container is default for the View tag) */}
      {/* The idea here is that because each View will have the default flexbox container (flex direction: column as default), 
        adding flex: 1 will stretch button to fill available space. */}
      {/* So two columns within the parent row (buttonsContainer) */}
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton> 
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton myPressHandler={confirmInputHandler}>Confirm</PrimaryButton> 
        </View>
      </View>
    </View>
  )
}

export default StartGame

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 10,
    elevation: 8, // Shadow effect for Android only.
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity:0.5,
  },
  numberInput: {
    height: 40,
    width: 50,
    fontSize: 30,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 1,
    color: '#ddb52f',
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex:1,
  }
});