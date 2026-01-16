import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/_joinstyle";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Access your account</Text>
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
      </View>

      {/* Forgot Password */}
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/join")}>
          <Text style={styles.signupSubTitleText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
