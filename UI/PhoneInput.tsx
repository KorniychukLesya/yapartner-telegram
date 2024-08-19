import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity
} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {CountryPicker} from "react-native-country-codes-picker";
import CountryFlag from "react-native-country-flag";


export const PhoneInput = () => {
    const [phone, setPhone] = React.useState('');
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('380');
    const [countryFlag, setCodeFlag] = useState('ua');

    const openCountry= () => {
        setShow(!show);
    }
    const disabled = false;

    return (
        <View
            style={styles.container}>
            <TouchableOpacity
                onPress={openCountry}
                activeOpacity={0.7}
                disabled={disabled}
                style={styles.containerFlag}>

            <CountryFlag isoCode={countryFlag} size={14} />
            <Image
                style={styles.selectIcon}
                source={require('@/assets/images/select_icon.svg')}
            />
                <View style={styles.line}/>
                </TouchableOpacity >
            <Text style={styles.phone}>{countryCode}</Text>
            <CountryPicker
                show={show}
                pickerButtonOnPress={(item) => {
                    console.log(item);
                    setCountryCode(item.dial_code);
                    setCodeFlag(item.code)
                    setShow(false);
                    setPhone('')

                }}
             lang={'ua'}
                style={{

                    // Styles for whole modal [View]
                    modal: {
                        position: 'absolute',
                        top: 130,
                        height: '100%',
                          },
                    // Styles for modal backdrop [View]
                    backdrop: {

                    },
                    // Styles for bottom input line [View]
                    line: {

                    },
                    // Styles for list of countries [FlatList]
                    itemsList: {

                    },
                    // Styles for input [TextInput]
                    textInput: {
                        height: 40,
                        borderRadius: 0,
                    },
                    // Styles for country button [TouchableOpacity]
                    countryButtonStyles: {
                        height: 80
                    },
                    // Styles for search message [Text]
                    searchMessageText: {

                    },
                    // Styles for search message container [View]
                    countryMessageContainer: {

                    },
                    // Flag styles [Text]
                    flag: {

                    },
                    // Dial code styles [Text]
                    dialCode: {

                    },
                    // Country name styles [Text]
                    countryName: {

                    }
                }}
            />
            <MaskInput
                value={phone}
                onChangeText={(masked, unmasked) => {
                    setPhone(masked); // you can use the unmasked value as well
                }}
                mask={[ '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
                placeholderFillCharacter={'X'}
                style={phone.length > 11 ? styles.maskedInputFull : styles.maskedInput}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 12,
        borderStyle: 'solid',
        overflow: 'hidden',
        padding: 14,
    },
    containerFlag: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },

    maskedInput: {
        color: '#A5A5A5',
        fontSize: 14,
        fontWeight: 400
    },
    maskedInputFull: {
        color: '#0A0A17',
        fontSize: 14,
        fontWeight: 400
    },
    countryPicker: {
        width: '80%'
    },

    selectIcon: {
      display: 'flex',
    },

    phone: {
        fontSize: 14,
        fontWeight: 400
    },
    line: {
        width: 1,
        height: 16,
        backgroundColor: '#ccc'
    }
});