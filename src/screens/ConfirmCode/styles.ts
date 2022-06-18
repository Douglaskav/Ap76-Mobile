import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: { flex: 1, margin: 30 },
	goBackButton: { flex: 0.2, marginTop: 20 },

	screenTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 30,
	},

	formContainer: {
		flex: 0.6
	},

	inputContainer: {
		width: 42,
		height: 42,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#AAAAAA",
		margin: 5,
	},

	input: {
		textAlign: "center",
		fontSize: 24,
		fontWeight: "600",
		color: "#333",
	},

	inputRow: {
		flexDirection: "row",
	},

	footerContainer: { flex: 0.4 },

	forgotLink: {
		fontSize: 12,
		color: "#2ECC71",
		marginTop: 10,
		textDecorationLine: "underline",
	},

	button: {
		justifyContent: "center",
		backgroundColor: "#2ECC71",
		width: "100%",
		height: 60,
		borderRadius: 5,
	},

	textButton: {
		color: "#fff",
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",
	},

	createAccountBtnText: {
		marginTop: 10,
		fontSize: 12,
		textAlign: "center",
	},

	textGreen: {
		color: "#2AF580",
		textDecorationLine: "underline",
	},
});
