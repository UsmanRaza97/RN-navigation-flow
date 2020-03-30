import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Article from './src/Components/ArticleScreen';
import Feed from './src/Components/FeedScreen';
import HomeScreen from './src/Components/HomeScreen';
import DetailScreen from './src/Components/DetailScreen';
import SignInScreen from './src/Components/SignIn';
import SplashScreen from './src/Components/splashScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createStackNavigator();
const AuthStack = createStackNavigator();
const BottomTabStack = createBottomTabNavigator();

const tabScreen = () => {
  return (
    <Tab.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const createStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        title: 'overview',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
        ),
      }}
      name="Home"
      component={tabScreen}
    />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
  </Stack.Navigator>
);
const bottomStack = () => (
  <BottomTabStack.Navigator>
    <BottomTabStack.Screen name="Feed" component={Feed} />
    <BottomTabStack.Screen name="Artical" component={Article} />
  </BottomTabStack.Navigator>
);
const App = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [userToker, setUserToken] = React.useState('asdf');
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      {userToker ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={createStack} />
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="SignIn" component={SignInScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
