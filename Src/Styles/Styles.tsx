import { StyleSheet } from "react-native";

const ViewStyle = StyleSheet.create({
    view : {
        backgroundColor : "black",
        flex: 1
    },
    titleText : {
        fontFamily: "Franklin Gothic Demi",
        fontWeight: "bold",
        color : "white",
        fontSize: 30,
    },
    text : {
        fontFamily: "Franklin Gothic Demi",
        fontWeight: "bold",
        color : "white",
        fontSize: 20,
    },  
    container : {
        alignItems: "center"
    },
    buttonImage : {
        aspectRatio : 1,
        width: 60,
        height: 60,
    },
    buttonImageContainer : {
        alignItems: "flex-end",
        paddingRight : 20,
        paddingTop : 80,
    },
    promptContainer : {
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
    }
});

export default ViewStyle;