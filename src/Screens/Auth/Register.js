import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import { Form, Item, Input, Label, Content, Button } from 'native-base';
export default class Auth extends Component {
  render() {
    return (
      <Content contentContainerStyle={styles.root}>
        <Text style={styles.welcomeText}>Welcome to Weebs Lib</Text>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input textContentType="username"/>
          </Item>
          <Item floatingLabel>
            <Label>Full Name</Label>
            <Input textContentType="name"/>
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input textContentType="emailAddress"/>
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input  textContentType="password"/>
          </Item>
          <Button style={styles.formButton} full dark><Text style={styles.formButtonsText}>Sign Up</Text></Button>
        </Form>
        <Button 
          style={styles.buttons}
          onPress={()=>this.props.navigation.navigate('Login')}
          transparent light
        >
          <Text style={styles.buttonsText}>Sign In</Text>
        </Button>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  root:{
    marginLeft:30,
    justifyContent:"space-around"
  },
  welcomeText:{
    fontFamily:"Airbnb Cereal App",
    marginTop:20,
    fontSize:34,
    flex:1,
  },
  form:{
    marginTop:10,
    marginBottom:40,
    flex:1,
  },
  formButton:{
    color:"white",
    marginTop:10,
    marginLeft:10,
    fontWeight:'bold',
    maxWidth:80,
  },
  buttons:{
    marginTop:10,
    marginLeft:10,
    fontWeight:'bold',
    maxWidth:80,
  },
  formButtonsText:{
    color:"white",
    fontSize:17,
  },
  buttonsText:{
    fontSize:17,
    fontWeight:'bold',
  },
})