import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Button from '../components/button';
import FloatingLabelInput from '../components/input';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../localization';
import {useTranslation} from 'react-i18next';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 2}}>
        <TouchableOpacity
          style={styles.languageContainer}
          onPress={() => setLanguageModalVisible(true)}>
          <Text style={styles.language}>{t('language')}</Text>
          <Icon name="angle-down" />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={{flex: 2}}>
        <FloatingLabelInput
          label={t('username')}
          value={username}
          onChangeText={setUsername}
        />
        <FloatingLabelInput
          label={t('password')}
          value={password}
          onChangeText={setpassword}
          secureTextEntry
        />
        <Button
          title={t('login')}
          onPress={() => {
            navigation.navigate('Home', {
              username: username,
              password: password,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPass');
          }}>
          <Text style={styles.forgetPass}>{t('forgot')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Button
          title={t('createAccount')}
          backgroundColor="#fff"
          textColor="#405DE6"
          borderColor="#405DE6"
          onPress={() => {
            navigation.navigate('NewAcc');
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="meta" size={30} color="#868686" />
          <Text style={styles.iconText}>Meta</Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}>
        <Pressable
          style={styles.modalContainer}
          onPress={() => setLanguageModalVisible(false)}>
          <Pressable
            style={styles.modalContent}
            onPress={e => e.stopPropagation()}>
            <Text style={styles.modalTitle}>Select Language</Text>

            <TouchableOpacity
              onPress={async () => {
                await AsyncStorage.setItem('user-language', 'en');
                i18n.changeLanguage('en');
                setLanguageModalVisible(false);
              }}>
              <Text style={styles.modalOption}>English</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={async () => {
                await AsyncStorage.setItem('user-language', 'az');
                i18n.changeLanguage('az');
                setLanguageModalVisible(false);
              }}>
              <Text style={styles.modalOption}>Azərbaycan dili</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingTop: 66,
  },
  language: {
    textAlign: 'center',
    marginRight: 4,
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 180,
    width: 180,
    marginTop: 88,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  iconText: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'SF-Pro',
    color: '#868686',
    marginLeft: 4,
  },
  forgetPass: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'SF-Pro',
    marginTop: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    fontSize: 16,
    paddingVertical: 10,
  },
});
