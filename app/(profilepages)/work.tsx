import WorkCard from "@/components/WorkCard";
import { FlatList, SafeAreaView, Text } from "react-native"

const workData = [
    {
        id: 1,
        movieName: 'Avengers',
        role: 'Writer',
        link: 'https://www.imdb.com/title/tt0848228/'
    },
    {
        id: 2,
        movieName: 'Badass Ravikumar',
        role: 'Director',
        link: 'https://www.imdb.com/title/tt23220552/'
    },
    {
        id: 3,
        movieName: 'Badshah',
        role: 'Main lead',
        link: 'https://www.imdb.com/title/tt0211934/'
    },
    {
        id: 4,
        movieName: 'Breking Bad',
        role: 'Side role',
        link: 'https://www.imdb.com/title/tt0903747/'
    },
    {
        id: 5,
        movieName: 'Game of throns',
        role: 'Willan',
        link: 'https://www.imdb.com/title/tt0944947/'
    }
]


const Work = () => {
    return <SafeAreaView>
        <FlatList
            data={workData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <WorkCard work={item}/>}
        >
        </FlatList>
    </SafeAreaView>
}

export default Work;