import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
    label,
    value,
    onChangeText,
    secureTextEntry = false,
    ...rest
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(!secureTextEntry);
    const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;
  
    useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: isFocused || value ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [isFocused, value]);
  
    const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
        position: 'absolute',
        left: 12,
        top: animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [44, 32],
        }),
        fontSize: animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 14],
        }),
        fontWeight: '300',
        fontFamily: 'SF-Pro',
      };
      
  
    return (
      <View style={styles.container}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={value}
            secureTextEntry={!showPassword}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={onChangeText}
            style={styles.input}
            {...rest}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                size={18}
                color="#666"
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
  },
  username: {
    width: '100%',
    padding: 12,
    borderWidth: 0.8,
    borderRadius: 20,
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'SF-Pro',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    borderRadius: 20,
    paddingRight: 12,
    paddingLeft: 0,
    marginTop: 16,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'SF-Pro',
  },
  icon: {
    marginRight: 8,
  },
  
});

export default FloatingLabelInput;
