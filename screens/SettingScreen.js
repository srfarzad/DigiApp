import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';


import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class SettingScreen extends Component<React>{


    render() {

        return(



            <Container>

                <Header>

                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>

                    <Body>

                    <Title> Setting </Title>
                    </Body>

                </Header>

                <Content>

                </Content>


                <Footer>

                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>


                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>

                </Footer>

            </Container>

        )


    }

}