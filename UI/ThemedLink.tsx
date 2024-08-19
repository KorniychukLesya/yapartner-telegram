import { type TextProps, StyleSheet} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';
import {Link} from "expo-router";
import React from "react";

export type ThemedTextProps = TextProps & {
    text?: string;
    href: string;
	lightColor?: string;
	darkColor?: string;
	typeColor?: 'textDarkGray' | 'textGray' | 'textLightGray' | 'textVeryLightGray';
};

export function ThemedLink({
	                           style,
	                           lightColor,
	                           darkColor,
	                           typeColor = 'textGray',
                               text,
                               href = './',
	                           ...rest
                           }: ThemedTextProps) {
	const color = useThemeColor({light: lightColor, dark: darkColor}, typeColor);
	
    return (
    <Link
        href={href}
          style={[
              {color},
              styles.default,
              style,
          ]}
          {...rest}>
        {text}
    </Link>
	);
}

const styles = StyleSheet.create({
	default: {
		fontFamily: 'Inter-Regular',
		fontSize: 14,
	},
	
});
