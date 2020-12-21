import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, Button } from 'react-native';

// import { index as TopScreen } from './src/components/Pages/TopPage/index'
// import { index as ProfileScreen } from './src/components/Pages/ProfilePage/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Main = () => {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <Button
        title="main"
        onPress={() => {
          navigate('Sub')
        }} />
      <Text>go to sub</Text>
    </View>
  )
}

const Sub = () => {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
      <Button
        title="Sub"
        onPress={() => {
          navigate('Main')
        }} />
      <Text>go to main</Text>
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Sub" component={Sub} />
        {/* <Stack.Screen
          name="Home"
          component={TopScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
