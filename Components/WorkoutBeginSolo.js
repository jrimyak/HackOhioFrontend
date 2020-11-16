import React, { Component } from 'react'
import {Dimensions, Linking, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Picker, AsyncStorage} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Card from './Card'
import DarkLogo from  '../Assets/mintgreen01.png'

class StopWatch extends React.PureComponent {

    state = {
        timer: null,
        counter: '00',
        miliseconds: '00',
        startDisabled: true,
        stopDisabled: false
    }


    constructor( props ) {
        super( props );

        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonClear = this.onButtonClear.bind(this);
        this.start = this.start.bind(this);
    }







    render() {
        return(
<View>

</View>

        );
    }
}

class WorkoutBeginSolo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Press for First Card!',
            description: '',
            repOrInt: '',
            cardnum: 0,
            timer: null,
            counter: '00',
            miliseconds: '00',
            startDisabled: true,
            stopDisabled: false
        }
        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonClear = this.onButtonClear.bind(this);
        this.start = this.start.bind(this);
    }

    // post request to http://localhost:3000/api/v1/users/:user_id/user_decks
    saveAndComplete() {
        var self = this;
        axios.post(`http://localhost:3000/api/v1/users/${self.props.route.params.user_id}/user_decks/${self.props.route.params.user_deck_id}/start`,
            { user_deck_id: self.props.route.params.user_deck_id}).catch(error => console.log(error));
    }

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
             this.setState({cardnum: (this.state.cardnum+1)});
             this.setState({title: 'Hard Deck'})
             this.setState({description: this.props.route.params.cards[0].cards[this.state.cardnum]["workout"]})
             this.setState({repOrInt: this.props.route.params.cards[0].cards[this.state.cardnum]["duration"]})

       }
         else{
            this.onButtonStop()
             this.props.navigation.navigate("WorkoutEndsSolo", {count: this.state.counter, milli: this.state.miliseconds});
            this.onButtonClear()
         }
      }


      componentDidMount() {
        this.start();
    }


    componentWillUnmount() {
        clearInterval(this.state.timer);
    }



    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                count = this.state.counter;

            if( Number(this.state.miliseconds) == 99 ) {
                count = (Number(this.state.counter) + 1).toString();
                num = '00';
            }

            self.setState({
                counter: count.length == 1 ? '0'+count : count,
                miliseconds: num.length == 1 ? '0'+num : num
            });
        }, 0);
        this.setState({timer});
    }





    onButtonStart() {

        this.start();
        this.setState({startDisabled: true, stopDisabled: false});
    }


    onButtonStop() {
        clearInterval(this.state.timer);
        this.setState({startDisabled: false, stopDisabled: true});
    }


    onButtonClear() {
        this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00'
        });
    }

    render() {
        console.log(this.props.route.params)
        return (
            <View style={{flex: 1, backgroundColor: '#9ff4c4'}}>
                <View style={{flex: 1, alignItems: "center"}}>
                    <View style = {styles.logo}>
                        <Image source={DarkLogo} alt="" style={{width: 325, height: 325}}></Image>
                    </View>
                </View>
            <View>

              <Text style={{textAlign: "center", color: '#000', fontSize: 18}}> {this.state.counter} : {this.state.miliseconds}</Text>
              <Text> </Text>
{/*
                    <TouchableOpacity onPress={() => {this.onButtonStart()}}><Text>hi</Text></TouchableOpacity>
                    <Button title="Stop"  onPress={this.onButtonStop}></Button>
                    <Button title="Clear"  onPress={this.onButtonClear}></Button>
*/}
                </View>
                <Card title={this.state.title} description={this.state.description} repOrInt={this.state.repOrInt} cardnum = {this.state.cardnum} />
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
        //backgroundColor: '#fff',
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