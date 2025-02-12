import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { ConcursantePage } from './Concursante'
import { persons } from './persons'

export const ConcursantesPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={persons}
        numColumns={3}
        renderItem={({ item }) => <ConcursantePage persona={item} />}
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
