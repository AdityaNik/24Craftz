import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppliedJobs from "../(jobs)/appliedjobs";
import JobsList from "../(jobs)/joblists";
import PostJob from "../(jobs)/postjobs";

const Tab = createMaterialTopTabNavigator();

const Jobs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Jobs" component={JobsList} />
            <Tab.Screen name="Post Job" component={PostJob} />
            <Tab.Screen name="Applied" component={AppliedJobs} />
        </Tab.Navigator>
    )
}


export default Jobs;