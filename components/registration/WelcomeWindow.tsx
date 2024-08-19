import {ThemedView} from "@/UI/ThemedView";
import {Image, StyleSheet, type TextProps} from "react-native";
import LoadingBar from "@/UI/LoadingBar";
import {ThemedText} from "@/UI/ThemedText";
import {Button} from "@/UI/Button";
import {ThemedPagesContainer} from "@/components/ThemedPagesContainer";

export type WelcomeWindowProps = {
	loading?: boolean;
	duration?: number;
	durationStep?: number;
	onStart: () => void
};

export default function WelcomeWindow(
	{
		loading, duration, durationStep, onStart
	}: WelcomeWindowProps) {
	return (
		<ThemedPagesContainer>
			<ThemedView style={styles.titleContainer}>
				<Image
					source={require('@/assets/images/Logo_Yapartner.png')}
					style={styles.logo}
				/>
			</ThemedView>
			<ThemedView style={styles.imagesContainer}>
				<Image
					source={require('@/assets/images/rafiki.png')}
					style={styles.imgTaxi}
					resizeMode="contain"
				/>
				{loading ? (<LoadingBar duration={duration} durationStep={durationStep}/>)
					: (<ThemedText style={styles.welcomeText} type={'title'}>
						Добро пожаловать, партнер!
					</ThemedText>)
				}
			</ThemedView>
			<ThemedView style={styles.buttonContainer}>
				{!loading &&
			<Button title={'Начнем'} onPress={onStart}/>
				}
			</ThemedView>
		</ThemedPagesContainer>
	)
}

const styles = StyleSheet.create({

	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imagesContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		flex: 1,
		width: '100%',
		gap: 50,
	},
	logo: {
		height: 32,
		width: 140,
	},
	imgTaxi: {
		maxWidth: '100%'
	},
	buttonContainer: {
		width: '100%'
	},
	welcomeText: {
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'center',
	}
});