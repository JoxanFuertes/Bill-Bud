
import { registerRootComponent } from 'expo';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from '@/Src/Views/Home';
import AddExpense from '@/Src/Views/AddExpense';

export default function App() {
    const Tab = createBottomTabNavigator();
  
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
          name="Home"
          component={Home}
          />
          <Tab.Screen 
          name="AddExpense"
          component={AddExpense}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

registerRootComponent(App);