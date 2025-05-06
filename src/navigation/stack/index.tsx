import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Home from '../../screens/Home';
import ForgotPass from '../../screens/ForgotPass';
import NewAcc from '../../screens/NewAcc';

const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
    Login: undefined;
    Home: { username: string, password:string };
    ForgotPass: undefined
    NewAcc: undefined
  };

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
      />
       <Stack.Screen
        name="NewAcc"
        component={NewAcc}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
