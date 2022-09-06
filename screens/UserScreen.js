import React from 'react';
import {View, Text, StyleSheet, Button, Image,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ContactLinks from '../components/ContactLinks';

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
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/the-good-bad-ugly-ex.jpg')}
        />
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
        <ContactLinks />
      </View>
    </LinearGradient>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  image: {
    maxWidth: 350,
    maxHeight: 300,
  },
  highlight: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#E8EAF6',
    fontStyle: 'italic',
    fontSize: 35,
    marginHorizontal: 10,
    marginTop: 15,
  },
  buttonContainer: {
    width: 150,
    alignSelf: 'center',
    marginTop: 12,
  },
});
