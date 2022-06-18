import { View, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { InputField } from "../../components/InputField";
import { styles } from "./styles";

import { Feather } from "@expo/vector-icons";

export const SignUp = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("ButtonsScreen")}
				style={styles.goBackButton}
			>
				<Feather name="chevron-left" size={24} color="#333" />
			</TouchableOpacity>

			<KeyboardAvoidingView style={styles.formContainer} behavior={Platform.OS === "ios" ? "padding" : "height"} >
				<View style={styles.headerContainer}>
					<Text style={styles.screenTitle}>Create a new account</Text>
					<Text style={styles.screenTitle}>for you</Text>
				</View>

				<InputField type="email" label="Email" placeholder="example@mail.com" />
				<InputField
					type="name"
					label="Username"
					placeholder="João Gabriel Pires"
				/>
				<InputField
					type="password"
					label="Password"
					placeholder="**************"
					password={true}
				/>
				<InputField
					type="password"
					label="Repeat Password"
					placeholder="**************"
					password={true}
				/>
			</KeyboardAvoidingView>

			<View style={styles.footerContainer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textButton}>Sign Up</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style={styles.createAccountBtnText}>
Do you already have an account ? 
						<Text style={styles.textGreen}>Login</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
