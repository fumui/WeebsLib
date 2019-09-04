import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { DeckSwiper, Card, CardItem,Text} from 'native-base';
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
    maxHeight: 120, 
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
const GenreSwiper = () => {
  return(
    <DeckSwiper
      dataSource={cards}
      renderItem={item =>
        <Card style={styles.genreCard}>
          <CardItem cardBody
            style={styles.genreCardItem}>
            <Text style={styles.genreText}>{item.text}</Text>
            <Image style={styles.genreImage} source={item.image} />
          </CardItem>
        </Card>
      }
    />
  )
}
export default GenreSwiper