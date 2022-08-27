import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function UserScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the{' '}
        <Text style={styles.highlight}>"Micika, Bracika, Cicika, Picika."</Text>
        screen!
      </Text>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
    fontStyle: 'italic',
    fontSize: 40,
  },
});
