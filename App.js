import { NavigationContainer } from "@react-navigation/native";
import { OrbyInitialStack } from "./src/routes";
import { Login } from "./src/pages/login";
import { News } from "./src/pages/news/news";

export default function App() {
  return (
    <NavigationContainer>
      <OrbyInitialStack />
    </NavigationContainer>
  );
}
