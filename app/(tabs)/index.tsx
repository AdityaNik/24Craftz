import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import JobsList from "../(jobs)/joblists";
import PostJob from "../(jobs)/postjobs";
import AppliedJobs from "../(jobs)/appliedjobs";
import Recieved from "../(jobs)/(applied)/recieved";

const Tab = createMaterialTopTabNavigator();

const Jobs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Jobs" component={JobsList} />
            <Tab.Screen name="Post Job" component={PostJob} />
            <Tab.Screen name="Applied" component={AppliedJobs} />
            <Tab.Screen name="Recieved" component={Recieved} />
        </Tab.Navigator>
    )
}


export default Jobs;