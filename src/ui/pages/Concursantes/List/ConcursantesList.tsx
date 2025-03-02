import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { injectModule } from '@/src/di/injectModule'
import { ConcursanteListItem } from './ConcursanteListItem'

export const ConcursantesList = () => {
  const candidates = injectModule('getAllCandidates')()

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={candidates}
        numColumns={3}
        renderItem={({ item }) => <ConcursanteListItem candidate={item} />}
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
