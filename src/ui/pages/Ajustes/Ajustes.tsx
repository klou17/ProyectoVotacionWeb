import { StyleSheet, Text, View } from 'react-native'

export const AjustesPage = () => {
  return (
    <View style={styles.container}>
      <Text>Tab ajustes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
