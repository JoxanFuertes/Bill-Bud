import React from "react";
import { View, Text} from "react-native";
import styles from "../Styles/Styles";
import {StyleLogicContainer} from "../Styles/StyleLogic";

export default function GenericTitle(props: any){
    return (
        <View style={StyleLogicContainer(props.alignment)}>
            <Text style={styles.titleText}>{props.titleText}</Text>
        </View>
    )
}