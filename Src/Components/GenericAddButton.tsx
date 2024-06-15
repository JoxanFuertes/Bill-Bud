import {Image, TouchableOpacity, View } from "react-native";
import styles from "../Styles/Styles"

export default function GenericButton (propos: any){
    return (
        <View style={styles.buttonImageContainer}>
            <TouchableOpacity 
            onPress={() => propos.navigation.navigate(propos.goTo)}
            >
                <Image source={require("../Assets/plus.png")} style={styles.buttonImage} />
            </TouchableOpacity>
        </View>
    )
}