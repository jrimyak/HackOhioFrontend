import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import DarkLogo from '../Assets/darkgreen01.png'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class WorkoutEndsSolo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#9ff4c4'}}>
            <View style={{flex: 1, alignItems: "center"}}>
                <View style = {styles.logo}>
                    <Image source={DarkLogo} alt="" style={{width: 325, height: 325}}></Image>
                </View>
            </View>
            <View style={{flex: 1, alignItems: "center", marginTop: -100}}>
                <Text style={{textAlign: "center", marginLeft: 25,marginBottom: 5, color: '#000', fontSize: 20}}>FINISHED</Text>
                <Text style={{textAlign: "center", marginLeft: 25,marginBottom: 5, color: '#000', fontSize: 20}}>YOU'VE COMPLETED THIS DECK IN</Text>
                <Text style={{textAlign: "center", marginLeft: 25,marginBottom: 5, color: '#000', fontSize: 20}}>{this.props.route.params.count} s:{this.props.route.params.milli} ms</Text>
                <Text style={{textAlign: "center", marginLeft: 25,marginBottom: 5, color: '#000', fontSize: 20}}>YOU'VE EARNED 95 POINTS</Text>
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate("Profile")}
                style={styles.authButton}>
                    <Text style={styles.loginButtonText}>CLOSE</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    logoContainer: {
        marginTop: 50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //zIndex: -1
    },
    loginButtonText: {
        color: "#023436",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
        padding: 5
    },
    authButton: {
        marginTop: 10,
        padding: 5,
        borderRadius: 5,
        color: "#A8A8A8",
        backgroundColor: "#FFF",
        width: 100,
        marginTop: windowHeight/8
    },
    textfield: {
        display: "flex",
        borderWidth: 1,
        borderColor: "#5891E5",
        padding: 10,
        borderRadius: 50,
        color: "#000",
        backgroundColor: "#fff",
        width: 350
    },
    welcome: {
      //  flex: 1,
        backgroundColor: '#023436',
        width: windowWidth,
        height: windowHeight/8
    },
    item: {
        backgroundColor: "#add8e6",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        margin: 10,
        height: 100,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        // backgroundColor: '#fff',
        width: windowWidth -50,
        height: windowHeight/8,
        //marginBottom: (7/8) * (windowHeight),
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    task: {
        backgroundColor: '#fff',
        width: windowWidth -50,
        height: windowHeight/3,
        alignItems: "center",
        justifyContent: "center"

    }
});

export default WorkoutEndsSolo