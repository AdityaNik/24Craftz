import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import PersonalDetails from "../(profilepages)/personalDetails";
import Photos from "../(profilepages)/photos";
import Work from "../(profilepages)/work";

const Tab = createMaterialTopTabNavigator();

const ProfileHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://media.gettyimages.com/id/651953563/photo/young-woman-with-eyes-closed-smiling-on-a-beach.jpg?s=612x612&w=gi&k=20&c=_tDZ-L6ttdggyQJrk1xyUlg0_Tgvl9rSbqTfVJ_CsIQ=",
                }}
            />
            <View style={styles.headerDetails}>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>Radha Kumari</Text>
                    <Text style={styles.subtitleText}>Actor, Singer</Text>
                </View>
                <View style={styles.contactContainer}>
                    <Text style={styles.contactText}>Phone: +91xxxxxx</Text>
                    <Text style={styles.contactText}>Email: abc@gmail.com</Text>
                </View>
            </View>
        </View>
    );
};

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader />
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: { height: 0 },
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarStyle: { backgroundColor: "#f5f5f5" },
                }}
            >
                <Tab.Screen name="Personal Details" component={PersonalDetails} />
                <Tab.Screen name="Photos" component={Photos} />
                <Tab.Screen name="Works" component={Work} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        flexDirection: "row",
        padding: 16,
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    headerDetails: {
        marginLeft: 16,
        flex: 1,
        justifyContent: "space-between",
    },
    nameContainer: {
        marginBottom: 8,
    },
    nameText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitleText: {
        fontSize: 14,
        color: "#555",
    },
    contactContainer: {},
    contactText: {
        fontSize: 14,
        color: "#333",
    },
});

export default Profile;
