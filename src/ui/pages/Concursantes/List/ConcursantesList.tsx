import { persons } from '../persons'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { ConcursanteListItem } from './ConcursanteListItem'

export const ConcursantesList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={persons}
        numColumns={3}
        renderItem={({ item }) => <ConcursanteListItem persona={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
})
