import React from "react";
import { View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    titleText : {
        fontFamily: "Franklin Gothic Demi",
        fontWeight: "bold",
        color : "white",
        fontSize: 30,
    },    
    container : {
        alignItems: "center"
    }
});

export default function GenericTitle(props: any){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.titleText}</Text>
        </View>
    )
}