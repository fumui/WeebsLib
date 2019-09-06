import React, { Component, Fragment} from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { FlatList } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import { Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { 
  Container, 
  Content,
  Header,
  Body, 
  Title,
  Left,
  Right,
  Spinner
} from 'native-base';
import {getBorrowingHistory} from '../../Publics/Actions/Books';
import AppFooter from '../../Components/AppFooter';
import notFound from '../../img/notFound.png';
import BookCard from '../../Components/BookCard';
class History extends Component {
  componentDidMount=()=>{
    AsyncStorage.getItem('token',(err, res)=>{
      if(res)
        this.props.dispatch(getBorrowingHistory(res))
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>History</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
        {
          this.props.books.isLoading ?
          <Spinner/>
          :
          this.props.books.borrowingHistory.length !== 0 ?
          <FlatList
            data={this.props.books.borrowingHistory}
            numColumns={2}
            horizontal = {false}
            keyExtractor={item => item.id}
            removeClippedSubviews={false}
            contentContainerStyle={{justifyContent:'space-between'}}
            renderItem={({item})=>{
              console.log(item)
              return(
                <BookCard bookData={item} bookId={item.book_id} navigation={this.props.navigation} />
              )
            }}
          />:
          <Fragment>
          <Image source={notFound} style={styles.imageNotFound}/>
          <Text style={styles.title}>History Not Found</Text>
          </Fragment>
        }
        </Content>
        <AppFooter {...this.props} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  title:{
    alignSelf:'center',
    color:"black",
    fontSize:18
  },
  root:{
    justifyContent:'space-between',
    alignContent:'center',
  },
  imageNotFound:{
    alignSelf:'center',
    marginTop:150
  }
})
const mapStateToProps = state =>{
  return{
    books: state.books
  } 
}
export default connect(mapStateToProps)(History)