import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./app/navigation/StackNavigation";
import { Provider as ReduxProvider } from "react-redux";
import store from "./app/redux/store";

export default function App() {


  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ReduxProvider>

  );
}

