import { Button, StyleSheet, TextInput, View } from 'react-native'

export const Login = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Email Address' placeholderTextColor='#b0b0b0' />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry placeholderTextColor='#b0b0b0' />
      <Button title='Submit' color='#3498db' onPress={() => alert('Sign In Submitted')} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
})
