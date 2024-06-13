import React from "react";
import { View, Text} from "react-native";
import styles from "../Styles/Styles";

export default function GenericTitle(props: any){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.titleText}</Text>
        </View>
    )
}