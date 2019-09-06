import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Image, Text, StyleSheet, ScrollView } from 'react-native';
import { 
  Container, 
  Content, 
  Button,
  View,
  Spinner
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import AppFooter from '../../Components/AppFooter';
import { getProfile } from '../../Publics/Actions/Users';

class UserProfile extends Component{
  componentDidMount(){
    AsyncStorage.getItem('token',(err,res)=>{
      if(res){
        this.props.dispatch(getProfile(res))
      }
    })
    
  }
  render = () =>{
    const {userProfile} = this.props.users
    if(Object.keys(userProfile).length !== 0){
      return (
        <View style={{height:'100%'}}>
          <View style={styles.profileHeader}/>
          <View style={{marginTop:-75, marginBottom:50}}>
            <Image source={require('../../img/User.png')} style={styles.profileImage} />
            <Text style={styles.profileTitle}>User Card Number</Text>
            <Text style={styles.profileValue}>{userProfile.id}</Text>
            <Text style={styles.profileTitle}>username</Text>
            <Text style={styles.profileValue}>{userProfile.username}</Text>
            <Text style={styles.profileTitle}>Full Name</Text>
            <Text style={styles.profileValue}>{userProfile.fullname}</Text>
            <Text style={styles.profileTitle}>Email</Text>
            <Text style={styles.profileValue}>{userProfile.email}</Text>
          </View>
          <Button block onPress={this.logout}><Text>Logout</Text></Button>
          <Container>
            <Content/>
            <AppFooter {...this.props}/>
          </Container>
        </View>
      )
    }else{
      return <Spinner/>
    }
  }
  logout = () =>{
    AsyncStorage.removeItem('token',(err, res)=>{
      if(!err){
        this.props.navigation.navigate('Login')
      }
    })
  }
}
const styles = StyleSheet.create({
  profileHeader:{
    height:200, 
    backgroundColor:'#E5E5E5'
  },
  profileImage:{
    width:150, 
    height:150, 
    resizeMode:'contain', 
    alignSelf:'center',
  },
  profileTitle:{
    fontSize:20, 
    marginLeft:20
  },
  profileValue:{
    fontSize:15, 
    alignSelf:'center'
  }
})

const mapStateToProps = state =>{
  return{
    users: state.users
  } 
}
export default connect(mapStateToProps)(UserProfile)