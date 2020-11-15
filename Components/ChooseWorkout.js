import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class ChooseWorkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoVisible: false
        }
    }

    render() {
        return(
            <View style = {{flex: 1, backgroundColor: '#9ff4c4'}}>
                <View style={styles.container}>
                    <View
                        style={styles.logoContainer}>
                        {
                            this.state.photoVisible && <Image source="" alt="" style={styles.logo}></Image>                        }
                    </View>
                    <Text style={{textAlign: "center", fontSize: 24}}>Choose Workout</Text>
                    <Text />
                    <View style={{flexDirection: "row", justifyContent: "space-between", padding:10}}>
                    <View style={{display: "flex", alignItems: "center", padding: 10}}>
                        <TouchableOpacity 
                        onPress =  {() => this.props.navigation.navigate("NewDeck")}
                        style={styles.authButton}
                        >
                            <Text style={styles.loginButtonText}>New Deck</Text>
                        </TouchableOpacity>
                    </View>
                    <Text />
                    <View style={{display: "flex", alignItems: "center", padding: 10}}>
                        <TouchableOpacity 
                        onPress = {() => this.props.navigation.navigate("SavedDeck")}
                        style={styles.authButton}>
                            <Text style={styles.loginButtonText}>Saved Deck</Text>
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
        marginBottom: windowHeight/2
      },
    logoContainer: {
        marginTop: 50,
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


export default ChooseWorkout 