import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";

export default function IncomeRelevance({navigation} : any) {
    /* constants */
    const titleText = "IncomeRelevance section"
    const titleButton = "Home"
    const viewButtonName = "Home"
    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton navigation={navigation} titleButton={titleButton} viewButtonName={viewButtonName}/>
        </View>
    );
  }