import {ThemedView} from "@/UI/ThemedView";
import {Image, StyleSheet, type TextProps, View} from "react-native";
import {ThemedText} from "@/UI/ThemedText";
import {PhoneInput} from "@/UI/PhoneInput";
import React, {useState} from "react";
import {Checkbox} from "@/UI/Checkbox";
import {Link, router} from "expo-router";
import {Button} from "@/UI/Button";
import {ThemedPagesContainer} from "@/components/ThemedPagesContainer";
import {ButtonLoading} from "@/UI/ButtonLoading";
import {ThemedLink} from "@/UI/ThemedLink";


export default function PhoneRegistration() {
	const [isChecked, setIsChecked] = useState(false);

	function toggleCheckbox() {
		setIsChecked(!isChecked);
	}
	function onNext() {
		router.push({ pathname: '/enterPassword', params: { user: 'jane' } });
	}

	return (
		<ThemedPagesContainer >
			<ThemedView style={styles.containerTop}>
				<ThemedText type={'title'} style={styles.title}>Добро пожаловать</ThemedText>
				<ThemedText typeColor={'textVeryLightGray'} style={styles.textInstr}>
					Для авторизации, введите свой номер телефона
				</ThemedText>
				<PhoneInput/>
				<View style={styles.agreement}>
					<Checkbox isChecked={isChecked} onToggle={toggleCheckbox}/>
					<ThemedText style={styles.textAgreement}>Я согласен с
						<ThemedLink href={'./'} style={styles.textAgreementLink} text={'с условиями использования'}/>
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