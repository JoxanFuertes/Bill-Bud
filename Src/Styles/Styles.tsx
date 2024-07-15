import { StyleSheet } from "react-native";

const ViewStyle = StyleSheet.create({
    keyboardAvoidingContainer: {
        flex: 1,
        backgroundColor: "black",
    },
    viewContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "black"
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
        width: "100%",
        marginBottom: 10,
    },
    promptContainer: {
        width: "100%",
        marginBottom: 10,
    },
    genericDropdown : {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    genericDropdownText: {
        color: '#',
        fontSize: 16,
        fontWeight: 'bold',
    },
    genericDropdownArrow:{
        color : "white"
    },
    genericTouchableOpacity: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    genericTouchableOpacityText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ViewStyle;