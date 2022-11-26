import React from "react";
import {
  View, Linking, Image, StyleSheet,
} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import PagerView from 'react-native-pager-view';
import {Avatar, Divider} from '@rneui/themed';

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Home"
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
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center"
        }}
      >
          <div
              style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%"
          }}>
              <div>
                <Avatar
                    size={130}
                    rounded
                    title="Rd"
                    containerStyle={{ backgroundColor: "blue" }}
                    onPress={() => navigation.navigate('Profile')}
                />
                <Text> Avatar 1</Text>
              </div>
              <div>
                  <Avatar
                      size={130}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue" }}
                  />
                  <Text> Avatar 1</Text>
              </div>
              <div>
                  <Avatar
                      size={130}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue" }}
                  />
                  <Text> Avatar 1</Text>
              </div>
          </div>
          <div
              style={{ width: "70vh", margin:"auto" }}>
              <Divider
                  color="black"
                  width={1}
                  orientation="horizontal"
              />
          </div>
          <div
              style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%"
              }}>
              <div>
                  <Avatar
                      size={130}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue" }}
                  />
                  <Text> Avatar 1</Text>
              </div>
              <div>
                  <Avatar
                      size={130}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue" }}
                  />
                  <Text> Avatar 1</Text>
              </div>
              <div >
                  <Avatar
                      size={130}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue" }}
                  />
                  <Text> Avatar 1</Text>
              </div>
          </div>
          <div
              style={{ width: "70vh", margin:"auto" }}>
              <Divider
                  color="black"
                  width={1}
                  orientation="horizontal"
              />
          </div>
          <div
              style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%"
              }}>
              <div>
                  <Avatar
                      size={130}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue" }}
                  />
                  <Text> Avatar 1</Text>
              </div>
              <div>
                  <Avatar
                      size={130}
                      rounded
                      title="Rd"
                      containerStyle={{ backgroundColor: "blue" }}
                  />
                  <Text> Avatar 1</Text>
              </div>
          </div>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
