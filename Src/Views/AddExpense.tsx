import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/ViewStyle";

export default function AddExpense({navigation} : any) {
    /* constants */
    const titleText = "AddExpense"
    const titleButton = "IncomeRelevance"
    const viewButtonName = "IncomeRelevance"
    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton navigation={navigation} titleButton={titleButton} viewButtonName={viewButtonName}/>
        </View>
    );
};