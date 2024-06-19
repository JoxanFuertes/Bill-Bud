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
    containerCenter : {
        alignItems: "center"
    },
    containerLeft : {
        alignItems: "flex-start",
        flex: 1
    },
    buttonImage : {
        aspectRatio : 1,
        width: 60,
        height: 60,
    },
    buttonImageContainer : {
        alignItems: "flex-end",
        paddingRight : 20,
        paddingTop : 0,
    },
    promptContainer : {
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
        flex: 1,
        justifyContent: "center",
    },
    dropdownContainer : {
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
        flex: 1,
        justifyContent: "center",
    },
    dropdown : {
        backgroundColor : "rgb(33, 150, 243)",
    },
});

export default ViewStyle;