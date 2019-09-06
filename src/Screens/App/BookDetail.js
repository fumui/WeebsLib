import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Image, Text, StyleSheet, ScrollView } from 'react-native';
import { 
  Container, 
  Content, 
  Button,
  Toast,
  Spinner
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import AppFooter from '../../Components/AppFooter';
import {borrow, getBookById} from '../../Publics/Actions/Books';
import { getProfile } from '../../Publics/Actions/Users';

class BookDetail extends Component {
  componentDidMount(){
    if(Object.keys(this.props.users.userProfile).length === 0){
      AsyncStorage.getItem('token',(err, res)=>{
        if(res){
          this.props.dispatch(getProfile(res))
        }
      })
    }
  }
  render() {
    const bookId = this.props.navigation.getParam('bookId')
    let bookData = this.props.books.books.find(book => Number(book.id) === Number(bookId))
    console.log(bookId, bookData)
    if(bookData){
      const available = bookData.availability == '1'
      return (
          <Container contentContainerStyle={styles.root}>
            <Content showsVerticalScrollIndicator={false}>
              <Container style={styles.coverContainer}>
                <Image source={{uri:bookData.image}} style={styles.coverImage} />
                <Text style={{fontSize:20, backgroundColor:'black', opacity:0.5, color:'white' , paddingLeft: 5, elevation:3, marginTop: -28}}>{bookData.title}</Text>
                <Text style={{fontSize:20 , paddingLeft: 15, paddingTop:15, elevation:3, }}>{bookData.genre}</Text>
                <Image source={{uri:bookData.image}} style={styles.miniCoverImage} />
                <Text style={styles.bookDescription}>{bookData.description}</Text>
                <Button block warning
                  disabled={!available} 
                  onPress={()=>{this.borrowBook(bookId)}}
                >
                  {
                    available ? <Text>Request</Text>:<Text>Unavailable</Text>
                  }
                </Button>
              </Container>
            </Content>
            <AppFooter {...this.props} />
          </Container>
      );
    }else{
      this.props.dispatch(getBookById(bookId))
      return(<Spinner/>)
    }
  }
  borrowBook=(id)=>{
    const data = {
      book_id:id,
      user_id:this.props.users.userProfile.id
    }
    AsyncStorage.getItem('token',(err, res)=>{
      if(res){
        this.props.dispatch(borrow(data,res))
          .then(()=>{
            Toast.show({
              text: "Borrowing Requested",
              buttonText: "Okay",
              type: "success",
              position:'top',
              duration:4000,
              style:styles.toast
            })
          })
          .catch(err=>{
            Toast.show({
              text: err,
              buttonText: "Okay",
              type: "danger",
              position:'top',
              duration:4000,
              style:styles.toast
            })
          })
      }
    })
  }
}
const styles = StyleSheet.create({
  title:{
    marginLeft:30,
    color:"black",
  },
  root:{
    overflow:'scroll',
    position:'relative'
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
    marginTop:-10,
    padding:5,
    fontSize:13,
  },
  toast:{
    marginTop:20,
  }
})

const mapStateToProps = state =>{
  return{
    books: state.books,
    users: state.users
  } 
}
export default connect(mapStateToProps)(BookDetail)