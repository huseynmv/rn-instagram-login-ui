import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FloatingLabelInput from '../components/input';
import Button from '../components/button';

const NewAcc = () => {
  const [username, setusername] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose your username</Text>
      <Text style={styles.subtitle}>You can always change it later</Text>

      <FloatingLabelInput
        label="Username"
        value={username}
        onChangeText={setusername}
      />
      <Button
        title="Next"
        onPress={() => {
          console.log('salam');
        }}
      />
    </SafeAreaView>
  );
};

export default NewAcc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
});
