import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Applied from "./(applied)/applied";
import Recieved from "./(applied)/recieved";

const Tab = createMaterialTopTabNavigator()

const AppliedJobs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Applied" component={Applied}/>
            <Tab.Screen name="Applications Recieved" component={Recieved}/>
        </Tab.Navigator>
    )
}

export default AppliedJobs;