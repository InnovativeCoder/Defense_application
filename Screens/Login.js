import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Login({navigation}) {
    return (
        <View style={styles.container}>
          <Text>Login</Text>
          {/* <StatusBar style="auto" /> */}
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
  });

export default Login
