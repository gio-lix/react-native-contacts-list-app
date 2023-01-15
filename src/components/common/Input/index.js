import { TextInput, View, Text } from "react-native";
import styles from "./styles";
import colors from "../../../assets/theme/colors";
import { useState } from "react";

const Input = ({ errors, icon, label, value, onChangeText, style, placeHolder, ...props }) => {
  const [focused, setFocused] = useState(false);
  const getBorderColor = () => {
    if (errors) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    } else {
      return colors.gray;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label ? <Text>{label}</Text> : null}
      <View style={[styles.wrapper, { borderColor: getBorderColor() }]}>
        <View>{icon ? icon : null}</View>
        <TextInput
          style={[styles.textInput, { ...style }]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeHolder}
          {...props}
        />
      </View>
      {errors ? <Text style={styles.error}>{errors}</Text> : null}
    </View>
  );
};

export default Input;
