import {StyleSheet, SafeAreaView, type ViewProps} from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedSafeAreaView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <SafeAreaView style={[{ backgroundColor }, styles.container]} {...otherProps} />;
}

const styles = StyleSheet.create({
container: {
  flexDirection: 'column',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
}})