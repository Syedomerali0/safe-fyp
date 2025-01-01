import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SafeComponent = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const saveContact = () => {
    // Add your save logic here
    console.log({ name, contactNumber, password });
  };
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
            source={require("../../assets/icons/home.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyButtonText}>Emergency Contact</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          keyboardType="phone-pad"
          value={contactNumber}
          onChangeText={setContactNumber}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="gray"
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={saveContact}>
        <Text style={styles.saveButtonText}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  topIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
  emergencyButton: {
    backgroundColor: "#001c55",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },
  emergencyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 20,
    width: "90%",
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#08055E",
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 20,
    color: "#333333",
  },
  // passwordContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },

  saveButton: {
    backgroundColor: "#08055E",
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
    width: 200,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SafeComponent;
