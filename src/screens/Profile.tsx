import React from "react";
import { View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text, TopNav, useTheme, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { Button, ButtonGroup, withTheme } from '@rneui/themed';

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

  const { isDarkmode, setTheme } = useTheme();

  return (
    <Layout>
      <TopNav
        middleContent="Profile"
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
          backgroundColor: "#FFFF"
        }}
      >
         <Button
              title={'React Native Elements'}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
        <Text>This is the Profile tab</Text>
      </View>
    </Layout>
  );
}


