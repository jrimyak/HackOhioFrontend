import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';
import DarkLogo from '../Assets/darkgreen01.png'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoVisible: true
        }
    }

    render() {
        return(
            <View style = {{flex: 1, backgroundColor: '#9ff4c4'}}>
                <View style={styles.container}>
                    <View
                        style={styles.logoContainer}>

                        <Image source={DarkLogo} alt="" style={{width: 325, height: 325}}></Image>
                    </View>
                    <View style={{marginTop: 0}}>

                    <Text />
                    <View style={{marginBt: 100,display: "flex", alignItems: "center", justifyContent: "space-between"}}>

                        <TouchableOpacity
                        onPress =  {() => this.props.navigation.navigate("Login")}
                        style={styles.authButton}
                        >
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <Text />
                    <View style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate("Signup")}
                        style={styles.authButton}>
                            <Text style={styles.loginButtonText}>Create an Account</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
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
        marginBottom: (1.5*windowHeight)/3
      },
    logoContainer: {
        marginTop: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //zIndex: -1
    },
    loginButtonText: {
        color: "#fff",
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
        backgroundColor: "#1E1E1E",
        width: 150
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
    }
});


export default Home