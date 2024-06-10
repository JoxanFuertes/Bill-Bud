import { Button, Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface GenericButtonProps {
    titleButton: string;
    viewButtonName: string;
    navigation: any; // Ideally, you should use the proper type from react-navigation
}

const styles = StyleSheet.create({
    buttonImage : {
        aspectRatio : 1,
        width: 60,
        height: 60,
    },
    container : {
        alignItems: "flex-end",
        paddingRight : 20,
        paddingTop : 80,
    }
});

export default function GenericButton (propos: any){
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => propos.navigation.navigate(propos.viewButtonName)}
            >
                <Image source={require("../Assets/plus.png")} style={styles.buttonImage} />
            </TouchableOpacity>
        </View>
    )
}