import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MyButton from "./MyButton"

export const recievedJobs = [
    {
        id: 1,
        companyName: 'Abc',
        profileImage: "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        
    },
    {
        id: 2,
        companyName: 'xyz',
        profileImage: "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        
    },
    {
        id: 3,
        companyName: 'mno',
        profileImage: "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",  
    },
    {
        id: 4,
        companyName: 'pqr',
        profileImage: "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",      
    }
]


const RecievedApplicationsCard = ({application}: any) => {
    return <SafeAreaView>
        <View style={styles.card}>
            <View style={{display: "flex", flexDirection: 'row'}}>
                <Image style={styles.image} source={{ uri: application.profileImage }} />
                <Text>{application.companyName}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.rejectButton]}>
                    <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.viewButton]}>
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 8,
        borderRadius: 10,
        shadowColor: "#000",
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 15,
        marginRight: 10,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#e0f2ff',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    rejectButton: {
        backgroundColor: '#ffcccb',
    },
    viewButton: {
        backgroundColor: '#e0f2ff',
    },
    buttonText: {
        color: '#007bff',
        fontSize: 12,
        fontWeight: '500',
    },
})

export default RecievedApplicationsCard;