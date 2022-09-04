import React from 'react';
import {Linking, View, Text, StyleSheet, Pressable } from 'react-native';

function MyLinks() {
   return (
        <>
    <View style={styles.myLinks}>
          <Text>This is my GitHub page: </Text>
          <Pressable onPress={() => Linking.openURL('https://github.com/sheriffkule')}>
            {({ pressed }) =>
              <Text style={{
                fontSize: 20,
                fontWeight: '500',
                marginLeft: 15,
                textDecorationLine: 'underline',
                color: pressed ? 'red' : 'blue'
              }}>GitHub Page.</Text>
            }
          </Pressable>
        </View>
        <View style={styles.myLinks}>
          <Text>My Linkedin Page: </Text>
          <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/zeljko-vranjkovic-1bb834240/')}>
            {({ pressed }) =>
              <Text style={{
                fontSize: 20,
                fontWeight: '500',
                marginLeft: 15,
                textDecorationLine: 'underline',
                color: pressed ? 'red' : 'blue'
              }}>Linkedin Page.</Text>
            }
          </Pressable>
            </View>
            <View style={styles.myLinks}>
            <Text>Contact me via email:   </Text>
            <Pressable onPress={() => Linking.openURL('mailto:zeljko225@yahoo.com')}>
                {({ pressed }) => <Text style={{
                    fontSize: 20,
                        fontWeight: '500',
                        marginLeft: 5,
                        textDecorationLine: 'underline',
                    color: pressed ? 'red' : 'blue'
                }}>Yahoo mail</Text>
                }
                </Pressable>
                <Pressable onPress={() => Linking.openURL('mailto:sheriff.kule@gmail.com')}>
                    {({ pressed }) => <Text style={{
                        fontSize: 20,
                        fontWeight: '500', 
                        marginLeft: 15,
                        textDecorationLine: 'underline',
                        color: pressed ? 'red' : 'blue'
                    }}>Gmail</Text>
                    }
                </Pressable>
            </View>
        </>
    )
}

export default MyLinks;

const styles = StyleSheet.create({
    myLinks: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginVertical: 8,
    },
});
