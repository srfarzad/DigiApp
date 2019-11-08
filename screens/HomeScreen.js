import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert, FlatList,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import SQLite from "react-native-sqlite-2";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Card,CardItem } from 'native-base';

const db = SQLite.openDatabase("test.db", "1.0", "", 1);


export default class HomeScreen extends Component<React> {


    getBestData() {
        fetch('http://androidsupport.ir/market/getBestApplications.php')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({best: responseJson})
            })

    }

    constructor(props) {
        super(props);
        this.state = {
            best: null,
        };


        db.transaction(function (txn) {
            txn.executeSql("DROP TABLE IF EXISTS Users",[]);//check if exists drop table

            txn.executeSql(
                "CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))",
                []
            );


            txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["nora"]);

        })



    }

    componentDidMount() {
        this.getBestData();
    }

    static navigationOptions = {

        header: null,
        headerLeft: null,
        headerBackTitle: null,

    };


    render() {

        return (

            <Container>

                <Content>

                    <ImageSlider
                        style={{height: 200}}
                        images={[
                        'http://placeimg.com/640/480/any',
                        'http://placeimg.com/640/480/any',
                        'http://placeimg.com/640/480/any'
                    ]}/>


                    <Text style={{justifyContent: 'flex-end', margin: 16}}> برترین محصولات</Text>


                    <FlatList

                        horizontal={true}
                        data={this.state.best}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) =>

                            <Card >
                                <CardItem>
                                    <Body>
                                    <Image source={{uri : "http://androidsupport.ir/market/images/"+item.icon}}
                                           style={{height: 144, width: 144}}   />
                                    </Body>
                                </CardItem>

                                <CardItem>
                                    <Body>

                                    <Text>{item.title}</Text>



                                    </Body>
                                </CardItem>




                            </Card>


                        }

                    />


                    <Text style={{justifyContent: 'flex-end', margin: 16}}> جدیدترین محصولات</Text>

                    <FlatList

                        horizontal={true}
                        data={this.state.best}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) =>

                            <Card >
                                <CardItem>
                                    <Body>
                                    <Image source={{uri : "http://androidsupport.ir/market/images/"+item.icon}}
                                           style={{height: 144, width: 144}}   />
                                    </Body>
                                </CardItem>

                                <CardItem>
                                    <Body>

                                    <Text>{item.title}</Text>



                                    </Body>
                                </CardItem>




                            </Card>


                        }

                    />


                    <Text style={{justifyContent: 'flex-end', margin: 16}}>محصولات ویژه</Text>

                    <FlatList

                        horizontal={true}
                        data={this.state.best}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) =>

                            <Card >
                                <CardItem>
                                    <Body>
                                    <Image source={{uri : "http://androidsupport.ir/market/images/"+item.icon}}
                                           style={{height: 144, width: 144}}   />
                                    </Body>
                                </CardItem>

                                <CardItem>
                                    <Body>

                                    <Text>{item.title}</Text>



                                    </Body>
                                </CardItem>




                            </Card>


                        }

                    />



                </Content>


            </Container>

        )


    }

}