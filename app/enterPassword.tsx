import {ThemedView} from "@/UI/ThemedView";
import {Image, StyleSheet, type TextProps, View} from "react-native";
import {ThemedText} from "@/UI/ThemedText";
import {PhoneInput} from "@/UI/PhoneInput";
import React, {useState} from "react";
import {Checkbox} from "@/UI/Checkbox";
import {Link} from "expo-router";
import {Button} from "@/UI/Button";
import {ThemedPagesContainer} from "@/components/ThemedPagesContainer";
import {ButtonLoading} from "@/UI/ButtonLoading";
import {ThemedLink} from "@/UI/ThemedLink";
import {PasswordInput} from "@/UI/PasswordInput";


export default function EnterPassword() {
 const [password, setPassword] = useState('');

 function onChangeText(text: string) {
	setPassword(text);
 }
	function onNext() {

	}

	return (
		<ThemedPagesContainer >
			<ThemedView style={styles.containerTop}>
				<ThemedText typeColor={'textVeryLightGray'} style={styles.textInstr}>
					Введите пароль с которым вы регистрировались на сайте
				</ThemedText>
				<PhoneInput/>
				<View style={styles.agreement}>
          <PasswordInput value={password} onChangeText={onChangeText}/>
					<ThemedText style={styles.textAgreement}>Забыли пароль?
						<ThemedLink href={'./'} style={styles.textAgreementLink} text={'Востановить пароль'}/>
					</ThemedText>
				</View>
				<ThemedLink href={'./'} style={styles.textCooperation} text={'Сотрудничество для парков и партнеров'}
				            typeColor={"textVeryLightGray"}/>
			</ThemedView>
			<ThemedView style={styles.containerButton}>
				<Button title={'Далее'} onPress={onNext}/>
				{/*<ButtonLoading title={'Ожидайте'}/>*/}
			</ThemedView>
		</ThemedPagesContainer>
	)
}

const styles = StyleSheet.create({
	containerTop: {
		flexDirection: 'column',
		width: '100%',
		gap: 10,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flex: 1,
	},
	title: {
		width: '100%',
		letterSpacing: 0.255,
		marginBottom: 10,
		textAlign: "left"
	},
	textInstr: {
		fontSize: 14,
		letterSpacing: 0.255,
	},
	agreement: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		width: '100%',
	},
	textAgreement: {
		fontSize: 12,
	},
	textAgreementLink: {
		marginLeft: 5,
		color: '#F9C43E',
		fontSize: 12,
		textDecorationLine: 'none',
	},
	textCooperation: {
		width: '100%',
		fontSize: 12,
		textDecorationLine: 'underline',
	},
	containerButton: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	}

});