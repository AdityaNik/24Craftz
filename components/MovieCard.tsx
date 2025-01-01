import { SafeAreaView, View, Image, Text, StyleSheet } from "react-native"
import CircularProgress from "react-native-circular-progress-indicator";

const MovieCard = ({movie}: any) => {
    return <SafeAreaView>
        <View style={styles.card}>
            <View>
                <Image 
                    style={styles.image}
                    source={{uri: movie.thumbnail}}
                >
                </Image>
            </View>
            <View style={styles.movieName}>
                <View>
                    <Text>{movie.name}</Text>
                    <Text style={{fontSize: 11}}>25-11-2020 - English</Text>
                    <Text style={{fontSize: 11}}>Sci-fi</Text>
                </View>
                <View style={{margin: 5}}>
                    <CircularProgress value={5} maxValue={10} radius={25}/>
                </View>
            </View>
            <View style={{margin: 4}}>
                <Text style={{color: 'blue', fontSize: 12}}>Review Movie</Text>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: 'column',
        padding: 5,
        margin: 15,
        borderRadius: 8,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
    image: {
        height: 150,
        borderRadius: 10
    },
    movieName: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5   
    }
})

export default MovieCard;