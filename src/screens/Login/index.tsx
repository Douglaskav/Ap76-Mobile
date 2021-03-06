import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import { InputField } from "../../components/InputField";
import { styles } from "./styles";

import { Feather } from "@expo/vector-icons";

export const Login = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("ButtonsScreen")}
				style={styles.goBackButton}
			>
				<Feather name="chevron-left" size={24} color="#333" />
			</TouchableOpacity>

			<KeyboardAvoidingView
				style={styles.formContainer}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.headerContainer}>
					<Text style={styles.screenTitle}>Welcome back,</Text>
					<Text style={styles.screenTitle}>Login on your account</Text>
				</View>

				<InputField type="email" label="Email" placeholder="example@mail.com" />
				<InputField
					type="password"
					label="Password"
					placeholder="**************"
					password={true}
				/>
				<TouchableOpacity>
					<Text style={styles.forgotLink}>I forgot my password</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>

			<View style={styles.footerContainer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textButton}>Log In</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
					<Text style={styles.createAccountBtnText}>
						Do you not have an account yet?
						<Text style={styles.textGreen}>Create a one</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
