import { Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const WorkCard = ({ work }: any) => {
    return <SafeAreaView style={styles.card}>
        <View>
            <Text>
                Movie Name: {work.movieName}
            </Text>
            <Text>Role: {work.role}</Text>
        </View>
        <View style={{marginTop: 20}}>
            <Text>Movie Link</Text>
            <TouchableOpacity onPress={()=> {
                    Linking.canOpenURL(work.link).then(supported => {
                        if (supported) {
                          Linking.openURL(work.link);
                        } else {
                          console.log('Don\'t know how to open URI: ' + work.link);
                        }
                      });
                }}>
                <Text style={{color: 'blue'}}>{work.link}</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
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
    }
})

export default WorkCard;