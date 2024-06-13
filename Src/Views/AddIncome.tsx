import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";

export default function AddIncome({navigation} : any) {
    /* constants */
    const titleText = "AddIncome"
    const titleButton = "AddExpenseCategory"
    const viewButtonName = "AddExpenseCategory"
    
    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton navigation={navigation} titleButton={titleButton} viewButtonName={viewButtonName}/>
        </View>
    );
  }