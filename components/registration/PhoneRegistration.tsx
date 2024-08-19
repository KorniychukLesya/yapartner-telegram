import {ThemedView} from "@/components/ThemedView";
import {Image, StyleSheet, type TextProps, View} from "react-native";
import LoadingBar from "@/components/LoadingBar";
import {ThemedText} from "@/components/ThemedText";
import {ThemedSafeAreaView} from "@/components/ThemedSafeAreaView";
import {PhoneInput} from "@/UI/PhoneInput";
import React, {useState} from "react";
import {Checkbox} from "@/UI/Checkbox";
import {Link} from "expo-router";
import {Button} from "@/UI/Button";


export default function PhoneRegistration( ) {
    const [isChecked, setIsChecked] = useState(false);

    function toggleCheckbox() {
        setIsChecked(!isChecked);
    }

    function onNext() {

    }

    return (
        <ThemedSafeAreaView style={styles.containerRegistration}>
            <ThemedView  style={styles.containerTop}>
                <ThemedText style={styles.title}>Добро пожаловать</ThemedText>
                <ThemedText style={styles.textInstr}>Для авторизации, введите свой номер телефона</ThemedText>
                <PhoneInput/>
                <View style={styles.agreement}>
                    <Checkbox isChecked={isChecked} onToggle={toggleCheckbox} />
                    <ThemedText style={styles.textAgreement}>Я согласен с <Link href={'./'} style={styles.textAgreementLink}>условиями пользования</Link></ThemedText>
                </View>
                <Link href={'./'} style={styles.textCooperation}>Сотрудничество для парков и партнеров</Link>
            </ThemedView>

            <ThemedView  style={styles.containerButton}>
                <Button title={'Далее'} onPress={onNext}/>
            </ThemedView>

        </ThemedSafeAreaView>
)}

const styles = StyleSheet.create({
    containerRegistration: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
    },

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
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 0.255,
        marginBottom: 10,
        textAlign: "left"

    },
    textInstr: {
        color: '#A5A5A5',
        fontSize: 14,
        fontWeight: 400,
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
        fontWeight: 400,
    },
    textAgreementLink: {
        color: '#F9C43E',
        fontSize: 12,
        fontWeight: 400,
        textDecorationLine: 'none',
    },
    textCooperation: {
        width: '100%',
        color:  '#A5A5A5',
        fontSize: 12,
        fontWeight: 400,
        textDecorationLine: 'underline',
    },
    containerButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }

});