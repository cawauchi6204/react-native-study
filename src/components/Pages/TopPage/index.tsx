import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export const index = () => {
  const [name, setName] = useState('')
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setName('hoge')}
          title="Press Me"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setName('fuga')}
          title="Press Me"
          color="#841584"
        />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          onPress={() => setName('piyo')}
          title="This looks great!"
        />
        <Button
          onPress={() => setName('poyo')}
          title="OK!"
          color="#841584"
        />
      </View>
    </View>
  )
}
