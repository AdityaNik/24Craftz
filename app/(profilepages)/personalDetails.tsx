import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from "react-native";

const PersonalDetails = () => {
    const [interests, setInterests] = useState({
        movies: false,
        serial: false,
        shortMovies: false,
        boldContent: false,
        webSeries: false,
        ottMovies: false,
    });

    const toggleSwitch = (key: any) => {
        setInterests((prevState: any) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Name: Radha Kulkarni</Text>
                <Text style={styles.infoText}>Screen Name: Shilpa</Text>
                <Text style={styles.infoText}>Height: 5.4</Text>
                <Text style={styles.infoText}>Weight: 60kg</Text>
                <Text style={styles.infoText}>Color: Fair</Text>
                <Text style={styles.infoText}>Interested In:</Text>
            </View>
            <View style={styles.interestsContainer}>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>Movies</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={interests.movies ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => toggleSwitch("movies")}
                        value={interests.movies}
                    />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>Serial</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={interests.serial ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => toggleSwitch("serial")}
                        value={interests.serial}
                    />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>Short Movies</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={interests.shortMovies ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => toggleSwitch("shortMovies")}
                        value={interests.shortMovies}
                    />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>Bold Content</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={interests.boldContent ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => toggleSwitch("boldContent")}
                        value={interests.boldContent}
                    />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>Web Series</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={interests.webSeries ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => toggleSwitch("webSeries")}
                        value={interests.webSeries}
                    />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>OTT Movies</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={interests.ottMovies ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => toggleSwitch("ottMovies")}
                        value={interests.ottMovies}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    infoContainer: {
        marginBottom: 16,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 4,
        color: "#333",
    },
    interestsContainer: {
        marginTop: 16,
    },
    switchRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        backgroundColor: "#f9f9f9",
        marginVertical: 8,
    },
    switchText: {
        fontSize: 16,
        color: "#333",
    },
});

export default PersonalDetails;
