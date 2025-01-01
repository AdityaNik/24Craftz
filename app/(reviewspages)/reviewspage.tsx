import MovieCard from "@/components/MovieCard";
import { FlatList, SafeAreaView} from "react-native";

const moviesData = [
    {
        id: 1,
        name: 'Avengers Endgame',
        thumbnail: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp',
    },
    {
        id: 2,
        name: 'Avengers Endgame',
        thumbnail: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp',
    },
    {
        id: 3,
        name: 'Avengers Endgame',
        thumbnail: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp',
    },
    {
        id: 4,
        name: 'Avengers Endgame',
        thumbnail: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp',
    },
    {
        id: 5,
        name: 'Avengers Endgame',
        thumbnail: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp',
    }
]

const ReviewMovies = () => {
    return <SafeAreaView>
        <FlatList
            data={moviesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovieCard movie={item}/>}
        >
        </FlatList>
    </SafeAreaView>
}

export default ReviewMovies;