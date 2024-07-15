import { View, Text } from "react-native";
import GenericButton from "../Components/GenericAddButton";
import GenericTitle from "../Components/GenericTitle";
import StyleView from "../Styles/Styles";
import GenericInputPrompt from "../Components/GenericInputPrompt";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../Styles/Styles";

    /* constants */
    const titleText = "AddIncome"
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
        { label: '(+) Add Income Category', value: 'button' },
    ];

export default function AddIncome({navigation} : any) {

    const handlePress = (submitedTextPrompt : string) => {
        console.log("El astronauta quiere ir a: ", submitedTextPrompt)
    };

    const handleDropdownPress = (item: any) => {
        if (item.value === 'button'){
            navigation.navigate("AddIncomeCategory")
        }
        else
            {console.log(item.label, ": ",item.value)}
    }

    return (
        <View style={StyleView.viewContainer}>
            <GenericTitle titleText = {titleText} alignment = {"center"}/>
            <GenericInputPrompt 
            placeholderPrompt={placeholder1}
            handlePress={handlePress}
            />
            <GenericInputPrompt 
            placeholderPrompt={placeholder2}
            handlePress={handlePress}
            />
            <View style={styles.viewContainer}>
                <Text style={styles.text}>Category</Text>
                <Dropdown
                style={styles.genericDropdown}
                containerStyle={styles.genericDropdown}
                placeholder="Select Income Category"
                placeholderStyle={styles.genericDropdownText}
                selectedTextStyle={styles.genericDropdownText}
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
            <GenericButton navigation={navigation} goTo={"AddIncomeCategory"}/>
        </View>
    );
  }