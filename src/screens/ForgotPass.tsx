import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FloatingLabelInput from '../components/input';
import Button from '../components/button';

const ForgotPass = () => {
  const [email, setemail] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Find your account</Text>
      <Text style={styles.emailText}>Enter your email address or username</Text>
      <TouchableOpacity>
        <Text style={styles.resetText}>Cant reset your password?</Text>
      </TouchableOpacity>

      <FloatingLabelInput
        label="Email address or username"
        value={email}
        onChangeText={setemail}
      />
      <Text style={styles.inputLabel}>
        You may receive Whatsapp and SMS notifications from us for security and
        login purposes.
      </Text>
      <Button
        title="Continue"
        onPress={() => {
          console.log('salam');
        }}
      />
      <Button
        title="Search by mobile instead"
        backgroundColor="#fff"
        textColor="black"
        borderColor="black"
        onPress={() => {
          console.log('salam');
        }}
      />
    </SafeAreaView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
  },
  emailText: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 16,
  },
  resetText: {
    color: '#405DE6',
    fontSize: 18,
    fontWeight: '400',
  },
  inputLabel: {
    marginTop: 4,
  },
});
