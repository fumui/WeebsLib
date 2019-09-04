import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { 
  Container, 
  Header, 
  View, 
  Body, 
  Title, 
  Text, 
  Card, 
  CardItem,
  Grid, 
  Col,
  Row, 
  Button, 
  Content, 
  Left, 
  Footer, 
  FooterTab, 
  Icon } from 'native-base';

import GenreSwiper from '../../Components/GenreSwiper';
import AppFooter from '../../Components/AppFooter';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Body>
            <Title style={styles.title} >Weebs Lib</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
          <View>
            <GenreSwiper/>
          </View>
          <Container style={{marginTop:150,}}>
            <Text>Popular Books</Text>
            <Container style={styles.booksList}>
              <Grid>
                <Row style={styles.booksListRow}>
                  <Col>
                  <Card style={styles.bookCard} >
                    <CardItem cardBody button onPress={()=>{this.props.navigation.navigate('BookDetailScreen')}} >
                      <Image source={require('../../img/Tanya.jpg')} style={styles.bookImage}/>
                    </CardItem>
                    <CardItem footer>
                      <Left>
                        <Button transparent >
                          <Text>The Saga Of Tanya The Evil Vol.1 (Manga)</Text>
                        </Button>
                      </Left>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card style={styles.bookCard} >
                    <CardItem cardBody button onPress={()=>{this.props.navigation.navigate('BookDetailScreen')}} >
                      <Image source={require('../../img/Tanya.jpg')} style={styles.bookImage}/>
                    </CardItem>
                    <CardItem footer>
                      <Left>
                        <Button transparent >
                          <Text>The Saga Of Tanya The Evil Vol.1 (Manga)</Text>
                        </Button>
                      </Left>
                    </CardItem>
                  </Card>
                </Col>
                </Row>
                <Row style={styles.booksListRow}>
                  <Col>
                  <Card style={styles.bookCard} >
                    <CardItem cardBody button onPress={()=>{this.props.navigation.navigate('BookDetailScreen')}} >
                      <Image source={require('../../img/Tanya.jpg')} style={styles.bookImage}/>
                    </CardItem>
                    <CardItem footer>
                      <Left>
                        <Button transparent >
                          <Text>The Saga Of Tanya The Evil Vol.1 (Manga)</Text>
                        </Button>
                      </Left>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card style={styles.bookCard} >
                    <CardItem cardBody button onPress={()=>{this.props.navigation.navigate('BookDetailScreen')}} >
                      <Image source={require('../../img/Tanya.jpg')} style={styles.bookImage}/>
                    </CardItem>
                    <CardItem footer>
                      <Left>
                        <Button transparent >
                          <Text>The Saga Of Tanya The Evil Vol.1 (Manga)</Text>
                        </Button>
                      </Left>
                    </CardItem>
                  </Card>
                </Col>
                </Row>
              </Grid>
            </Container>
          </Container>
        </Content>
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
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
  },
  booksListRow:{
    marginTop:10,
    marginBottom:70
  },
  bookCard:{
    width: '100%', 
    height:'100%', 
    flex: 1, 
    elevation:10,
  },
  bookImage:{
    maxWidth: '100%', 
    maxHeight:'100%', 
    flex: 1,
  },
})