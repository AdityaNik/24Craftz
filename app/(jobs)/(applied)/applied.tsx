import AppliedJobCard, { appliedJobs } from "@/components/AppliedJobCard";
import { FlatList, SafeAreaView, Text } from "react-native";

const Applied = () => {
    return <SafeAreaView>
        <FlatList 
            data={appliedJobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <AppliedJobCard application={item} />}
        />
    </SafeAreaView>
}

export default Applied;