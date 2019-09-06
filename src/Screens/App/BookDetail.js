import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Image, Text, StyleSheet } from 'react-native';
import { 
  Container, 
  Content, 
} from 'native-base';
import AppFooter from '../../Components/AppFooter';

class BookDetail extends Component {
  render() {
    const bookId = this.props.navigation.getParam('bookId')
    const bookData = this.props.books.books.find(book => Number(book.id) === Number(bookId) )
    console.log(bookId, bookData)
    return (
      <Container>
        <Content padder contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
          <Container style={styles.coverContainer}>
            <Image source={{uri:bookData.image}} style={styles.coverImage} />
            <Image source={{uri:bookData.image}} style={styles.miniCoverImage} />
            <Text style={styles.bookDescription}>{bookData.description}</Text>
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
    width:'110%',
    height:'45%',
  },
  miniCoverImage:{
    alignSelf:'flex-end',
    marginRight:'5%',
    marginTop:'-55%',
    width:'40%',
    height:'40%',
    resizeMode:"contain"
  },
  bookDescription:{
    padding:20,
    fontSize:15,
  }
})

const mapStateToProps = state =>{
  return{
    books: state.books
  } 
}
export default connect(mapStateToProps)(BookDetail)