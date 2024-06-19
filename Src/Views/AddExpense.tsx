import { View } from "react-native";
import GenericButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import styles from "../Styles/Styles";
import GenericInputPrompt from "../Components/GenericInputPrompt";
import { Dropdown } from 'react-native-element-dropdown';

    /* constants */
    const titleText = "AddExpense"
    const placeholder1 = "Amount"
    const placeholder2 = "Name"
    const placeholder3 = "Category"
    const placeholder4 = "Date"

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

export default function AddExpense({navigation} : any) {

    const handlePress = (submitedTextPrompt : string) => {
        console.log("El astronauta quiere ir a: ", submitedTextPrompt)
    };

    return (
        <View style={styles.view}>
            <GenericTitle titleText = {titleText} alignment = {"center"}/>
            <GenericInputPrompt 
            placeholderPrompt={placeholder1}
            handlePress={handlePress}
            />
            <GenericInputPrompt 
            placeholderPrompt={placeholder2}
            handlePress={handlePress}
            />
            {/* this needs to be a Dropdown */}
            <View style={styles.dropdownContainer}>
                <Dropdown
                style={styles.dropdown}
                containerStyle={styles.dropdown}
                placeholderStyle={styles.text}
                selectedTextStyle={styles.text}
                itemTextStyle={styles.text}
                data={data}
                labelField = "label"
                valueField = "value"
                onChange={item => {
                    console.log(item.label, ": ",item.value)
                }}
                />
            </View>

            <GenericInputPrompt 
            placeholderPrompt={placeholder4}
            handlePress={handlePress}
            />
            <GenericButton navigation={navigation} goTo={"AddExpenseCategory"}/>
        </View>
    );
};