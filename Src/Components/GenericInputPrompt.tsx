import { useState } from "react";
import { Button, TextInput, View, Text} from "react-native";
import styles from "../Styles/Styles";

export default function GenericInputPrompt(propos: any){

    const [submitedText, setSubmitedText] = useState("")
    return(
        <View style={styles.promptContainer}>
            <TextInput
                placeholder={propos.placeholderPrompt}
                placeholderTextColor={'#E5d8c8'}
                value={submitedText}
                onChangeText={setSubmitedText}
                style={styles.text}
            />
            <Button title={"submit"}
            onPress={() => {
            propos.handlePress(submitedText)}}
            />
            {submitedText ? <Text>{submitedText}</Text> : null}
        </View>    
    )
};