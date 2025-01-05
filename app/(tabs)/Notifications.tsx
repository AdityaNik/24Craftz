import NotificationCard from "@/components/NotificationCard";
import { FlatList, Text, View } from "react-native";

const notificationData = [
    {
        id: 1,
        name: 'John Doe',
        profileImage: "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        postTime: (new Date().getTime() - (new Date().getTime() - 300)) / 60,
    },
    {
        id: 2,
        name: 'John Doe',
        profileImage: "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        postTime: (new Date().getTime() - (new Date().getTime() - 300)) / 60,
    },
    {
        id: 3,
        name: 'John Doe',
        profileImage: "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        postTime: (new Date().getTime() - (new Date().getTime() - 300)) / 60,
    },
    {
        id: 4,
        name: 'John Doe',
        profileImage: "https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png",
        postTime: (new Date().getTime() - (new Date().getTime() - 300)) / 60,
    },
]


const Notifications = () => {
    return <View>
        <FlatList 
            data={notificationData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NotificationCard notification={item} />}
        />
    </View>
}

export default Notifications;