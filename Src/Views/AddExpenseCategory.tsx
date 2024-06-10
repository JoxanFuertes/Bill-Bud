import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/ViewStyle";

export default function AddExpenseCategory({navigation} : any) {
    /* constants */
    const titleText = "AddExpenseCategory"
    const titleButton = "AddExpense"
    const viewButtonName = "AddExpense"

    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton navigation={navigation} titleButton={titleButton} viewButtonName={viewButtonName}/>
        </View>
    );
  }