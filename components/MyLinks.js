import React from 'react';
import { Text, View, StyleSheet, ScrollView, Linking} from 'react-native';

function MyLinks() {
    return (
        <ScrollView>
            <View style={styles.outterContainer}>
                <View style={styles.innerContainer}>
                    <Text>1. RN official site:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://reactnative.dev/');
                        }}>
                        ReactNative
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>2. RN Navigation:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://reactnavigation.org/');
                        }}>
                        React Navigation
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>3. RN Libraries:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://reactnative.directory/');
                        }}>
                        RN Directory
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>4. RN Guide:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://www.reactnative.express/');
                        }}>
                        RN Express
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>5. RN Tutorial on educba:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://www.educba.com/software-development/software-development-tutorials/react-native-tutorial/');
                        }}>
                        EduCba
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>6. RN Tutorial on w3cub:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://docs.w3cub.com/react_native/');
                        }}>
                        W3Cub
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>7. RN Tutorial on tutorialspoint:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://www.tutorialspoint.com/react_native/index.htm');
                        }}>
                        TutorialsPoint
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>8. Many github repositories:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://reposhub.com/');
                        }}>
                        ReposHub
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>9. Tutorial for React Developers:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://aboutreact.com/');
                        }}>
                        AboutReact
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>10. Official ReactJS Site:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://reactjs.org/');
                        }}>
                        ReactJS
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>11. React tools, projects, libraries:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://bestofreactjs.com/');
                        }}>
                        BestOfReact
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>12. State Container for JS Apps:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://redux.js.org/');
                        }}>
                        Redux
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>13. JavaScript on Mozilla:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics');
                        }}>
                        JavaScript
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>14.JS tutorial on W3schools:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://www.w3schools.com/js/');
                        }}>
                        JavaScript
                    </Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text>15. JS tutorial on Tutorialspoint:
                    </Text>
                    <Text
                        style={styles.linkStyle}
                        onPress={() => {
                            Linking.openURL('https://www.tutorialspoint.com/javascript/index.htm');
                        }}>
                        JavaScript
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default MyLinks;

const styles = StyleSheet.create({
    outterContainer: {
        flex: 1,
    },
    innerContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 12,
        alignItems: 'baseline',
    },
    linkStyle: {
        color: 'blue',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500',
        textDecorationLine: 'underline',
        letterSpacing: 1,
    },
});