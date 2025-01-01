import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ReviewMovies from "../(reviewspages)/reviewspage";
import UpcomingMovies from "../(reviewspages)/upcomingmovies";
import OttMovies from "../(reviewspages)/ottmovies";

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