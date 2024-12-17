import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export  default function  SplashScreen(){
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/splash.png')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
    },
});