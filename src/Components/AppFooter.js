import React,{Component} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {Footer, FooterTab, Icon, Button } from 'native-base';
export default class AppFooter extends Component {
  render(){
    return(
      <Footer>
        <FooterTab>
          <Button light vertical onPress={()=>{this.props.navigation.navigate('Home')}}>
            <Icon type="FontAwesome" name="home" />
            <Text>Home</Text>
          </Button>
          <Button light vertical onPress={()=>{this.props.navigation.navigate('History')}}>
            <Icon type="FontAwesome" name="history" />
            <Text>History</Text>
          </Button>
          <Button light vertical onPress={()=>{this.props.navigation.navigate('Profile')}} >
            <Icon type="MaterialIcons" name="account-circle" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
