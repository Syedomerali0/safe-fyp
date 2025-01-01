import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idCard, setIdCard] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle Sign Up button
  const handleSignUp = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("ID Card:", idCard);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SAFE</Text>
      <Text style={styles.subtitle}>Safely Alert For Emergencies</Text>

      <View style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate("signin")}
          >
            <Text style={styles.inactiveTabText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.activeTabText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#999"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#999"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="ID Card"
          placeholderTextColor="#999"
          value={idCard}
          onChangeText={(text) => setIdCard(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
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
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tabContainer: {
    flexDirection: "row",
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
    color: "#08055E",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#08055E",
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 20,
    color: "#333333",
  },
  signUpButton: {
    backgroundColor: "#08055E",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  signUpButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default SignUp;
