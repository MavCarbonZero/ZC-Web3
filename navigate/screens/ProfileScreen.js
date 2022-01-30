import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <View style={[styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column"
        }]}>
          <Text>Profile</Text>
          <View style={{ flex: 1, backgroundColor: "white" }} />

          <Text>Transfers</Text>
          <View style={{ flex: 1, backgroundColor: "#00C1B6" }} />
          <View style={{ flex: 1, backgroundColor: "white" }} />

          <Text>Settings</Text>
          <View style={{ flex: 1, backgroundColor: "white" }} />
          <View style={{ flex: 1, backgroundColor: "white" }} />
          <View style={{ flex: 1, backgroundColor: "white" }} />

        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 0,
      },
    }); 
