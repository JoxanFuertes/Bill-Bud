import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/ViewStyle";

export default function Home({navigation} : any) {
    /* constants */
    const titleText = "Home"
    const titleButton = "ExpenseRelevance"
    const viewButtonName = "ExpenseRelevance"

    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton navigation={navigation} titleButton={titleButton} viewButtonName={viewButtonName}/>
        </View>
    );
  }