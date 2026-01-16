import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/_joinstyle";

export default function JoinScreen() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create your account</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter your password"
          secureTextEntry
        />

        <Text style={styles.formLabel}>Confirm Password</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Confirm your password"
          secureTextEntry
        />
      </View>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text style={styles.signupSubTitleText}>Sign In</Text>
      </View>
    </View>
  );
}
