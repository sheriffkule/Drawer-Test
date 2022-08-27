import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function UserScreen({route, navigation}) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        <Text style={styles.highlight}>"Micika, Bracika, Cicika, Picika."</Text>
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
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
