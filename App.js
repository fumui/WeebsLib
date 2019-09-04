import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
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

export default createAppContainer(AppNavigator);