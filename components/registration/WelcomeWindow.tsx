import {ThemedView} from "@/components/ThemedView";
import {Image, StyleSheet, type TextProps} from "react-native";
import LoadingBar from "@/components/LoadingBar";
import {ThemedText} from "@/components/ThemedText";
import {Button} from "@/UI/Button";
import {ThemedSafeAreaView} from "@/components/ThemedSafeAreaView";

export type WelcomeWindowProps =  {
    loading?: boolean;
    duration?: number;
    durationStep?: number;
    onStart: () => void
};

export default function WelcomeWindow(
     {
    loading, duration, durationStep, onStart
}: WelcomeWindowProps ) {
    return (
        <ThemedSafeAreaView>
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
            : (<ThemedText>
                Добро пожаловать, партнер!
            </ThemedText>)
        }


    </ThemedView>
    <ThemedView style={styles.buttonContainer}>
        {!loading && <ThemedText>
            <Button title={'Начнем'} onPress={onStart}/>
        </ThemedText>
        }
    </ThemedView>

</ThemedSafeAreaView>
)}

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
    buttonContainer: {}
});