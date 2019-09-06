import React, { Component } from 'react';
import { Image, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import { 
  Container, 
  Header, 
  View, 
  Body, 
  Title, 
  Text, 
  Spinner,
  Card, 
  CardItem,
  Button} from 'native-base';

import GenreSwiper from '../../Components/GenreSwiper';
import AppFooter from '../../Components/AppFooter';
import {getAllBooks} from '../../Publics/Actions/Books';
import BookCard from '../../Components/BookCard';

class Home extends Component {

  constructor(props){
    super(props)
    this.state={
      refreshing:false,
    }
  }

  componentDidMount = () => {
    if (this.props.books.books.length === 0)
      this.props.dispatch(getAllBooks(1))
  }

  render() {
    return (
      <Container>
        <Header transparent>
          <Body>
            <Title style={styles.title} >Weebs Lib</Title>
          </Body>
        </Header>
          <View>
            <GenreSwiper {...this.props}/>
          </View>
          <Container style={{marginTop:150,alignSelf:'center'}}>
            <Text>Books</Text>
                <FlatList
                  data={this.props.books.books}
                  numColumns={2}
                  horizontal = {false}
                  keyExtractor={item => item.id}
                  removeClippedSubviews={false}
                  contentContainerStyle={{justifyContent:'space-between'}}
                  refreshing = {this.state.refreshing}
                  onRefresh={()=>{
                    this.setState({refreshing:true},()=>{
                      this.props.dispatch(getAllBooks(1))
                        .then(()=>{
                          this.setState({refreshing:false})
                        })
                    })
                  }}
                  ListFooterComponent={() => {
                    if (!this.props.books.isLoading) return null;
                    return (
                      <Spinner style={{marginBottom:50}} />
                    );
                   }}
                   onEndReachedThreshold={0.1}
                  onEndReached={async ()=>{
                    if(!(this.props.books.isLoading || this.props.books.isRejected)){
                    let nextPage = Number(this.props.books.page) + 1
                      await this.props.dispatch(getAllBooks(nextPage))
                    }
                  }}
                  renderItem={({item})=>{
                    return(
                      <BookCard bookData={item} navigation={this.props.navigation} />
                    )
                  }}
                />
          </Container>
        <AppFooter {...this.props}/>
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
    justifyContent:"space-between",
  },
  booksList:{
    display:"flex",
    flexDirection:'column',
    flexWrap:'wrap',
    justifyContent:'space-between',
  },
  booksListRow:{
    marginTop:10,
    marginBottom:70
  },
  bookCard:{
    width: '100%', 
    flex: 1, 
    elevation:10,
  },
  bookImage:{
    maxWidth: '100%', 
    maxHeight:'100%', 
    flex: 1,
  },
  bookTitle:{
    fontSize:12,
    color:"black"
  }
})
const mapStateToProps = state =>{
  return{
    books: state.books
  } 
}
export default connect(mapStateToProps)(Home)