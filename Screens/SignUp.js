import axios from "axios";
import { Field, Formik } from 'formik';
import { default as React } from 'react';
import { Button, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import * as yup from 'yup';
import CustomInput from '../components/customInput';


function SignUp({navigation}) {

    const signUpValidationSchema = yup.object().shape({
        fullName: yup
          .string()
          .matches(/(\w.+\s).+/, 'Enter at least 2 names')
          .required('Full name is required'),
        phoneNumber: yup
          .string()
          .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
          .required('Phone number is required'),
        email: yup
          .string()
          .email("Please enter valid email")
          .required('Email is required'),
        password: yup
          .string()
          .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
          .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
          .matches(/\d/, "Password must have a number")
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
          .min(8, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Passwords do not match')
          .required('Confirm password is required'),
      })
      
    return (
        <View style={styles.container}>
          <Text>Register</Text>
          {/* <StatusBar style="auto" /> */}
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              password: '',
              confirmPassword: '',
            }}
            // onSubmit={values => console.log(values)}
            onSubmit={
              values => axios.post("https://def-sec-app.herokuapp.com/api/register", {
              name: values.name,
              email: values.email,
              password: values.password,
            }).then(
              ToastAndroid.show('Registered successfully!', ToastAndroid.SHORT)
            )
          }
          >
            {({ handleSubmit, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="fullName"
                  placeholder="Full Name"
                />
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                />
                <Field
                  component={CustomInput}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry
                />

                <Button
                  onPress={handleSubmit}
                  title="SIGN UP"
                  // disabled={!isValid}
                />
              </>
            )}
          </Formik>
          <Button
                title="Already Registed?"
                onPress={() => navigation.navigate('Login')}
                style={styles.registerButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        margin: 10,
        padding: 0,
    },
    registerButton: {
        margin: 10,
        color: '#000',
        backgroundColor: '#fff',
    }
  });

export default SignUp
