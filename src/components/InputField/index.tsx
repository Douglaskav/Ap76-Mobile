import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export const InputField = ({ type, label, placeholder, password }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{label}</Text>

			<TextInput
				style={[styles.input, { borderColor: isActive ? "#2ECC71" : "#ccc" }]}
				placeholder={placeholder}
				onFocus={() => setIsActive(true)}
				onBlur={() => setIsActive(false)}
				secureTextEntry={password}

			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: { marginTop: 30 },

	label: {
		color: "#333",
		fontSize: 18,
		fontWeight: "600",
	},
	input: {
		borderBottomWidth: 1,
		paddingBottom: 5,
	},
});
