import { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

export const ConfirmCode = ({ navigation }) => {
	let arr = [];

	let pad1ref = useRef(null);
	let pad2ref = useRef(null);
	let pad3ref = useRef(null);
	let pad4ref = useRef(null);
	let pad5ref = useRef(null);
	let pad6ref = useRef(null);

	function onPinInputChange(value, index, nextInputRef) {
		if (nextInputRef === null) {
			alert("Finished");
			return;
		}

		arr[index] = value;
		if (arr[index]) nextInputRef.current.focus();
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("SignUp")}
				style={styles.goBackButton}
			>
				<Feather name="chevron-left" size={24} color="#333" />
			</TouchableOpacity>

			<View style={styles.formContainer}>
				<View style={styles.headerContainer}>
					<Text style={styles.screenTitle}>
						Put on the field the code email
					</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
					}}
				>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							keyboardType={"number-pad"}
							maxLength={1}
							ref={pad1ref}
							onChangeText={(value) => onPinInputChange(value, 0, pad2ref)}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							keyboardType={"number-pad"}
							maxLength={1}
							ref={pad2ref}
							onChangeText={(value) => onPinInputChange(value, 1, pad3ref)}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							keyboardType={"number-pad"}
							maxLength={1}
							ref={pad3ref}
							onChangeText={(value) => onPinInputChange(value, 2, pad4ref)}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							keyboardType={"number-pad"}
							maxLength={1}
							ref={pad4ref}
							onChangeText={(value) => onPinInputChange(value, 3, pad5ref)}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							keyboardType={"number-pad"}
							maxLength={1}
							ref={pad5ref}
							onChangeText={(value) => onPinInputChange(value, 4, pad6ref)}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							keyboardType={"number-pad"}
							maxLength={1}
							ref={pad6ref}
							onChangeText={(value) => onPinInputChange(value, 5, null)}
						/>
					</View>
				</View>
			</View>
			<View style={styles.footerContainer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textButton}>Confirm</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text style={styles.createAccountBtnText}>
						Do you not received the email ?
						<Text style={styles.textGreen}>Send again</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
