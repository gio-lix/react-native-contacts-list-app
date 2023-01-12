import {Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import styles from "./styles"
import colors from "../../../assets/theme/colors";
const CustomButton = ({title, handlePress, loading, secondary, primary, danger, disabled}) => {

  const getBackground = () => {
    if (disabled) {
      return colors.gray;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.buttonContainer, {backgroundColor: getBackground()}]}
    >
      <View style={styles.loadingSection}>
        {loading ? <ActivityIndicator color={colors.primary}/> : null}
        {title ? <Text style={{
          color: disabled ? "black" : "white",
          paddingLeft: loading ? 5 : 0,
        }}>{title}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
