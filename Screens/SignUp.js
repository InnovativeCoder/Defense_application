import { default as React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SignUp() {
    return (
        <View style={styles.container}>
          <Text>Register a new account</Text>
          {/* <StatusBar style="auto" /> */}
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

export default SignUp

