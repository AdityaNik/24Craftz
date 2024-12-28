import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import PersonalDetails from "../(profile)/personalDetails";
import Photos from "../(profile)/photos";
import Work from "../(profile)/work";

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarIndicatorStyle: {height: 0},
        }}>
            <Tab.Screen name="Personal Details" component={PersonalDetails}/>
            <Tab.Screen name="Photos" component={Photos} />
            <Tab.Screen name="Works" component={Work} />
        </Tab.Navigator>
    )
}

export default Profile;