import MovieCard from "@/components/MovieCard";
import { FlatList, SafeAreaView, Text, View } from "react-native";

const OTTMovieData = [
    {
        id: 1,
        name: 'Chamkila',
        thumbnail: 'https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1712559607660-ar-rahman-amar-singh-chamkila-reviews-and-discussions-v0-25hllpkzo8rc1.webp&w=3840&q=75',
    },
    {
        id: 2,
        name: 'Chamkila',
        thumbnail: 'https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1712559607660-ar-rahman-amar-singh-chamkila-reviews-and-discussions-v0-25hllpkzo8rc1.webp&w=3840&q=75',
    },
    {
        id: 3,
        name: 'Chamkila',
        thumbnail: 'https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1712559607660-ar-rahman-amar-singh-chamkila-reviews-and-discussions-v0-25hllpkzo8rc1.webp&w=3840&q=75',
    },
    {
        id: 4,
        name: 'Chamkila',
        thumbnail: 'https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1712559607660-ar-rahman-amar-singh-chamkila-reviews-and-discussions-v0-25hllpkzo8rc1.webp&w=3840&q=75',
    },
    {
        id: 5,
        name: 'Chamkila',
        thumbnail: 'https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1712559607660-ar-rahman-amar-singh-chamkila-reviews-and-discussions-v0-25hllpkzo8rc1.webp&w=3840&q=75',
    }
]

const OttMovies = () => {
    return <SafeAreaView>
        <FlatList
            data={OTTMovieData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <MovieCard movie={item}/>}
        >
        </FlatList>
    </SafeAreaView>
}


export default OttMovies;