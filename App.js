import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
 const [userNumber, setUserNumber] =  useState();

 function pickedNumberHandler(pickedNumber){
  setUserNumber(pickedNumber);
 }

//  onPickNumber prop is named by our choosing.
 let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if(userNumber){
    screen = <Game  />;
  }

  return (
    // By default, View only takes up the content it needs
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover' 
        style={styles.rootScreen}
        imageStyle={{opacity: 0.25}} // Or imageStyle={styles.backgroundImage}
        >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // Fill the whole screen
  },
  backgroundImage: {opacity: 0.25},
});

// expo install looks at the version of expo that you are using and install a dependency version that works with that version.