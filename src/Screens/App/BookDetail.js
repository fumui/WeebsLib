import React, { Component } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { 
  Container, 
  Content, 
} from 'native-base';
import AppFooter from '../../Components/AppFooter';

export default class BookDetail extends Component {
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
          <Container style={styles.coverContainer}>
            <Image source={require('../../img/Tanya.jpg')}  style={styles.coverImage} />
            <Image source={require('../../img/Tanya.jpg')} style={styles.miniCoverImage} />
            <Text style={styles.bookDescription}>
              Finally, the Osfjord clash between Major Tanya Degurechaff and Colonel Anson Sue reaches its climax! Who will emerge victorious?! As the former salaryman prepares to launch her decisive attack, an old enemy makes a shocking appearance on the battlefield...And that enemy is none other than...Being X?!
            </Text>
          </Container>
        </Content>
        <AppFooter {...this.props} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  title:{
    marginLeft:30,
    color:"black",
  },
  root:{
  },
  coverContainer:{
    position:"relative"
  },
  coverImage:{
    marginLeft:-10,
    maxWidth:'110%',
    maxHeight:'45%',
  },
  miniCoverImage:{
    // position:"absolute",
    alignSelf:'flex-end',
    marginRight:'5%',
    marginTop:'-55%',
    maxWidth:'40%',
    maxHeight:'40%',
    resizeMode:"contain"
    // top:'-50%',
    // right:'-50%',
    // top:'20%',
    // transform:[{scale:0.8}]
  },
  bookDescription:{
    padding:20,
    fontSize:15,
  }
})