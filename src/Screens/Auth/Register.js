import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet} from 'react-native';
import { Form, Item, Input, Label, Content, Button,  Toast } from 'native-base';
import {register} from '../../Publics/Actions/Users'

class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      formData:{
        fullname:'',
        username:'',
        email:'',
        password:'',
      },
      showToast:false
    }
  }

  handleChange= (name,value) => {
    let newFormData = {...this.state.formData}
    newFormData[name] = value
    this.setState({
      formData: newFormData
    })
  }

  handleSubmit = () => {
    this.props.dispatch(register(this.state.formData))
    .then(() => {
      Toast.show({
        text: 'You can now login',
        buttonText: "Okay",
        type: "success",
        position:'top',
        duration:4000,
        style:styles.toast
      })
      this.props.navigation.navigate('Login')
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
      <Content contentContainerStyle={styles.root}>
        <Text style={styles.welcomeText}>Welcome to Weebs Lib</Text>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input  onChangeText={(text)=>this.handleChange('username',text)}  textContentType="username"/>
          </Item>
          <Item floatingLabel>
            <Label>Full Name</Label>
            <Input onChangeText={(text)=>this.handleChange('fullname',text)}  textContentType="name"/>
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={(text)=>this.handleChange('email',text)}  autoCompleteType='email' stextContentType="emailAddress"/>
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input onChangeText={(text)=>this.handleChange('password',text)}  secureTextEntry={true} textContentType="password"/>
          </Item>
          <Button 
            style={styles.formButton} 
            onPress={this.handleSubmit}
            disabled={this.props.users.isLoading}
            full 
            dark
          >
            <Text style={styles.formButtonsText}>{this.props.users.isLoading ? 'Loading':'Sign Up'}</Text>
          </Button>
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
  toast:{
    marginTop:10,
  },
})
const mapStateToProps = state =>{
  return {
    users : state.users
  }
}
export default connect(mapStateToProps)(Auth)