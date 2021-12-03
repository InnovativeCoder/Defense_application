import axios from 'axios';
import { Formik } from 'formik';
import { default as React } from 'react';
import { Button, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import * as yup from 'yup';

function Login({navigation}) {

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
    })
    return (
        <View style={styles.container}>
          <Text>Forgot Password</Text>
          {/* <StatusBar style="auto" /> */}
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '' }}
            onSubmit={values => axios.put("https://def-sec-app.herokuapp.com/api/password/forget", {
                email: values.email,
                password: values.password,
              }).then(
                ToastAndroid.show('Reset Link sent successfully!', ToastAndroid.SHORT)
              )
            }
            >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
            }) => (
                <>
                <TextInput
                    name="email"
                    placeholder="Email Address"
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                />
                {errors.email &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                }
                <Button
                    onPress={handleSubmit}
                    title="Submit"
                    disabled={!isValid}
                />
                </>
            )}
            </Formik>
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
    },
    forgetPassButton : {
        
    }
  });

export default Login
