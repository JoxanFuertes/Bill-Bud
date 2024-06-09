import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";

export default function Home({navigation} : any) {
    /* constants */
    const titleText = "home section"
    const titleButtom = "add Expense"
    return (
        <View>
            <GenericTitle titleText = {titleText}/>
            <GenericButton titleButtom={titleButtom} navigation={navigation}/>
        </View>
    );
  }