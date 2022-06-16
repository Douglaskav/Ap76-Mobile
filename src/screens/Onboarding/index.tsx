import { useState } from "react";
import {
  Image,
  NativeScrollEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OnboardingSlideContent } from "../../content/onboardingSlide";

import { styles } from "./styles";

export function Onboarding({ navigation }) {
  const [currentOnboarding, setCurrentOnboarding] = useState(0);

  function handleLastSlide() {
    navigation.navigate("Home");
    return;
  }

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
      handleLastSlide();
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
              <TouchableOpacity
                style={styles.footerBtn}
                onPress={handleNextClickOnboarding}
              >
                <Text style={styles.footerBtnText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
