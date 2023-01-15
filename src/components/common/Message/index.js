import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from "../../../assets/theme/colors";
import { useState } from "react";

const Message = ({ message, retry, onDismiss, retryFn, info, success, primary, danger }) => {
  const [userDismissed, setUserDismissed] = useState(false);
  const getBackground = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };
  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.messageContainer, { backgroundColor: getBackground() }]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: colors.white }}>
              {message}
            </Text>
            {retry ? !typeof onDismiss === "function" && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{ color: "white" }}>retry</Text>
              </TouchableOpacity>
            ) : null}
            {typeof onDismiss === "function" &&
              <TouchableOpacity onPress={() => {
                setUserDismissed(true);
                onDismiss();
              }}>
                <Text style={{ color: "white" }}>X</Text>
              </TouchableOpacity>
            }
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
