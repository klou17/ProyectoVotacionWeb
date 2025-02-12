import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Actividad',
        }}
      />
      <Tabs.Screen
        name='concursantes'
        options={{
          title: 'Concursantes',
        }}
      />
      <Tabs.Screen
        name='ajustes'
        options={{
          title: 'Ajustes',
        }}
      />
    </Tabs>
  )
}
