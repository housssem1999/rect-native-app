import React from "react";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text, TopNav, useTheme, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import { Button } from "react-native-paper";

export default function ({navigation}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

  const { isDarkmode, setTheme } = useTheme();
  const [searchPhrase, setSearchPhrase ] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  const [mapsBtn, setMapsBtn] = useState(false);

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
      <TopNav
        leftContent={
          <Button
            onPress={()=> {setSearchBtn(true); setMapsBtn(false)}}
            >
              Chercher
            </Button>
        
        }
        rightContent={
          <Button
            onPress={()=> {setMapsBtn(true); setSearchBtn(false)}}
            >
              Maps
            </Button>
        
        }
      />
      {searchBtn &&
        <TopNav
          middleContent={
            <SearchBar
            clicked={clicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            setCLicked={setClicked}
          />
        }
        />
      }

        

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

        </View>

      </View>
    </Layout>
  );
}
