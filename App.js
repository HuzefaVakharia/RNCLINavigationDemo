/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';








function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>





      <TouchableOpacity onPress={()=>navigation.navigate('SecondScreen')} activeOpacity={0.6} style={styles.button} >

<Text style={styles.TextStyle}>Go to Second Screen</Text>

</TouchableOpacity>




    </View>
  );
}



function SecondScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>



      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} activeOpacity={0.6} style={styles.button} >

<Text style={styles.TextStyle}>Go to Home Screen</Text>

</TouchableOpacity>




    </View>
  );
}






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#ffffff',
    //backgroundColor: '#2704f0',
  },
  button: {

    width: '30%',

    padding: 8,

    backgroundColor: '#8b7cdf',

    borderRadius:responsiveHeight(10),

    justifyContent: 'center',

    alignItems: 'center',
    margin:responsiveHeight(0.7),


  },
  TextStyle:{

    color:'#fff',

},
});