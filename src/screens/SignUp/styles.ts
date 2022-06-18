import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: { flex: 1, margin: 30 },
	goBackButton: { flex: 0.2, marginTop: 20 },
	formContainer: { flex: 1, marginBottom: 80 },
	headerContainer: { marginBottom: 20 },
	footerContainer: { flex: 0.4 },

	screenTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
	},

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
