import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SAFE</Text>
      <Text style={styles.subtitle}>Safely Alert For Emergencies</Text>

      <View style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.activeTabText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.inactiveTabText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Username or email"
          placeholderTextColor="#999"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("/home")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 12,
    color: "#444444",
    marginBottom: 20,
  },
  card: {
    width: "85%",
    padding: 20,
    borderRadius: 1,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 19,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 0,
  },
  activeTab: {
    // borderBottomColor: "#08055E",
  },
  activeTabText: {
    width: 100,
    paddingLeft: 28,
    paddingTop: 4,
    height: 30,
    borderRadius: 15,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#08055E",
  },
  inactiveTabText: {
    color: "#888888",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#08055E",
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 20,
    color: "#333333",
  },
  forgotPassword: {
    color: "red",
    alignSelf: "flex-end",
    marginBottom: 20,
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#08055E",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignIn;
