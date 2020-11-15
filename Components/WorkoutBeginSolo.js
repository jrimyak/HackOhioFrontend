import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Card from './Card'

class WorkoutBeginSolo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'title',
            description: 'lorem ipsum i dont know what to put here but yolo dude',
            repOrInt: '2 mins',
            cardnum: 1
        }
    }

    // post request to http://localhost:3000/api/v1/users/:user_id/user_decks
    // componentDidMount() {
    //     axios.post(`http://localhost:3000/api/v1/users/1/user_decks`, {
    //         headers : {"Content-Type": "application/json"},
    //         user_deck: {
    //             difficulty: 'hard'
    //         }
    //     })
    //     .then(function(response) {
    //         this.setState({cards: response.data.cards, user_set_id: response.data.user_set_id})
    //     }).then(function(errors) {
    //         console.log(errors);
    //     });
        
    // }
    
    getButtonTitle = () => {
        if(this.state.cardnum < 12){
             return "Next Card";
        }
        else{
            return "End Workout";
        }
     }
 
     getOnPress = () => {
         if(this.state.cardnum < 12){
             this.setState({cardnum: this.state.cardnum+1});
         }
         else{
             this.props.navigation.navigate("WorkoutEndsSolo");
         }
      }   

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#023436'}}>
                <View style={{flex: 1, alignItems: "center"}}>
                    <View style = {styles.logo}>
                        <Text style={{flex: 1, textAlign: 'center', marginTop: windowHeight/20, color: '#000', fontSize: 16}}>Logo</Text>
                    </View>
                </View>
                <Card title={this.state.title} description={this.state.description} repOrInt={this.state.repOrInt}cardnum = {this.state.cardnum} />
                <TouchableOpacity 
                        onPress =  {() => {this.getOnPress()}}
                        style={styles.authButton}
                        >
                            <Text style={styles.loginButtonText}>{this.getButtonTitle()}</Text>
                        </TouchableOpacity>
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
        width: windowWidth
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
        backgroundColor: '#fff', 
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

export default WorkoutBeginSolo