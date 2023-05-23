import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../../screens/index";
import { COLORS } from "../../constants/index";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Rubik-Bold",
        }
      }}
    >
      
      <Stack.Screen 
        name="Search"
        component={Search}
      />

    </Stack.Navigator>
  )
}
export default SearchNavigator