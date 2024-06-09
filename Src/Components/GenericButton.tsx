import { Button, View } from "react-native";

export default function GenericButton(propos: any){
    return (
        <View>
            <Button title={propos.titleButtom} onPress={() => propos.navigation.navigate("AddExpense")}></Button>
        </View>
    )
}