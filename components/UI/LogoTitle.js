import React from 'react';
import {Image, StyleSheet} from 'react-native';

function LogoTitle() {
    return (
        <Image
            style={styles.image}
            source={require('../../assets/images/react.png')}
        />
    );
}

export default LogoTitle;

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
})