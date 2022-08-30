import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function UserScreen({route, navigation}) {
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
          <Text>"Sheriff Kule."</Text>
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
    fontSize: 35,
    marginHorizontal: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    width: 150,
    alignSelf: 'center',
  },
});
