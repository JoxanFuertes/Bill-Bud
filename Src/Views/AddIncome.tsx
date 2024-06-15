import { View } from "react-native";
import GenericButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";
import GenericInputPrompt from "../Components/GenericInputPrompt";

    /* constants */
    const titleText = "AddIncome"
    const placeholder1 = "Amount"
    const placeholder2 = "Name"
    const placeholder3 = "Category"
    const placeholder4 = "Date"

export default function AddIncome({navigation} : any) {

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
            <GenericInputPrompt 
            placeholderPrompt={placeholder2}
            handlePress={handlePress}
            />
            <GenericInputPrompt 
            placeholderPrompt={placeholder3}
            handlePress={handlePress}
            />
            <GenericInputPrompt 
            placeholderPrompt={placeholder4}
            handlePress={handlePress}
            />
            <GenericButton navigation={navigation} goTo={"AddIncomeCategory"}/>
        </View>
    );
  }