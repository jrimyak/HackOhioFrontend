import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style = {styles.footer}>
                <Text style={{flex: 1, textAlign: 'center', marginTop: windowHeight/20, color: '#9ff4c4', fontSize: 24}}>{this.props.name} {this.props.username}{this.props.punc}</Text>
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
        color: "#A8A8A8",
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
        margin: 5, 
        height: 100
    },
    footer: {
        backgroundColor: '#023436', 
        width: windowWidth, 
        height: windowHeight/8,
     //   marginBottom: (7/8) * (windowHeight)
    }
});

export default Header 