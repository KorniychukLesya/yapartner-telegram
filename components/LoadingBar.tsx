import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default function LoadingBar({duration = 500, durationStep = 10}) {
    const [progress, setProgress] = useState(0); // Начальное значение прогресса
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const nextValue = prev + durationStep;
                if (nextValue >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return nextValue;
            });
        }, duration); // Каждые 500 мс увеличиваем прогресс на 10%

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Анимация ширины полосы загрузки
        Animated.timing(animation, {
            toValue: progress,
            duration: duration, // Длительность анимации должна совпадать с интервалом обновления прогресса
            useNativeDriver: false,
        }).start();
    }, [progress, animation]);

    const widthInterpolated = animation.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <Animated.View style={[styles.progress, { width: widthInterpolated }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
    },
    progressBar: {
        height: 7,
        width: '100%',
        backgroundColor: '#E6E6E6',
        borderRadius: 5,
    },
    progress: {
        height: '100%',
        backgroundColor: '#F9C30B', // Цвет полосы загрузки
        borderRadius: 5,
    },
});
