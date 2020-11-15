import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';
import { StackActions } from '@react-navigation/native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { NavigationActions } from 'react-navigation';
import Header from './Header'
import Jake from '../Assets/jakeCartoon.jpg'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'Jake',
            lastName: 'Imyak',
            username: 'jrimyak',
            score: 0,
            easyDecks: 0,
            medDecks: 1,
            hardDecks: 0,
            favoriteDeck: 'Deck 1'
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
                    source={Jake}
                    style={{width: 130, height:130, borderRadius: 100, margin: -69, borderWidth: 1.5,
                        borderColor: "#9ff4c4"}} >
                </Image>
                <View style={{width: 50, height: 50, borderRadius: 50, borderWidth: 1, backgroundColor: '#9ff4c4',
                    borderColor: 'white', borderStyle: 'solid', justifyContent: 'center', marginRight: 100, marginTop: 25}}>
                    <Text style={{fontSize: 20,textAlign: 'center'}}>20</Text>
                </View>
                <Text style={{fontSize: 20, marginTop: 20}}>{this.state.username}</Text>
                <View style= {{width: windowWidth, height: windowHeight/500, backgroundColor: '#aa8114', margin: 20}}>
                </View>
                <Text style={{fontSize: 20, marginTop: 20}}>Name: {this.state.firstName} {this.state.lastName}</Text>
                <Text style={{fontSize: 20, marginTop: 20}}>Score: {this.state.score}</Text>
                <Text style={{fontSize: 20, marginTop: 20}}>Easy Decks: {this.state.easyDecks} </Text>
                <Text style={{fontSize: 20, marginTop: 20}}>Medium Decks: {this.state.medDecks} </Text>
                <Text style={{fontSize: 20, marginTop: 20}}>Hard Decks: {this.state.hardDecks} </Text>
                <Text style={{fontSize: 20, marginTop: 20}}>Favorite Deck: {this.state.favoriteDeck} </Text>
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


export default Profile

//name
//first name last name
//email
//score
// current loc
// decks completed (easy, medium, hard)
// favorite deck?