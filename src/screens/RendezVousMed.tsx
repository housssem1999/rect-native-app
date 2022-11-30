import React from "react";
import { FlatList, StyleSheet, View, Image } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  Button,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from 'react-native-paper';

const persons = [ /* list of person data from earlier */
  { 
    name: "Médecin 1",
    desc: "Médecin 1 desc", 
    id: 1 
  }, 
  { 
    name: "Médecin 2", 
    desc: "Médecin 2 desc", 
    id: 2 
  },
  { 
    name: "Médecin 3", 
    desc: "Médecin 3 desc", 
    id: 2 
  },
  { 
    name: "Médecin 4",
    desc: "Médecin 4 desc",  
    id: 2 
  },
  { 
    name: "Médecin 5", 
    desc: "Médecin 5 desc", 
    id: 2 
  }
];

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "RendezVous">) {
  const { isDarkmode, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Layout>
      <TopNav
        middleContent="Rendez-Vous Médical"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
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
      <SafeAreaView style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={(text)=>setSearchQuery(text)}
          value={searchQuery}
        />  
      </SafeAreaView>
      <view>
      {persons.filter(
              (el) =>
                el.name.toUpperCase().includes(searchQuery.toUpperCase().trim())
            ).map(item =>{
       
          return(
            <View style={styles.itemContainer} key={item.id}>
              <Image
                source={require("../../assets/logo.png")}
                style={styles.image}
              />
              <View>
                <Text style={{ fontWeight: "bold", paddingBottom: "10px" }}>{item.name}</Text>
                <Text style={{ color: "grey" }}>{item.desc}</Text>
              </View>          
              <div style={{width: "100px", margin: "auto"}}>
              <Button 
                style={styles.btn}
                text="Rendez-Vous"
                size="lg"
                onPress={() => {
                  navigation.navigate("PasserRendezVous");
                }}
              />
              </div>
            </View>
          )
      })
         }
      </view>
    </Layout>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  Searchbar:{
    marginTop:5
  },
  itemContainer: {
    display: "flex",
    flexDirection: 'row',
    margin: "10px",
    alignItems: "center",
    borderColor: "#ccc",
    backgroundColor: "#fff",
    height: 110,
    width: 350,

  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    color: "#666",
  },
  btn: {
    backgroundColor: "#FFC107",
    color: "#ffffff",
    margin: "auto",
    width: "100%",
    alignContent: "center",

  }
});

