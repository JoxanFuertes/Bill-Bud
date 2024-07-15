import { View } from "react-native";
import GenericButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import styles from "../Styles/Styles";

/* 

1) finish seting up a combo box for category (1)
2) make all combo box elements selectable, but the last one
    opens another window (2)
3) in expense relevance view: a list for all categories each of each has
 drag and drop capabilities, order can be altered, color changes according to
 position and if you leave an item pressed you see an option to delete.

*/

/* for prompt */
const placeholderPrompt = "Enter the planet we will visit first ...";

const title = "Home";
const subtitle1 = "Expenses";
const subtitle2 = "Income";

export default function Home({navigation} : any) {
    return (
        <View style={styles.viewContainer}>
            <GenericTitle titleText = {title} alignment="center"/>
            <GenericTitle titleText = {subtitle1} alignment="left"/>
            <GenericButton
            navigation={navigation}
            goTo={"AddExpense"}/>
            
            <GenericTitle titleText = {subtitle2} alignment="left"/>
            <GenericButton
            navigation={navigation}
            goTo={"AddIncome"}/>
        </View>
    );
  }