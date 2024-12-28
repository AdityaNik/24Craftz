import RecievedApplicationsCard, { recievedJobs } from "@/components/RecievedApplicationsCard";
import { FlatList, SafeAreaView, Text } from "react-native";

const Recieved = () => {
    return <SafeAreaView>
        <FlatList
            data={recievedJobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <RecievedApplicationsCard application={item}/>}
        />
    </SafeAreaView>
}

export default Recieved;