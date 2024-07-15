import { useState } from "react";
import { Button, TextInput, View, Text, TouchableOpacity} from "react-native";
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
            <TouchableOpacity
            style={styles.genericTouchableOpacity}
            onPress={() => {
            propos.handlePress(submitedText); 
            setSubmitedText("");
            }}>
                <Text style={styles.genericTouchableOpacityText}>Submit</Text>
            </TouchableOpacity>
            {submitedText ? <Text>{submitedText}</Text> : null}
        </View>    
    )
};