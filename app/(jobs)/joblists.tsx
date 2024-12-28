import { JobCard, jobs } from "@/components/JobCard";
import { FlatList, SafeAreaView, Text } from "react-native"


const JobsList = () => {
    return <SafeAreaView style={{ margin: 5 }}>
        <FlatList
            data={jobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <JobCard job={item} />}
        />
    </SafeAreaView>
}

export default JobsList;
