import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import React from 'react';
import {Provider} from 'react-redux';
import {Root} from 'native-base';

import store from './src/Publics/Store';
import Login from './src/Screens/Auth/Login';
import Register from './src/Screens/Auth/Register';
import Home from './src/Screens/App/Home';
import BookDetail from './src/Screens/App/BookDetail';
import History from './src/Screens/App/History';

const AuthStack = createStackNavigator({
  Login:Login,
  Register:Register
},{
  headerMode:"none",
})

const AppStack = createStackNavigator({
  Home:Home,
  BookDetailScreen:BookDetail,
  History:History,
},{
  headerMode:"none",
})

const AppNavigator = createSwitchNavigator({
  Auth:AuthStack,
  App:AppStack
},{
  initialRouteName:'Auth',
});

const AppContainer = createAppContainer(AppNavigator)
const App = ()=>{
  return(
    <Provider store={store}>
      <Root>
        <AppContainer/>
      </Root>
    </Provider>
  )
}
export default App;