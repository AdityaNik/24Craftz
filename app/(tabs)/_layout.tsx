import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Job",
          tabBarIcon: ({ color }) => <Entypo size={28} name="trophy" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Reviews"
        options={{
          title: "Review",
          tabBarIcon: ({ color }) => <Entypo size={28} name="mask" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="notifications" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <AntDesign size={28} name="profile" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default Layout;
