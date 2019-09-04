import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import { Form, Item, Input, Label, Content, Button } from 'native-base';
export default class Auth extends Component {
  render() {
    return (
      <Content style={styles.root}>
        <Text style={styles.welcomeText}>Here To Get Welcomed !</Text>
        <Form style={styles.form}>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input textContentType="emailAddress"/>
          </Item>
          <Item stackedLabel>
            <Label>Password</Label>
            <Input textContentType="password"/>
          </Item>
          <Button style={styles.buttons}
          onPress={()=>this.props.navigation.navigate('Home')}
          block dark><Text style={styles.formButtonsText}>Sign In</Text></Button>
        </Form>
        <Button 
          style={styles.buttons} 
          onPress={()=>this.props.navigation.navigate('Register')}
          transparent light><Text style={styles.buttonsText}>Sign Up</Text></Button>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  root:{
    marginLeft:30,
  },
  welcomeText:{
    fontFamily:"Airbnb Cereal App",
    marginTop:70,
    fontSize:34,
    flex:1,
  },
  form:{
    marginTop:30,
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