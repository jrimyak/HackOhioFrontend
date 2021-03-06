import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { NavigationActions } from 'react-navigation';
import DarkLogo from '../Assets/darkgreen01.png'
userId = 0
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemId: 1,
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            indicating: false,
            photoVisible: false,
            responseWorks: false
        };
        this.submit = this.submit.bind(this)
    }


    submit() {
        axios
          .post("http://localhost:3000/api/v1/users", {
            user: {
              first_name: this.state.firstName,
              last_name: this.state.lastName,
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.passwordConfirmation,
            },
          })
          .then(function (response) {
            console.log(response["data"]["user"]);
            const user = response.data
            //this.setState({ itemId: user.id })
           // console.log(this.state.responseWorks)
          })
          .catch(function (errors) {
            errors["response"]["data"]["errors"].forEach(error => {
              console.log(error);
            });
          });
      }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }

      componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }

      _keyboardDidShow = () => {
        this.setState({photoVisible: false})
      }

      _keyboardDidHide = () => {
        this.setState({photoVisible: true})
      }

    render() {

        return (

            <View style = {{flex: 1, backgroundColor: '#9ff4c4'}}>

                <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
                style = {{flexDirection:"row"}}>
                    <View style={styles.container}>
                        <KeyboardAvoidingView
                        behavior="padding"
                        style={{marginBottom: windowHeight/8}}
                        keyboardVerticalOffset={100}>
                                              <View
                        style={styles.logoContainer}>

                        <Image source={DarkLogo} alt="" style={{width: 325, height: 325}}></Image>
                    </View>
                            <Text style={{textAlign: "center", fontSize: 24}}>Create an Account</Text>
                            <ActivityIndicator
                            size="large"
                            color="#fff"
                            animating={this.state.indicating} />
                            <TextInput
                            placeholder="Enter your first name"
                            style={styles.textfield}
                            onChangeText={(text) => this.setState({firstName: text})}
                            placeholderTextColor="#A8A8A8" />
                            <Text />
                            <TextInput
                            placeholder="Enter your last name"
                            style={styles.textfield}
                            onChangeText={(text) => this.setState({lastName: text})}
                            placeholderTextColor="#A8A8A8" />
                            <Text />
                            <TextInput
                            placeholder="Enter your username"
                            style={styles.textfield}
                            onChangeText={(text) => this.setState({username: text})}
                            placeholderTextColor="#A8A8A8" />
                            <Text />
                            <TextInput
                            placeholder="Enter your email"
                            style={styles.textfield}
                            onChangeText={(text) => this.setState({email: text})}
                            placeholderTextColor="#A8A8A8" />
                            <Text />
                            <TextInput
                            secureTextEntry={true}
                            placeholder="Enter your password"
                            style={styles.textfield}
                            onChangeText={(text) => this.setState({password: text})}
                            placeholderTextColor="#A8A8A8" />
                            <Text />
                            <TextInput
                            secureTextEntry={true}
                            placeholder="Re-Enter your password"
                            style={styles.textfield}
                            onChangeText={(text) => this.setState({passwordConfirmation: text})}
                            placeholderTextColor="#A8A8A8" />
                            <Text />
                            <View style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                                <TouchableOpacity
                                onPress = {() => {this.submit()
                                    x = this.state.responseWorks
                                    if(!x) {

                                       this.props.navigation.navigate("SavedDeck", { itemId: this.state.itemId})
                                    }
                                } }
                                style={styles.authButton}
                                >
                                    <Text style={styles.loginButtonText}>START</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </TouchableWithoutFeedback>
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
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
        padding: 5
    },
    authButton: {
        marginTop: 20,
        padding: 5,
        borderRadius: 5,
        color: "#A8A8A8",
        backgroundColor: "#1E1E1E",
        width: 100
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

export default Signup;