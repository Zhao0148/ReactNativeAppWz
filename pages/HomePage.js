import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { styles, textStyles, buttonStyles } from "../utils/styles/styles";
import { useState } from "react";
export default function HomePage({ navigation }) {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handlePress = () => {
    setIsButtonVisible(false);
  };
  const handlePressTwo = () => {
    setIsButtonVisible(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={textStyles.h2}>Hello{"\n"}</Text>
      <Text style={textStyles.h3}>React Native</Text>
      <View>
        <View style={buttonStyles.buttonContainer}>
          <Pressable
            style={buttonStyles.button}
            onPress={() => navigation.navigate("About")}
          >
            <Text style={buttonStyles.buttonText}>{"About Page"}</Text>
          </Pressable>
          <Pressable
            style={buttonStyles.button}
            onPress={() => navigation.navigate("List")}
          >
            <Text style={buttonStyles.buttonText}>{"List Page"}</Text>
          </Pressable>
        </View>

        <StatusBar style="auto" />
      </View>
      <View styles={buttonStyles.uselessButton}>
        {isButtonVisible ? (
          <Button title={"Hi"} onPress={handlePress} />
        ) : (
          <Button title={"bye"} onPress={handlePressTwo} />
        )}
      </View>
    </SafeAreaView>
  );
}
