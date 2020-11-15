import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';
import { StackActions } from '@react-navigation/native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { NavigationActions } from 'react-navigation';
import Header from './Header'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <View style={{flex: 0.9}}>
                <View>
                    <Header />
                </View>
                <View style={{alignItems: 'center'}}>
                <Image
                    source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'}}   
                    style={{width: 125, height:125, borderRadius: 100, margin: -69, borderWidth: 2,
                        borderColor: "#9ff4c4"}} >
                </Image>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Number_sign.svg/200px-Number_sign.svg.png'}}   
                    style={{width: 50, height:50, borderRadius: 100, marginLeft: -60, margin: 30, borderWidth: 2,
                        borderColor: "#000",}} >
                </Image>
                <Text style={{fontSize: 20}}>username</Text>
                <View style= {{width: windowWidth, height: windowHeight/500, backgroundColor: '#aa8114', margin: 20}}>
                </View>
                </View>
                </View>
                <View style={{backgroundColor: '#023436', width: windowWidth, height: windowHeight/8,
                    flex:0.1}}>
                    <Text style={{textAlign: 'left', color: "#fff"}}>Nav bar</Text>
                </View>
            </View>
        )
    }
}

export default Profile