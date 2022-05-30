import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Tab = createBottomTabNavigator();

export default props => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {

        let iconName;
        if (route.name === 'TelaA') {
          iconName = focused ?
           'information-circle-outline' : 
           'information-outline' ;
        } else if (route.name === 'TelaB') {
          iconName = focused ?
          'information-circle-outline' : 
          'information-outline' ;
        } else if (route.name === 'TelaC') {
          iconName = focused ?
          'list-outline' : 
          'list' ;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "blue",
      // tabBarShowLabel: false
      // tabBarLabelStyle: {
      //   showLabel: false
      // },
      tabBarStyle: [
        {
          display: "flex"
        },
        null,
      ]
    })} initialRouteName="TelaB">
      <Tab.Screen name="TelaA" component={TelaA} />
      <Tab.Screen name="TelaB" component={TelaB} />
      <Tab.Screen name="TelaC" component={TelaC} />

    </Tab.Navigator>
  );
}