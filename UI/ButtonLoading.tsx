import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ButtonProps, ActivityIndicator} from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = ButtonProps & {
  lightColor?: string;
  darkColor?: string;
  title?: string;
  onPress?: () => void;
  disabled?: boolean
  style?: any;
  textStyle?: any;
};

export function ButtonLoading({
  style,
  lightColor,
  darkColor, title, onPress, textStyle, disabled = false,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonText');
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonBackground');

  return (
      <TouchableOpacity
          style={[{backgroundColor},
            styles.button,
            style,
            disabled && styles.disabledButton,
          ]}
          onPress={onPress}
          activeOpacity={0.7}
          disabled={disabled}
          {...rest}
      >
        <ActivityIndicator color="#ffffff"/>
        <Text style={[{color},styles.buttonText, textStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    height: 44,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 700,
  },
  disabledButton: {
    backgroundColor: '#C3C3C3',
  },
});