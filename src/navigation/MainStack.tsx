import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SecondScreen from "../screens/SecondScreen";
import MainTabs from "./MainTabs";
import RendezVousMed from "../screens/RendezVousMed";
import RendezVousAna from "../screens/RendezVousAna";
import RendezVousRad from "../screens/RendezVousRad";
import PasserRendezVous from "../screens/PasserRendezVous";
import Medecins from "../screens/Medecins";
import MedecinInfo from "../screens/MedecinInfo";
import Analyses from "../screens/Analyses";
import AnalyseInfo from "../screens/AnalyseInfo";
import RadioInfo from "../screens/RadioInfo";
import Radios from "../screens/Radios";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="RendezVousMed" component={RendezVousMed} />
      <MainStack.Screen name="RendezVousAna" component={RendezVousAna} />
      <MainStack.Screen name="RendezVousRad" component={RendezVousRad} />
      <MainStack.Screen name="PasserRendezVous" component={PasserRendezVous} />
      <MainStack.Screen name="Medecins" component={Medecins} />
      <MainStack.Screen name="MedecinInfo" component={MedecinInfo}  />
      <MainStack.Screen name="Analyses" component={Analyses}  />
      <MainStack.Screen name="AnalyseInfo" component={AnalyseInfo} />
      <MainStack.Screen name="Radios" component={Radios} />
      <MainStack.Screen name="RadioInfo" component={RadioInfo} />
    </MainStack.Navigator>
  );
};

export default Main;
