import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Header from './Header';
import Juno from '../Assets/Juno.jpg';
import Brutus from '../Assets/BrutusCart.jpg';
import Jake from '../Assets/jakeCartoon.jpg';
import MichaelD from '../Assets/MichaelD.jpg';
import Uno from '../Assets/UnoCart.jpg';
import Urban from '../Assets/UrbanCart.jpg';
import Painter from '../Assets/PainterCart.jpg';
import Cris from '../Assets/CrisCart.jpg';
import Fields from '../Assets/Fields.jpg';
import Kriti from '../Assets/KritiCart.jpg';
import Jacob from '../Assets/rosenCart.jpg';
import Josh from '../Assets/JoshCart.jpg';
import Shing from '../Assets/ShingCart.jpg';



class LeaderboardPosition extends React.PureComponent {
    render() {
        return (
            <View style={styles.item}>
                <View style={{flex: 1,flexDirection:"row", marginLeft: 10}}>
                <Image style = {{alignItems: "flex-start"}}
                    source={this.props.src}
                    style={{width: 50, height: 50, borderRadius: 50/ 2}} >
                </Image>
                <Text style = {{marginTop: 15, marginLeft: 20, fontSize: 18}}>
                    {this.props.name}
                </Text>
                </View>
                <View style={{alignItems: "flex-end"}}>
                <Text style = {{textAlign: "left", marginRight: 10, fontSize: 18}}>
                    {this.props.score}
                </Text>
                </View>

            </View>
        )
    }
}

class Leaderboard extends Component {
    data = [
        {
            "rank":1,
            "name":"Jacob R",
            "score":100,
            "src": Jacob
        },
        {
            "rank":2,
            "name":"Jake I",
            "score":95,
            "src": Jake
        },
        {
            "rank":3,
            "name":"Josh I",
            "score":95,
            "src": Josh
        },
        {
            "rank":4,
            "name":"Kriti C",
            "score":94,
            "src": Kriti
        },
        {
            "rank":5,
            "name":"Justin F",
            "score":90,
            "src": Fields
        },
        {
            "rank":6,
            "name":"Uno F",
            "score":88,
            "src": Uno
        },
        {
            "rank":7,
            "name":"Juno O",
            "score":85,
            "src": Juno
        },
        {
            "rank":8,
            "name":"Shing L",
            "score":80,
            "src": Shing
        },
        {
            "rank":9,
            "name":"Brutus B",
            "score":70,
            "src": Brutus
        },
        {
            "rank":10,
            "name":"Urban M",
            "score":55,
            "src": Urban
          },
          {
            "rank":11,
            "name":"Michael D",
            "score":30,
            "src": MichaelD
          },
          {
            "rank":12,
            "name":"Christina J",
            "score":20,
            "src": Cris
          },
          {
            "rank":13,
            "name":"Nickalaus P",
            "score":15,
            "src": Painter
            },

      ]

      _keyExtractor = (item, index) => item.rank;

    renderItem = ({item}) => (
        <LeaderboardPosition
        rank={item.rank}
        name={item.name}
        score={item.score}
        src={item.src}
        />
    )

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <View style = {{flex: 1, backgroundColor: '#7db8ba'}}>
                <View style={{flex: 0.9}}>
                    <FlatList
                    data={this.data.sort((a, b) => a.score < b.score)}
                    renderItem={this.renderItem}
                    ListHeaderComponent={() => <Header name='Leaderboard' />}
                    stickyHeaderIndices={[0]}
                    keyExtractor={this._keyExtractor}
                    numColumns={1} />
                </View>
                <View style = {styles.footer}>
                <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                    <TouchableOpacity
                onPress = {() => this.props.navigation.navigate("NewDeck")}
                style={styles.authButton}>
                    <Text style={styles.loginButtonText}>NEW WORKOUT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate("Profile")}
                style={styles.authButton}>
                    <Text style={styles.loginButtonText}>PROFILE</Text>
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
        backgroundColor: "#fff",
        alignItems: "center",
        //justifyContent: "flex-start",
        flex: 1,
        margin: 5,
        height: 100,
        borderBottomWidth: 1,
        flexDirection: "row"
    },
    footer: {
        backgroundColor: '#023436',
        width: windowWidth,
        height: windowHeight/8,
        //marginBottom: (7/8) * (windowHeight),
       flex:0.1
    }
});

export default Leaderboard;