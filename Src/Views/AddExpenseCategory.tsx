import { View } from "react-native";
import GenericButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";
import GenericInputPrompt from "../Components/GenericInputPrompt";

    /* constants */
    const titleText = "AddExpenseCategory"
    const placeholder1 = "Name"

export default function AddExpenseCategory({navigation} : any) {

    const handlePress = (submitedTextPrompt : string) => {
        console.log("El astronauta quiere ir a: ", submitedTextPrompt)
    };

    return (
        <View style={StyleView.viewContainer}>
            <GenericTitle titleText = {titleText} alignment = {"center"}/>
            <GenericInputPrompt 
            placeholderPrompt={placeholder1}
            handlePress={handlePress}
            />
            <GenericButton navigation={navigation} goTo={"ExpenseRelevance"}/>
        </View>
    );
  }