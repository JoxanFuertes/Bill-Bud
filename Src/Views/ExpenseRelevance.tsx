import { View } from "react-native";
import GenericButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";

export default function ExpenseRelevance({navigation} : any) {
    /* constants */
    const titleText = "ExpenseRelevance"
    const viewButtonName = "AddIncomeCategory"
    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText} alignment = {"center"}/>
            <GenericButton navigation={navigation} viewButtonName={viewButtonName}/>
        </View>
    );
  }