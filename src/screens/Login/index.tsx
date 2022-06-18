import { View, Text, TouchableOpacity } from "react-native";
import { InputField } from "../../components/InputField";
import { styles } from "./styles";

export const Login = () => {
	return (
		<View>
			<View style={styles.container}>
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

				<View style={styles.footerContainer}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.textButton}>Log In</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.createAccountBtnText}>
							Do you not have an account yet?
							<Text style={styles.textGreen}> Create a one</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
