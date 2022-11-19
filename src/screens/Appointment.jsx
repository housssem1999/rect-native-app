import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
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

export default function ({
    navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

    const { isDarkmode, setTheme } = useTheme();

    return (
        <Layout>
            <TopNav
                middleContent="Rendez Vous"
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

            <Section style={{ marginTop: 5 }}>
                <SectionContent>
                    <Text fontWeight="bold" style={{ textAlign: "center" }}>
                        Votre choix
                    </Text>
                    <Button
                        style={{ marginTop: 10 }}
                        text="Medecins"
                        status="info"
                        onPress={() => {
                            navigation.navigate("SecondScreen");
                        }}
                    />
                    <Button
                        text="Analyse ? "
                        onPress={() => {
                            navigation.navigate("SecondScreen");
                        }}
                        style={{
                            marginTop: 10,
                        }}
                    />
                      <Button
                        text="Radiologie..? "
                        onPress={() => {
                            navigation.navigate("SecondScreen");
                        }}
                        style={{
                            marginTop: 10,
                        }}
                    />
                 
                </SectionContent>
            </Section>
        </Layout>
    );
}
