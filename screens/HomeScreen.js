import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
export default class HomeScreen extends Component<React>{




    static navigationOptions = {

        header : null,
        headerLeft: null,
        headerBackTitle: null,

    };



    render() {

        return(

            <View>

                <Text> HomeScreen</Text>

            </View>

        )


    }

}