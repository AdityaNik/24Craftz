import { View, Image, Text, StyleSheet, Button } from "react-native";
import MyButton from "./MyButton";

export const jobs = [
    {
        "id": 1,
        "name": "Ramcharan",
        "profileImage": "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        "timePosted": "5 mins ago",
        "jobTitle": "Looking for Writers fresher or experienced.",
        "salary": 12000,
    },
    {
        "id": 2,
        "name": "Priya Sharma",
        "profileImage": "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        "timePosted": "10 mins ago",
        "jobTitle": "Hiring Graphic Designers with experience in Adobe Suite.",
        "salary": 15000,
    },
    {
        "id": 3,
        "name": "John Doe",
        "profileImage": "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        "timePosted": "30 mins ago",
        "jobTitle": "Looking for Content Creators passionate about tech.",
        "salary": 18000,
    }
]

interface JobType {
    job: {
        id: number,
        name: string,
        profileImage: string,
        timePosted: string,
        jobTitle: string,
        salary: number,
    }
}

export const JobCard = ({ job }: JobType) => {
    return <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
            <View style={{ marginBottom: 10 }}>
                <Image style={styles.image} source={{ uri: job.profileImage }} />
            </View>
            <View>
                <Text>{job.name}</Text>
                <Text>{job.timePosted}</Text>
            </View>
        </View>
        <View>
            <Text>{job.jobTitle}</Text>
            <Text>{job.salary}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 10 }}>
            <MyButton title='Share' />
            <MyButton title='Save' />
        </View>
    </View>
}


const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        padding: 20,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
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
    }
})



