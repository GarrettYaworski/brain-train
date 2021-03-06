import React from "react";
import { createStackNavigator } from "react-navigation";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import Nav from "../components/NavBar/Nav";
import ProfileScreen from "../screens/ProfileScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import EditProfile from "../components/Profiles/EditProfile";
import Aftab from "../components/Games/Aftab/Tile_Tap/Aftab";
import riddlegame from "../components/Games/Eric/riddlegame";
import Anthony from "../components/Games/Anthony";
import Achievements from "../components/Profiles/Achievements";
import questionOne from "../components/Games/Eric/questionOne";
import questionTwo from "../components/Games/Eric/questionTwo";
import questionThree from "../components/Games/Eric/questionThree";
import questionFour from "../components/Games/Eric/questionFour";
import Results from "../components/Games/Eric/Results";
import TriviaGame from "../components/Games/TriviaGame";
import TapNumber from "../components/Games/Eric/TapNumber";
import TapNumberGame from "../components/Games/Eric/TapNumberGame";
import AboutScreen from "../screens/AboutScreen";
import UserStats from "../components/Profiles/UserStats";
// import game from "../components/Games/Aftab/Tile_Tap/game";
// import ElasticStack from "../components/Games/Aftab/ImagePicker/ElasticStack";
// import MemoryTiles from "../components/Games/Aftab/MemoryTiles/MemoryTiles";
// import sequent from '../components/Games/src2/sequent';

export default (AppNavigator = createStackNavigator({
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  NavBar: { screen: Nav },
  EditProfile: { screen: EditProfile },
  Profile: { screen: ProfileScreen },
  Leaderboard: { screen: LeaderboardScreen },
  Eric: { screen: TapNumber },
  TapNumberGame: { screen: TapNumberGame },
  Aftab: { screen: Aftab },
  Anthony: { screen: Anthony },
  Achievements: { screen: Achievements },
  questionOne: { screen: questionOne },
  questionTwo: { screen: questionTwo },
  questionThree: { screen: questionThree },
  questionFour: { screen: questionFour },
  Results: { screen: Results },
  TriviaGame: { screen: TriviaGame },
  About: { screen: AboutScreen },
  UserStats: { screen: UserStats }
  // TileGame: {screen: game },
  // MemoryTiles: {screen: MemoryTiles},
  // ElasticStack: {screen: ElasticStack}
  // Sequent: {screen: sequent}
}));
