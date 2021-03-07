import { StatusBar } from "expo-status-bar";
import { Formik, useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
 
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5,'Too Short!').required('Required')
});
export default function App() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, }) => {
          const reTouchedEmail = touched.email ? styles.inputBoxActive : styles.inputBoxInActive;
          
          return (
            <>
              <View style={[styles.inputBox, reTouchedEmail ]}>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="UserName"
                  value={values.email}
                  name="email"
                />
              </View>
              {errors.email ?
                <View>
                  <Text style={styles.errorField}>{ errors.email}</Text>
                </View> : null}
              <View style={[styles.inputBox, touched.password ? styles.inputBoxActive : styles.inputBoxInActive]}>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                  placeholder="Password"
                  name="password"
                />
              </View>
              {errors.password?
                <View>
                  <Text style={styles.errorField}>{ errors.password}</Text>
                </View> : null}
              <View style={styles.signUpButtonBox}>
                <TouchableWithoutFeedback onPress={handleSubmit}>
                  <View style={styles.signUpButton}>
                    <Text>SignUp</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </>
          )
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  errorField: {
    // borderColor: 'red',
    color: 'red'

  },
  inputBox: {
    borderWidth: StyleSheet.hairlineWidth,
    // borderColor: "#000000",
    width: wWidth - 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  inputBoxInActive: {
    borderColor: '#000000',
  },
  inputBoxActive: {
    borderColor: 'cyan'
  },
  signUpButtonBox: {
    marginVertical: 10,
  },
  signUpButton: {
    backgroundColor: "cyan",
    width: wWidth - 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
