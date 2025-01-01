import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

const frontImage1 = require("../assets/images/Front.png"); // Replace with your image path

const index = () => {
  return (
    <SafeAreaView style={styles.primaryColor}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.text}>SAFE</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={frontImage1}
            style={styles.smallImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>
          Safety Alert for {"\n"}
          <Text style={styles.highlightedText}>Emergency</Text>
        </Text>

        <Text style={styles.subtitle}>
          Empowering safety at your fingertips—stay protected, stay connected
          with our reliable safety app
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("signin")}
        >
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  primaryColor: {
    backgroundColor: "#08055E",
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bolder",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 5,
  },
  smallImage: {
    width: 300,
    height: 300,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
  },
  highlightedText: {
    color: "red",
  },
  subtitle: {
    fontSize: 14,
    color: "#E0E0E0",
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
