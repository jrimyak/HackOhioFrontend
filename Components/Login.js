import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            indicating: false,
            photoVisible: false
        };
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
                        style={{marginBottom: (4.05*windowHeight)/10}}
                        keyboardVerticalOffset={100}>
                            <View
                            style={styles.logoContainer}>
                                {
                                    this.state.photoVisible && <Image source="" alt="" style={styles.logo}></Image>
                                }
                            </View>
                            <Text style={{textAlign: "center", fontSize: 24}}>Sign In</Text>
                            <ActivityIndicator
                            size="large"
                            color="#fff"
                            animating={this.state.indicating} />
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
                            <View style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                                <TouchableOpacity 
                                onPress = {() => this.props.navigation.navigate("WorkoutEndsSolo")}
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
        marginTop: 30,
        padding: 5,
        borderRadius: 5,
        color: "#fff",
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

export default Login;