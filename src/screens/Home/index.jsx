import { LinearGradient } from "expo-linear-gradient";
import {
	View,
	ImageBackground,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";

import BgImage from "../../assets/bg_buttons_screen.jpg";
import Logo from "../../assets/LogoWhite.png";

import { styles } from "./styles";

export const Home = () => {
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground source={BgImage} resizeMode="cover" style={{ flex: 1 }}>
				<LinearGradient
					colors={["transparent", "#111"]}
					style={styles.bodyContainer}
				>
					<View style={styles.logoContainer}>
						<Image source={Logo} />
					</View>

					<View style={styles.contentContainer}>
						<Text style={styles.contentTitle}>
							Login or register to continue
						</Text>
						<View style={styles.buttonsContainer}>
							<TouchableOpacity
								style={[styles.button, { backgroundColor: "#2ECC71" }]}
							>
								<Text style={styles.buttonText}>Fazer Login</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[styles.button, { backgroundColor: "#E67E22" }]}
							>
								<Text style={styles.buttonText}>Criar Conta</Text>
							</TouchableOpacity>
						</View>
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};
