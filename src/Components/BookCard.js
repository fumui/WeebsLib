import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Card, CardItem, Left, Button, Text} from 'native-base';

const BookCard = (props) => {
  return (
    <Card style={styles.bookCard} >
      <CardItem cardBody button onPress={()=>{props.navigation.navigate('BookDetailScreen')}} >
        <Image source={props.source} style={styles.bookImage}/>
      </CardItem>
      <CardItem footer>
        <Left>
          <Button transparent >
            <Text>{props.title}</Text>
          </Button>
        </Left>
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
})

export default BookCard