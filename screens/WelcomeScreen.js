import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function WelcomeScreen() {
  return (
    <LinearGradient
      colors={['#191970', '#263bd9', '#3cadd4']}
      start={{x: 0.5, y: 0.2}}
      locations={[0, 0.3, 0.9]}
      style={styles.rootContainer}>
      <View style>
        <Text>
          <Text style={styles.highlight}>"Welcome"</Text>
        </Text>
      </View>
    </LinearGradient>
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
