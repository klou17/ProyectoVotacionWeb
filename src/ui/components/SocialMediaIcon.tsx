import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export const SocialMediaIcons = ({ social }: { social: { facebook: string; twitter: string; instagram: string } }) => {
  const icons = [
    { name: 'facebook', url: social.facebook, icon: 'https://cdn-icons-png.flaticon.com/512/145/145802.png' },
    { name: 'twitter', url: social.twitter, icon: 'https://cdn-icons-png.flaticon.com/512/145/145812.png' },
    { name: 'instagram', url: social.instagram, icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' },
  ]

  return (
    <View style={styles.socialContainer}>
      {icons.map(({ name, url, icon }) => (
        <TouchableOpacity key={name} onPress={() => console.log(`Opening ${name}: ${url}`)}>
          <Image source={{ uri: icon }} style={styles.socialIcon} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  socialIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
})
