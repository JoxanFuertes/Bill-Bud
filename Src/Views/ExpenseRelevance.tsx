import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/ViewStyle";

export default function ExpenseRelevance({navigation} : any) {
    /* constants */
    const titleText = "ExpenseRelevance"
    const titleButton = "AddIncomeCategory"
    const viewButtonName = "AddIncomeCategory"
    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton navigation={navigation} titleButton={titleButton} viewButtonName={viewButtonName}/>
        </View>
    );
  }