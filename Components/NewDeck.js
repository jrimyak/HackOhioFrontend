import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Picker } from '@react-native-picker/picker'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Header from './Header';
import CheckBox from '@react-native-community/checkbox';

class NewDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Jake',
            dur: '',
            group: '',
            diff: '',
            toggleCheckBox: false
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#7db8ba'}}>
                <View style={{flex:0.9}}>
                    <Header name="Let's Workout," username={this.state.username} punc="!"/>
                    <View>
                        <Text style={{textAlign: 'center', fontSize: 20}}>Generate New Deck</Text>
                        <Text style={{textAlign: 'center', fontSize: 14}}>Answer the following questions to generate a new deck</Text>
                        <View style={{marginTop: (.6*windowHeight)/4, flexDirection: "column", alignItems: "center"}}>
                            <Text style={{textAlign: "center", fontSize: 18,color: '#000', marginTop: -100}}>Duration</Text>

                            <Picker
                            selectedValue={this.state.dur}
                            style={{marginTop: -75, height:75, width:125}}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({diff: itemValue})}>
                                <Picker.Item label="Long" value={1}></Picker.Item>
                                <Picker.Item label="Short" value={2}></Picker.Item>
                            </Picker>
                            <Text style={{textAlign: "center", fontSize: 18, color: '#000', marginTop: 100}}>Aerobic or Anaerobic</Text>

                            <Picker
                            selectedValue={this.state.diff}
                            style={{marginTop: -60, height:75, width:125}}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({diff: itemValue})}>
                                <Picker.Item label="Aerobic" value={1}></Picker.Item>
                                <Picker.Item label="Anaerobic" value={2}></Picker.Item>
                            </Picker>
                            <Text style={{textAlign: "center", fontSize: 18, color: '#000', marginTop: 100}}>Core Group</Text>

                            <Picker
                            selectedValue={this.state.group}
                            style={{marginTop: -60, height:75, width:125}}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({diff: itemValue})}>
                                <Picker.Item label="Pectoral" value={1}></Picker.Item>
                                <Picker.Item label="Abs" value={2}></Picker.Item>
                                <Picker.Item label="Legs" value={3}></Picker.Item>
                            </Picker>

                            <TouchableOpacity style={styles.authButton} onPress={() => this.props.navigation.navigate("WorkoutBeginSolo")}>
                                <Text style={styles.loginButtonText}>START</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: '#023436', width: windowWidth, height: windowHeight/8,
                    flex:0.1}}>
<View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                    <TouchableOpacity
                onPress = {() => this.props.navigation.navigate("NewDeck")}
                style={styles.authButton}>
                    <Text style={styles.loginButtonText}>NEW WORKOUT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate("Leaderboard")}
                style={styles.authButton}>
                    <Text style={styles.loginButtonText}>LEADERBOARD</Text>
                </TouchableOpacity>
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
        marginTop: 125,
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

export default NewDeck;