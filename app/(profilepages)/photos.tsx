import { Image, ScrollView } from "react-native";
import { View } from "react-native"

const posts = [
    {
        imageLink: 'https://plus.unsplash.com/premium_photo-1670428615389-7bf61172e1be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D'
    },
    {
        imageLink: 'https://storage.needpix.com/rsynced_images/mountain-3241312_1280.jpg'
    },
    {
        imageLink: 'https://t4.ftcdn.net/jpg/07/29/45/59/360_F_729455984_0BLpankzqOhGPVorxT5Tu7VuLNPvx2ur.jpg'
    }
]


const Photos = () => {
    return <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={120} source={{
                    uri: posts[0].imageLink
                }} />
            </View>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={120} source={{
                    uri: posts[1].imageLink
                }} />
            </View>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={120} source={{
                    uri: posts[2].imageLink
                }} />
            </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={120} source={{
                    uri: posts[0].imageLink
                }} />
            </View>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={120} source={{
                    uri: posts[1].imageLink
                }} />
            </View>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={120} source={{
                    uri: posts[2].imageLink
                }} />
            </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={120} source={{
                    uri: posts[0].imageLink
                }} />
            </View>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={120} source={{
                    uri: posts[1].imageLink
                }} />
            </View>
            <View style={{ flex: 1, margin: 2 }}>
                <Image height={1} source={{
                    uri: posts[2].imageLink
                }} />
            </View>
        </View>
    </ScrollView>
}

export default Photos;