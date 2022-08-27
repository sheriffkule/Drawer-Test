import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        <Text style={styles.highlight}>"Welcome"</Text>
      </Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
