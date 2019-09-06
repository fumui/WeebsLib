import React from 'react';
import { Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import {connect} from 'react-redux';
import { DeckSwiper, Card, CardItem,Text, View} from 'native-base';
import {getBooksByGenre} from '../Publics/Actions/Books';
const cards = [
  {
    text: 'Action',
    name: 'One',
    image: require('../img/Action.png'),
  },
  {
    text: 'Drama',
    name: '2',
    image: require('../img/Drama.png'),
  },
  {
    text: 'Fantasy',
    name: '3',
    image: require('../img/Fantasy.png'),
  },
  {
    text: 'Romance',
    name: '4',
    image: require('../img/Romance.png'),
  },
  {
    text: 'Slice Of Life',
    name: '4',
    image: require('../img/SliceOfLife.png'),
  },
];
const styles = StyleSheet.create({
  genreCard:{  
    minHeight: 120, 
    minWidth: 120 , 
    elevation: 3, 
  }, 
  genreCardItem:{ 
    justifyContent:"space-between", 
    backgroundColor:"#28BFDB" 
  },
  genreImage:{ 
    height: 120, 
    maxWidth: 120 , 
    flex: 1 ,
  },
  genreText:{ 
    color:"white",
    padding:30,
    fontSize:25, 
    flex: 1 ,
  },
})
const GenreSwiper = (props) => {
  return(
    <DeckSwiper
      dataSource={cards}
      renderItem={item =>
        <TouchableNativeFeedback onPress={()=>{props.dispatch(getBooksByGenre(item.text))}}>
        <Card style={styles.genreCard}>
          <CardItem cardBody 
            style={styles.genreCardItem}>
            <Text style={styles.genreText}>{item.text}</Text>
            <Image style={styles.genreImage} source={item.image}/>
          </CardItem>
        </Card>
        </TouchableNativeFeedback>
      }
    />
  )
}
export default connect(null)(GenreSwiper)