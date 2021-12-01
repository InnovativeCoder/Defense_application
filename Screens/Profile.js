import { default as React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Profile({navigation}) {

    return (
        <View style={styles.container}>
          <Text>HI</Text>
            {/* TODO - Fetch email and display */}
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

export default Profile
