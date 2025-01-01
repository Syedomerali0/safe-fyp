import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Top Icons */}
      <View style={styles.topIconsContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/audioRecording.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.logoText}>
          SAFE
          <Text style={styles.subText}>{"\n"}Safety Alert For Emergencies</Text>
        </Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/home.png")} // Replace with your settings icon path
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Panic Button */}
      <TouchableOpacity style={styles.panicButton}>
        <Text style={styles.panicText}>Panic</Text>
      </TouchableOpacity>

      {/* Track Me Button */}
      <TouchableOpacity style={styles.trackMeButton}>
        <Text style={styles.trackMeText}>Track Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topIconsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subText: {
    fontSize: 10,
    color: "#888888",
    textAlign: "center",
  },
  panicButton: {
    backgroundColor: "#FF0000",
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  panicText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  trackMeButton: {
    backgroundColor: "#FF0000",
    width: "80%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  trackMeText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
