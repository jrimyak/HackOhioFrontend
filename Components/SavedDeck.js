import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

class DeckCard extends React.PureComponent {
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


class SavedDeck extends Component {

    data = [
        {
          "id":1,
          "label":"Card 01"
        },
        {
          "id":2,
          "label":"Card 02"
        },
        {
          "id":3,
          "label":"Card 03"
        },
        {
          "id":4,
          "label":"Card 04"
        },
        {
          "id":5,
          "label":"Card 05"
        },
        {
          "id":6,
          "label":"Card 06"
        },
        {
          "id":7,
          "label":"Card 07"
        },
        {
          "id":8,
          "label":"Card 08"
        },
        {
          "id":9,
          "label":"Card 09"
        },
        {
            "id":10,
            "label":"Card 10"
          },
          {
            "id":823,
            "label":"Card 08"
          },
          {
            "id":34,
            "label":"Card 09"
          },
          {
              "id":11,
              "label":"Card 10"
            },

      ]

      _keyExtractor = (item, index) => item.id;

    renderItem = (item) => (
      <TouchableOpacity onPress =  {() => this.props.navigation.navigate("WorkoutBeginSolo")}>
        <DeckCard
        id={item.user_deck_id}
        title={item.name}
        />
        </TouchableOpacity>
    )


    constructor(props) {
        super(props)

        this.state = {
            newDeck: false,
            username: "Kriti",
            id: '',
            decks: [],
        }
    }
//${this.props.route.params.itemId}
     componentDidMount() {
       var self = this;
       axios({
          method: "get",
          url: `http://localhost:3000/api/v1/users/${self.props.route.params.itemId}/user_decks`,
       }).then(function(success){
        console.log(success.data.data);
        self.setState({ decks: success.data.data});
      }).catch(function(error) {
        console.log(error);
      })
    }

    render() {
        //var idVal = this.props.navigation.params.id;
      //  const { route } = this.props
      ////  console.log(JSON.stringify(route.params.id))
   //     this.setState({id: JSON.stringify(route.params.id)})
        // const itemId = this.props.route.params.itemId
        const itemId = 12
        console.log(itemId)
        console.log(this.props)
        return (
            <View style = {{flex: 1, backgroundColor: '#7db8ba'}}>
               <Text>{itemId}</Text>
                <View style={{flex: 0.9}}>
                    <FlatList
                    data={this.state.decks}
                    renderItem={this.renderItem}
                    ListHeaderComponent={() => <Header name="Let's Workout," username={this.state.username} punc="!" />}
                    stickyHeaderIndices={[0]}
                    keyExtractor={this._keyExtractor}
                    numColumns={1} />
                </View>
                <View style = {styles.footer}>
                    <Text style={{flex: 1, textAlign: 'center', marginTop: windowHeight/28, color: '#fff', fontSize: 20}}>Footer</Text>
                </View>
                <View>

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
        justifyContent: "center",
        flex: 1,
        margin: 5,
        height: 150,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        backgroundColor: '#023436',
        width: windowWidth,
        height: windowHeight/8,
        //marginBottom: (7/8) * (windowHeight),
       flex:0.1
    }
});

export default SavedDeck;