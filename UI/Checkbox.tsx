import React, { useState } from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

type CheckboxProps = {
    isChecked: boolean;
    onToggle: () => void;
};

export function Checkbox({ isChecked, onToggle }: CheckboxProps) {
    return (
        <TouchableOpacity onPress={onToggle} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
                {isChecked &&
                    <Image source={require('@/assets/images/Done.svg')} style={{width: 12, height: 12}}/>
                }
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: '#F9C43E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedCheckbox: {
        backgroundColor: '#F9C43E', // Цвет фона для чекнутого состояния
    },
});

