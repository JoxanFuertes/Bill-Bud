import { View } from "react-native";
import GenericButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";

export default function IncomeRelevance({navigation} : any) {
    /* constants */
    const titleText = "IncomeRelevance section"
    const viewButtonName = "Home"
    return (
        <View style={StyleView.viewContainer}>
            <GenericTitle titleText = {titleText} alignment = {"center"}/>
            <GenericButton navigation={navigation} viewButtonName={viewButtonName}/>
        </View>
    );
  }