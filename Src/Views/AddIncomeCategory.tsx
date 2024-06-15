import { View } from "react-native";
import GenericButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";
import GenericInputPrompt from "../Components/GenericInputPrompt";

    /* constants */
    const titleText = "Add Income Category"
    const placeholder1 = "Name"

export default function AddIncomeCategory({navigation} : any) {

    const handlePress = (submitedTextPrompt : string) => {
        console.log("El astronauta quiere ir a: ", submitedTextPrompt)
    };

    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText} alignment = {"center"}/>
            <GenericInputPrompt 
            placeholderPrompt={placeholder1}
            handlePress={handlePress}
            />
            <GenericButton navigation={navigation} goTo={"IncomeRelevance"}/>
        </View>
    );
  }