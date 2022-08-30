import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function GoalsScreen({route, navigation}) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <LinearGradient
      colors={['#191970', '#263bd9', '#3cadd4']}
      start={{x: 0.5, y: 0.2}}
      locations={[0, 0.3, 0.9]}
      style={styles.rootContainer}>
      <View>
        <Text style={styles.highlight}>
          <Text>
            "Welcome to the wonderful world of React Native. I am working hard
            in an effort to learn as best as possible, and to become a good
            front end React Native developer."
          </Text>
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Open Drawer"
            onPress={openDrawerHandler}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export default GoalsScreen;

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
    fontSize: 25,
    marginHorizontal: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    width: 150,
    alignSelf: 'center',
  },
  button: {
    paddingTop: 20,
  },
});
