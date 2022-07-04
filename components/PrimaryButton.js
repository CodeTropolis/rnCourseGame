import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

// {children} as arg = props destructure
// Otherwise, use props as arg and in component use props.children.
const PrimaryButton = ({children}) => {
  const foo = () => console.log('foo');
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        android_ripple={{color:'#640223'}}
        // pressed comes from Pressable 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={foo} 
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