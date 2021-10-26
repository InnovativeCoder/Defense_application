import { Formik } from 'formik';
import { default as React } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function Login({navigation}) {
    return (
        <View style={styles.container}>
          <Text>Login</Text>
          {/* <StatusBar style="auto" /> */}
          <Formik
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
                <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                />
                <Button onPress={handleSubmit} title="Submit" />
            </View>
            )}
        </Formik>
          <Button
                title="Register?"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        margin: 10,
    }
  });

export default Login
