import {Text, type TextProps, StyleSheet} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
	lightColor?: string;
	darkColor?: string;
	type?: 'default' | 'title' | 'defaultMedium';
	typeColor?: 'textDarkGray' | 'textGray' | 'textLightGray' | 'textVeryLightGray';
};

export function ThemedText({
	                           style,
	                           lightColor,
	                           darkColor,
	                           type = 'default',
	                           typeColor = 'textGray',
	                           ...rest
                           }: ThemedTextProps) {
	const color = useThemeColor({light: lightColor, dark: darkColor}, typeColor);

	return (
		<Text
			style={[
				{color},
				type === 'default' ? styles.default : undefined,
				type === 'title' ? styles.title : undefined,
				type === 'defaultMedium' ? styles.defaultMedium : undefined,

				style,
			]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	default: {
		fontFamily: 'Inter-Regular',
		fontSize: 16,
	},
	defaultMedium: {
		fontFamily: 'Inter-Medium',
		fontSize: 14,
	},
	title: {
		fontFamily: 'Inter-Bold',
		fontSize: 20,
	},

});
