import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { Form, Item, Input, Label, Content, Button, Toast } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage'
import {login} from '../../Publics/Actions/Users'
class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      formData:{
        email:'',
        password:'',
      },
      showToast:false
    }
  }

  componentDidMount = async () =>{
    await AsyncStorage.getItem(
      'token', 
      (err, res)=>{
        console.log(err,res);
        if(res)
          this.props.navigation.navigate('Home')
      }
    )
  }
  
  handleChange= (name,value) => {
    let newFormData = {...this.state.formData}
    newFormData[name] = value
    this.setState({
      formData: newFormData
    })
    console.log(newFormData)
  }

  handleSubmit = () => {
    this.props.dispatch(login(this.state.formData))
    .then(async () => {
      if(this.props.users.token !== undefined) {
        await AsyncStorage.setItem(
          'token', 
          this.props.users.token,
          err => console.log(err)
        )
        Toast.show({
          text: 'Welcome',
          buttonText: "Okay",
          type: "success",
          position:'top',
          duration:4000,
          style:styles.toast
        })
        
        this.props.navigation.navigate('Home')
      }
    })
    .catch(()=>{
      console.log(this.props.users.errMessage)
      Toast.show({
        text: this.props.users.errMessage,
        buttonText: "Okay",
        type: "danger",
        position:'top',
        duration:4000,
        style:styles.toast
      })
    })
  }

  render() {
    return (
      <Content style={styles.root}>
        <Text style={styles.welcomeText}>Here To Get Welcomed !</Text>
        <Form style={styles.form} >
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={(text)=>this.handleChange('email',text)}  autoCompleteType='email'  keyboardType='email-address' textContentType="emailAddress"/>
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input onChangeText={(text)=>this.handleChange('password',text)} secureTextEntry={true} textContentType="password"/>
          </Item>
          <Button 
            disabled={this.props.users.isLoading}
            style={styles.buttons}
            onPress={this.handleSubmit}
            block dark><Text style={styles.formButtonsText}>{this.props.users.isLoading ? 'Loading':'Sign In'}</Text></Button>
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
  toast:{
    marginTop:20,
  },
})
const mapStateToProps = state =>{
  return {
    users : state.users
  }
}
export default connect(mapStateToProps)(Auth)