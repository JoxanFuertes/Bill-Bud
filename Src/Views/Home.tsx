import { View } from "react-native";
import GenericButton from "../Components/GenericButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/ViewStyle";
import GenericInputPrompt from "../Components/GenericInputPrompt";
import { useEffect, useState } from "react";

/* constants */
    /* for title */
const titleText = "Home";
    /* for button */
const titleButton = "ExpenseRelevance";
const viewButtonName = "ExpenseRelevance";
    /* for prompt */
/* fix this use states by calling them inside a function component like this:

"example code starts here ..."

const UserInputComponent = () => {
  // Define state hooks inside the functional component
  const [textPrompt, setTextPrompt] = useState('');
  const [submittedTextPrompt, setSubmittedTextPrompt] = useState('');

  // Define a handler for button press
  const handlePress = () => {
    setSubmittedTextPrompt(textPrompt);
  }; 
  
  ... "here ends the example code"*/

/* const placeholderPrompt = "Enter the planet we will visit first ...";
const [textPrompt, setTextPrompt] = useState("");
const [submitedTextPrompt, setSubmitedTextPrompt] = useState(""); */

/* useEffect(() => {
    if (submitedTextPrompt) {
        console.log("torre de control confirma que la nave va a trasladarse a: "
            , submitedTextPrompt)
    }
}, [submitedTextPrompt]) */

export default function Home({navigation} : any) {

    return (
        <View style={StyleView.view}>
            <GenericTitle titleText = {titleText}/>
            <GenericButton
            navigation={navigation}
            titleButton={titleButton}
            viewButtonName={viewButtonName}/>
{/*             <GenericInputPrompt 
            placeholderPrompt={placeholderPrompt}
            textPrompt={textPrompt}
            setTextPrompt={setTextPrompt}
            submitedTextPrompt={submitedTextPrompt}
            setSubmitedTextPrompt={setSubmitedTextPrompt}
            /> */}
        </View>
    );
  }