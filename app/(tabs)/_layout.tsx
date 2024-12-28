import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color }) => <Entypo size={28} name="trophy" color={color} />,
        }}
      />

      <Tabs.Screen
        name="reviews"
        options={{
          title: "Reviews",
          tabBarIcon: ({ color }) => <Entypo size={28} name="mask" color={color} />,
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="notifications" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <AntDesign size={28} name="profile" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default Layout;
