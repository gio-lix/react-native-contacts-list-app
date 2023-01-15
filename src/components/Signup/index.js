import { Image, Text, TouchableOpacity, View } from "react-native";
import Container from "../common/Container";
import styles from "../Login/styles";
import Input from "../common/Input";
import CustomButton from "../common/Button";
import { ROUTES } from "../../constants";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUpComponent = ({form,onSubmit,onChange,errors, error, loading}) => {
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
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeHolder="Enter Username"
            errors={errors.username }
            value={form.username}
            onChangeText={(text) => onChange({name: "username", value: text})}
          />
          <Input
            label="First Name"
            placeHolder="Enter First Name"
            errors={errors.firstname}
            value={form.firstname}
            onChangeText={(text) => onChange({name: "firstname", value: text})}
          />
          <Input
            label="Last Name"
            placeHolder="Enter Last Name"
            errors={errors.lastname}
            onChangeText={(text) => onChange({name: "lastname", value: text})}
          />
          <Input
            label="Email"
            placeHolder="Enter Email"
            errors={errors.email}
            value={form.email}
            onChangeText={(text) => onChange({name: "email", value: text})}
          />
          <Input
            icon={<Text>Show</Text>}
            placeHolder="Enter Password"
            label="Password"
            secureTextEntry={true}
            errors={errors.password}
            value={form.password}
            onChangeText={(text) => onChange({name: "password", value: text})}
          />

          <CustomButton
            loading={loading}
            disabled={loading}
            title="Submit"
            primary
            handlePress={onSubmit}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigate(ROUTES.LOGIN)}
            >
              <Text style={styles.btnLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignUpComponent;
