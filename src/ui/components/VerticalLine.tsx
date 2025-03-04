import { StyleSheet, View } from 'react-native'

export const VerticalLine = () => {
  return <View style={styles.verticleLine}></View>
}

const styles = StyleSheet.create({
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
})
