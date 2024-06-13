import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";

export default function AddIncomeCategory({navigation} : any) {
    /* constants */
    const titleText = "AddIncomeCategory"
    const titleButton = "AddIncome"
    const viewButtonName = "AddIncome"
    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton navigation={navigation} titleButton={titleButton} viewButtonName={viewButtonName}/>
        </View>
    );
  }