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
        <Text>
          <Text style={styles.highlight}>
            "Micika, Bracika, Cicika, Picika."
          </Text>
        </Text>
        <Button title="Open Drawer" onPress={openDrawerHandler} />
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
    fontSize: 40,
  },
});
