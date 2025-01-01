import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import homeIcon from "../../assets/icons/home.png";
import chatIcon from "../../assets/icons/chat.png";
import audioRecordingIcon from "../../assets/icons/audioRecording.png";
import emergencyContactIcon from "../../assets/icons/emergencyContact.png";
import menuIcon from "../../assets/icons/menu.png";

const TabIcon = ({ icon, color, name }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, { tintColor: color }]}
      />
      <Text style={[styles.iconText, { color }]}>{name}</Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#08055E",
          borderTopWidth: 1,
          borderTopColor: "pink",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={homeIcon} color={color} name="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={chatIcon} color={color} name="Chat" />
          ),
        }}
      />
      <Tabs.Screen
        name="emerencycontact"
        options={{
          title: "Emergency Contact",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={emergencyContactIcon}
              color={color}
              name="emergency"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="audiorecording"
        options={{
          title: "Audio Recording",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={audioRecordingIcon} color={color} name="record" />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={menuIcon} color={color} name="Menu" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 22,
    height: 22,
  },
  iconText: {
    fontSize: 10,
    marginTop: 2,
  },
});
