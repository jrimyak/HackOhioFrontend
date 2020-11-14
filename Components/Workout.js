import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';

class WorkoutCard extends React.PureComponent {
    render() {
        return (
            <View style={styles.item}>
                <Text>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

class Workout extends Component {
    data = [
        {
          "id":1,
          "label":"Label 01"
        },
        {
          "id":2,
          "label":"Label 02"
        },
        {
          "id":3,
          "label":"Label 03"
        },
        {
          "id":4,
          "label":"Label 04"
        },
        {
          "id":5,
          "label":"Label 05"
        },
        {
          "id":6,
          "label":"Label 06"
        },
        {
          "id":7,
          "label":"Label 07"
        },
        {
          "id":8,
          "label":"Label 08"
        },
        {
          "id":9,
          "label":"Label 09"
        }
      ]

      _keyExtractor = (item, index) => item.id;

    constructor(props) {
        super(props)
        this.state = {
            newDeck: false,
        }
    }


    render() {
        return (
            <View style = {{flex: 1, backgroundColor: '#9ff4c4'}}>
                <View style = {styles.welcome}>
                    <Text style={{flex: 1, textAlign: 'center', marginTop: windowHeight/20, color: '#fff', fontSize: 20}}>Let's Workout Username</Text>
                </View>
                <View>
                    <FlatList
                    data={this.data}
                    renderItem={this.renderItem}
                    keyExtractor={this._keyExtractor}
                    numColumns={2} />
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
    }
});

export default Workout;