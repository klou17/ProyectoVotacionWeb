import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { color } from '@/src/ui/styles/color'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color.blueDarker,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          height: 60,
          paddingBottom: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 4,
        },
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Actividad',
          tabBarIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name='concursantes'
        options={{
          title: 'Concursantes',
          tabBarIcon: ({ color, size }) => <Ionicons name='people' size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name='ajustes'
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color, size }) => <Ionicons name='settings' size={size} color={color} />,
        }}
      />
    </Tabs>
  )
}
