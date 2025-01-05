import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";

const NotificationCard = ({notification}: any) => {

    return <SafeAreaView>
        <View style={styles.card}>
            <Image src={notification.profileImage} style={styles.image}></Image>
            <View>
                <Text>{notification.name} recently posted ...</Text>
                <Text>{notification.postTime} mins ago</Text>
            </View>
        </View>

    </SafeAreaView>
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        margin: 14,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
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

export default NotificationCard;