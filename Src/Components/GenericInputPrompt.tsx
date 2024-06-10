import { Button, TextInput, View, Text} from "react-native";


export default function GenericInputPrompt(propos: any){

    const handlePress = () => {
        propos.setSubmitedTextPrompt(propos.textPrompt)
    };

    return(
        <View>
            <TextInput
                placeholder={propos.placeholderPrompt}
                value={propos.textPrompt}
                onChangeText={propos.setTextPrompt}
            />
            <Button title={propos.buttonTitlePrompt} onPress={handlePress}/>
            {propos.submitedTextPrompt ? <Text>{propos.submitedTextPrompt}</Text> : null}
        </View>    
    )
};