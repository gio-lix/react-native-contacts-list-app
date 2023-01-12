import React, { useState } from "react";
import styles from "./styles";
import { Text, Image, View, TouchableOpacity } from "react-native";
import Input from "../common/Input";
import CustomButton from "../common/Button";
import Container from "../common/Container";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants";

const LoginComponents = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={50} width={50}
        source={require("../../assets/images/logo-2.png")}
        style={styles.imageLogo}
      />
      <View>
        <Text style={styles.title}>Welcome to you user.</Text>
        <Text style={styles.subTitle}>Please Login.</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeHolder="Enter Username"
          />
          <Input
            icon={<Text>Show</Text>}
            placeHolder="Enter Password"
            label="Password"
            secureTextEntry={true}
          />
          <CustomButton
            title="Submit"
            primary
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => navigate(ROUTES.REGISTER)}
            >
              <Text style={styles.btnLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponents;

