import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/colors";
import {
  useFonts,
  Jaldi_400Regular,
  Jaldi_700Bold,
} from "@expo-google-fonts/jaldi";
import { Home } from "../home";

export function News({ navigation }) {
  let [fontsLoaded] = useFonts({ Jaldi_400Regular, Jaldi_700Bold });

  if (!fontsLoaded) {
    return <Home />;
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.outlined_button}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginEnd: 10,
    alignSelf: "flex-end",
  },
  outlined_button: {
    color: COLORS.primary,
    FontFace: "Jaldi_700Bold",
    fontSize: 20,
    fontWeight: "400",
  },
});
