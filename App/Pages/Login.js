import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

export default function Login() {
  WebBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "1091481095498-itcps1dgpn2rr8nsh27cs8lk4a8gbd18.apps.googleusercontent.com",
    iosClientId: "",
    expoClientId:
      "1091481095498-0rha30lcqeji4s9q0k7saitjo6nvsc3l.apps.googleusercontent.com",
  });

  return (
    <View>
      <Image source={require("./../Assets/Images/login.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome the KoKoSpic</Text>
        <Text style={styles.loginText}>Login/Sign up</Text>
        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          <Ionicons
            name="logo-google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: Colors.white }}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
  },
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
