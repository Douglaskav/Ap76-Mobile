import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
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
    marginTop: 12,
    fontSize: 14,
    textAlign: "center",
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 20,
  },

  footerBtn: {
    width: 130,
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#FF902E",
  },

  footerBtnText: { fontWeight: "bold", color: "#fff", textAlign: "center" },

  footerDotsContainer: { flexDirection: "row" },

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
