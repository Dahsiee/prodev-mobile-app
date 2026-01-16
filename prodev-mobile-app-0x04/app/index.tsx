import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
      {/* Logo */}
      <View style={styles.container}>
        <Image source={HEROLOGO} />
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome</Text>
        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>Choose an option below</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonGroup} onPress={() => router.push("/signin")}>
          <Text style={styles.buttonPrimaryText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/join")}>
          <Text style={styles.buttonSecondaryText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
