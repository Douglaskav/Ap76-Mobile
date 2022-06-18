import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: { margin: 30 },

	headerContainer: { marginTop: 90, marginBottom: 40 },

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

	footerContainer: { marginTop: 50 },

	button: {
		backgroundColor: "#2ECC71",
		padding: 20,
		width: "100%",
		height: 70,
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
		textAlign: "center"
	},

	textGreen: {
		color: "#2AF580",
		textDecorationLine: "underline"
	}
});
