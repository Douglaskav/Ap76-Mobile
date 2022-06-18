import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	bodyContainer: {
		flex: 1,
		padding: 30,
		alignItems: "center"
	},

	logoContainer: {
		flex: 0.95
	},

	contentTitle: {
		color: "#FFFFFF",
		fontSize: 28,
		fontWeight: "bold",
		marginLeft: 10,
		marginRight: 10
	},

	buttonsContainer: {
		width: "100%",
		flexDirection: "row",
	},

	button: {
		flexGrow: 1,
		padding: 20,
		margin: 10,
		borderRadius: 5
	},

	buttonText: {
		color: "#fff",
		textAlign: "center",
		fontWeight: "bold"
	}
});
