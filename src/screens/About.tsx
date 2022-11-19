import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text, TopNav, useTheme, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({navigation}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

  const { isDarkmode, setTheme } = useTheme();

  return (
    <Layout>
      <TopNav
        middleContent="About"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{marginTop:6}}>This is the About tab</Text>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkmode ? "#17171E" : themeColor.white100,
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              height: 220,
              width: 220,
            }}
            source={require("../../assets/images/login.png")}
          />
        </View>

      </View>
    </Layout>
  );
}
