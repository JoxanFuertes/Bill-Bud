import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import styles from "../Styles/Styles";
import GenericInputPrompt from "../Components/GenericInputPrompt";

/* I can ask for user input, now is time for designing all views to receive data
    bf creating the data base */

/* constants */
    /* for title */
const titleText = "Home";
    /* for button */
const titleButton = "ExpenseRelevance";
const viewButtonName = "ExpenseRelevance";
    /* for prompt */
const placeholderPrompt = "Enter the planet we will visit first ...";


export default function Home({navigation} : any) {

    const handlePress = (submitedTextPrompt : string) => {
        console.log("El astronauta quiere ir a: ", submitedTextPrompt)
    };
    return (
        <View style={styles.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton
            navigation={navigation}
            titleButton={titleButton}
            viewButtonName={viewButtonName}/>
{            <GenericInputPrompt 
            placeholderPrompt={placeholderPrompt}
            handlePress={handlePress}
            />}
        </View>
    );
  }