import { Button, StyleSheet, TextInput, View } from 'react-native'

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Full Name' placeholderTextColor='#b0b0b0' />
      <TextInput style={styles.input} placeholder='Username' placeholderTextColor='#b0b0b0' />
      <TextInput style={styles.input} placeholder='Email Address' placeholderTextColor='#b0b0b0' />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry placeholderTextColor='#b0b0b0' />
      <TextInput style={styles.input} placeholder='Verify Password' secureTextEntry placeholderTextColor='#b0b0b0' />
      <Button title='Submit' color='#3498db' onPress={() => alert('Sign Up Submitted')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
})
