import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';


type PasswordInputProps = {
	placeholder?: string;
	value: string;
	onChangeText: (text: string) => void;
};

export function PasswordInput ({ placeholder, value, onChangeText }: PasswordInputProps)  {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder={placeholder || 'Ваш пароль'}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={!isPasswordVisible}
			/>
			<TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
				<Image source={require('@/assets/images/password_eye_icon.svg')} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	input: {
		flex: 1,
		height: 40,
		fontSize: 16,
	},
	iconContainer: {
		padding: 5,
	},
});


