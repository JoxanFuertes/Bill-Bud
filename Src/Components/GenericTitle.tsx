import React from "react";
import { View, Text} from "react-native";

export default function GenericTitle(propos: any){
    return (
        <View>
            <Text>{propos.titleText}</Text>
        </View>
    )
}