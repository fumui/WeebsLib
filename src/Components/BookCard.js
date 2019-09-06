import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Card, CardItem, Button, Text, Body} from 'native-base';

const BookCard = (props) => {
  return (
    <Card style={{height:'100%'}}  >
      <CardItem cardBody button  onPress={()=>{props.navigation.navigate('BookDetailScreen',{bookId:props.bookId||props.bookData.id})}} >
        <Image source={{uri:props.bookData.image}} style={{
          height:260,
          width:160,
          }}/>
      </CardItem>
      <CardItem>
        <Body>
        <Button transparent onPress={()=>{props.navigation.navigate('BookDetailScreen',{bookId:props.bookData.id||props.bookId})}}>
          <Text style={styles.bookTitle}>{props.bookData.title.length > 30 ? props.bookData.title.substr(0,27)+'...':props.bookData.title}</Text>
        </Button>
        </Body>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  bookCard:{
    width: '40%', 
    flex: 1, 
    elevation:10,
  },
  bookImage:{
    alignSelf:'center',
    maxWidth: '100%', 
    maxHeight:'100%', 
    flex: 1,
  },
  bookTitle:{
    fontSize:12,
    color:"black"
  }
})

export default BookCard