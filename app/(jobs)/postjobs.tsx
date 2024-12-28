import MyButton from "@/components/MyButton";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown";

const category = [
    {label: 'English', value: '1'},
    {label: 'Telugu', value: '2'},
    {label: 'Hindi', value: '3'},
    {label: 'Tamil', value: '4'},
]

const jobType = [
    {label: 'Part Time', value: '1'},
    {label: 'Full time', value: '2'},    
]

const PostJob = () => {
    const [value, setValue] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [typeValue, setTypeValue] = useState<string | null>(null);
    const [isTypeFocus, setIsTypeFocus] = useState(false);

    useEffect(() => {
        setValue(null);
        setTypeValue(null);
    }, [])

    return <SafeAreaView>
        <View style={{marginTop: 20, margin: 10}}>
            <Text>Post your job Requirements</Text>
        </View>
        <View>
            <TextInput 
                style={styles.input} 
                placeholder="Company Name"
            />
            <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemTextStyle}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                maxHeight={300}
                labelField="label" 
                valueField="value"
                data={category} 
                value={value}
                placeholder={!isFocus ? 'Job Category' : '...'} 
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
            <TextInput
                style={styles.multilineInput}
                multiline
                editable
                numberOfLines={4}
                placeholder="Discription"
            />
            <Dropdown
                style={[styles.dropdown, isTypeFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemTextStyle}
                onFocus={() => setIsTypeFocus(true)}
                onBlur={() => setIsTypeFocus(false)}
                maxHeight={300}
                labelField="label" 
                valueField="value"
                data={jobType} 
                value={typeValue}
                placeholder={!isTypeFocus ? 'Job Type' : '...'} 
                onChange={item => {
                    setTypeValue(item.value);
                    setIsTypeFocus(false);
                }}
            />
        </View>
        <View style={{margin: 10, marginTop: 25}}>
            <MyButton title='Submit'/>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 16,
        borderWidth: 1, 
        padding: 10,
        fontSize: 14,
        borderRadius: 6,
        borderColor: 'gray',
        backgroundColor: 'white'
    },
    multilineInput: {
        height: 100,
        margin: 16,
        borderWidth: 1,
        padding: 10,
        fontSize: 14,
        borderRadius: 6,
        borderColor: 'gray',
        backgroundColor: 'white',
        textAlignVertical: 'top'
    },
    dropdown: {
        height: 40,
        marginHorizontal: 16,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        color: 'gray'
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    itemTextStyle: {
        fontSize: 14,
    }
})

export default PostJob;