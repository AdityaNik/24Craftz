import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import ReviewMovies from "../(reviews)/reviewspage";
import UpcomingMovies from "../(reviews)/upcomingmovies";
import OttMovies from "../(reviews)/ottmovies";

const Tab = createMaterialTopTabNavigator();

const Reviews = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Reviews" component={ReviewMovies} />
            <Tab.Screen name="Upcoming" component={UpcomingMovies} />
            <Tab.Screen name="OTT Movies" component={OttMovies} />
        </Tab.Navigator>
    )
}

export default Reviews;