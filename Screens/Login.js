import { Formik } from 'formik';
import { default as React } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as yup from 'yup';

function Login({navigation}) {

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: yup
            .string()
            // .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })
    return (
        <View style={styles.container}>
          <Text>Login</Text>
          {/* <StatusBar style="auto" /> */}
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
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
                <TextInput
                    name="password"
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                />
                {errors.password &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                }
                <Button
                    onPress={handleSubmit}
                    title="LOGIN"
                    disabled={!isValid}
                />
                </>
            )}
            </Formik>
          <Button
                title="Register?"
                onPress={() => navigation.navigate('SignUp')}
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

export default Login
