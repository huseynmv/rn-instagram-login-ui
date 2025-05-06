import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/stack';
import {Text} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<Props> = ({route}) => {
  const {username, password} = route.params;

  return (
    <>
      <Text>username: {username}</Text>
      <Text>password: {password}</Text>
    </>
  );
};
export default Home;
