import {Image, TouchableOpacity, View } from "react-native";
import styles from "../Styles/Styles"

interface GenericButtonProps {
    titleButton: string;
    viewButtonName: string;
    navigation: any; // Ideally, you should use the proper type from react-navigation
}

export default function GenericButton (propos: any){
    return (
        <View style={styles.buttonImageContainer}>
            <TouchableOpacity 
            onPress={() => propos.navigation.navigate(propos.viewButtonName)}
            >
                <Image source={require("../Assets/plus.png")} style={styles.buttonImage} />
            </TouchableOpacity>
        </View>
    )
}