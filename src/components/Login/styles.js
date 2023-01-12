import {StyleSheet} from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  imageLogo: {
    height: 70,
    width: 70,
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 20,
    fontWeight: "500",
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: "row",

  },
  infoText: {
    fontSize: 17,
  },
  btnLink: {
    paddingLeft: 27,
    color: colors.primary,
    fontSize: 16,
  },
});
