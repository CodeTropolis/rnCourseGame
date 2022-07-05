import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

// {children} as arg = props destructure
// Otherwise, use props as arg and in component use props.children.
// onPress is what we are calling when the button is pressed - can be named anything.
const PrimaryButton = ({children, myPressHandler}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        android_ripple={{color:'#640223'}}
        // pressed comes from Pressable 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        // The onPress on the left is from the Pressable component.
        onPress={myPressHandler} 
        > 
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    margin: 6,
    overflow: 'hidden',
  },
  buttonInnerContainer:{
    backgroundColor: '#72063c',
    paddingVertical: 10,
    elevation: 2,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center', 
  },
  pressed: {
    opacity: 0.5,
  }
});