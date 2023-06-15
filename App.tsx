import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import Toast from "react-native-toast-message";

function App(): JSX.Element {
  return (
      <>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
        <Toast />

      </>
  );
}

export default App;
