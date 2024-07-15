import { View, Text, KeyboardAvoidingView} from "react-native";
import GenericAddButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import styles from "../Styles/Styles";
import GenericInputPrompt from "../Components/GenericInputPrompt";
import { Dropdown } from 'react-native-element-dropdown';

    /* constants */
    const titleText = "AddExpense"
    const placeholder1 = "Amount"
    const placeholder2 = "Name"
    const placeholder3 = "Date"

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: '(+) Add Expense Category', value: 'button' },
    ];


export default function AddExpense({navigation} : any) {

    const handlePress = (submitedTextPrompt : string) => {
        console.log("El astronauta quiere ir a: ", submitedTextPrompt)
    };

    const handleDropdownPress = (item: any) => {
        if (item.value === 'button'){
            navigation.navigate("AddExpenseCategory")
        }
        else
            {console.log(item.label, ": ",item.value)}
    }

    return (
        <KeyboardAvoidingView style={styles.keyboardAvoidingContainer} behavior="padding" enabled>
            <View style={styles.viewContainer}>
            <GenericTitle titleText = {titleText} alignment = {"center"}/>
            <GenericInputPrompt 
            placeholderPrompt={placeholder1}
            handlePress={handlePress}
            />
            <GenericInputPrompt 
            placeholderPrompt={placeholder2}
            handlePress={handlePress}
            />
            <View style={styles.promptContainer}>
                <Text style={styles.text}>Category</Text>
                <Dropdown
                style={styles.genericDropdown}
                containerStyle={styles.genericDropdown}
                placeholder="Select Expense Category"
                placeholderStyle={styles.genericDropdownText}
                selectedTextStyle={styles.genericDropdownText}
                activeColor="#0056b3"
                itemTextStyle={styles.genericDropdownText}
                data={data}
                labelField = "label"
                valueField = "value"
                onChange={handleDropdownPress}
                />
            </View>

            <GenericInputPrompt 
            placeholderPrompt={placeholder3}
            handlePress={handlePress}
            />
            <GenericAddButton navigation={navigation} goTo={"AddExpenseCategory"}/>
            </View>
        </KeyboardAvoidingView>
    );
};