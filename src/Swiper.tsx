import { useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OnboardingSlideContent } from "./content/onboardingSlide";

const { width, height } = Dimensions.get("window");

export function Swiper() {
  const [currentOnboarding, setCurrentOnboarding] = useState(0);

  function onChangeScreen(nativeEvent: NativeScrollEvent) {
    if (nativeEvent) {
      let slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != currentOnboarding) {
        setCurrentOnboarding(slide);
      }
    }
  }

  function handleNextClickOnboarding() {
    if (currentOnboarding === OnboardingSlideContent.length - 1) {
      alert("Ulitmo slide");
      return;
    }
  }


  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={({ nativeEvent }) => onChangeScreen(nativeEvent)}
        showsHorizontalScrollIndicator={false}        
        pagingEnabled
        horizontal
        bounces={false}
      >
        {OnboardingSlideContent.map((slide) => (
          <View style={styles.container} key={slide.id}>
            <View style={styles.headerContainer}>
              <Image source={slide.image} style={styles.headerImage} />
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.bodyTitle}>{slide.title}</Text>
              <Text style={styles.bodyDesc}>{slide.description}</Text>
            </View>

            <View style={styles.footerContainer}>
              <View style={styles.footerDotsContainer}>
                {OnboardingSlideContent.map((slide, index) => (
                  <View
                    key={slide.id}
                    style={
                      currentOnboarding === index
                        ? styles.footerDotActive
                        : styles.footerDot
                    }
                  />
                ))}
              </View>
              <TouchableOpacity style={styles.footerBtn} onPress={handleNextClickOnboarding}>
                <Text style={styles.footerBtnText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },

  headerContainer: {
    width,
    height: 400,
    backgroundColor: "#EAF7EF",
    justifyContent: "center",
    alignItems: "center",
  },

  headerImage: {
    width: 320,
    height: 320,
  },

  bodyContainer: {
    margin: 20,
    flex: 1,
  },

  bodyTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  bodyDesc: {
    fontSize: 14,
    textAlign: "center",
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 20
  },

  footerBtn: {
    width: 130,
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#FF902E",
  },

  footerBtnText: { fontWeight: "bold", color: "#fff", textAlign: "center" },

  footerDotsContainer: { flexDirection: "row", },

  footerDot: {
    width: 25,
    height: 6,
    backgroundColor: "#EAEAEA",
    marginRight: 8,
    borderRadius: 5,
  },
  footerDotActive: {
    width: 25,
    height: 6,
    backgroundColor: "#2AF580",
    marginRight: 8,
    borderRadius: 5,
  },
});
