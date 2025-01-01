import MovieCard from "@/components/MovieCard";
import { FlatList, SafeAreaView, Text, View } from "react-native";

const upcommingMovieData = [
    {
        id: 1,
        name: 'Maharaja',
        thumbnail: 'https://i.ytimg.com/vi/z37hCm4eges/maxresdefault.jpg',
    },
    {
        id: 2,
        name: 'Maharaja',
        thumbnail: 'https://i.ytimg.com/vi/z37hCm4eges/maxresdefault.jpg',
    },
    {
        id: 3,
        name: 'Maharaja',
        thumbnail: 'https://i.ytimg.com/vi/z37hCm4eges/maxresdefault.jpg',
    },
    {
        id: 4,
        name: 'Maharaja',
        thumbnail: 'https://i.ytimg.com/vi/z37hCm4eges/maxresdefault.jpg',
    },
    {
        id: 5,
        name: 'Maharaja',
        thumbnail: 'https://i.ytimg.com/vi/z37hCm4eges/maxresdefault.jpg',
    }
]

const UpcomingMovies = () => {
    return <SafeAreaView>
        <FlatList
            data={upcommingMovieData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <MovieCard movie={item}/>}
        >
        </FlatList>
    </SafeAreaView>
}


export default UpcomingMovies;