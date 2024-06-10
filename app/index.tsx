
import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

/* Views */
import Home from '@/Src/Views/Home';
import AddExpense from '@/Src/Views/AddExpense';
import AddExpenseCategory from '@/Src/Views/AddExpenseCategory';
import ExpenseRelevance from '@/Src/Views/ExpenseRelevance';
import AddIncome from '@/Src/Views/AddIncome';
import AddIncomeCategory from '@/Src/Views/AddIncomeCategory';
import IncomeRelevance from '@/Src/Views/IncomeRelevance';
import { View, StyleSheet } from 'react-native';




export default function App() {
  const Stack = createNativeStackNavigator();
  
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={Home}
        />
        <Stack.Screen 
        name="AddExpense"
        component={AddExpense}
        />
        <Stack.Screen 
          name="AddExpenseCategory"
          component={AddExpenseCategory}
          />
        <Stack.Screen 
          name="ExpenseRelevance"
          component={ExpenseRelevance}
        />
        <Stack.Screen 
          name="AddIncome"
          component={AddIncome}
        />
        <Stack.Screen 
          name="AddIncomeCategory"
          component={AddIncomeCategory}
        />
        <Stack.Screen 
          name="IncomeRelevance"
          component={IncomeRelevance}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  };

registerRootComponent(App);