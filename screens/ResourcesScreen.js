import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ResourcesScreen() {
    return (
        <LinearGradient
            colors={['#191970', '#263bd9', '#3cadd4']}
            start={{ x: 0.5, y: 0.2 }}
            locations={[0, 0.3, 0.9]}
            style={styles.rootContainer}>
    <Text style={styles.title}>Internet recources for learning.</Text>
    </LinearGradient>
    )
}

export default ResourcesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop: 12,
        color: '#aed9e0',
    },
});