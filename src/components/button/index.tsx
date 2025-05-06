import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor = '#5B51D8',
  borderColor = '#5B51D8',
  textColor = '#fff',
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor, borderColor}, style]}
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    width: '100%',
    borderRadius: 20,
    marginTop: 16,
    alignItems: 'center',
    borderWidth: 0.8,
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'SF-Pro',
  },
});

export default Button;
