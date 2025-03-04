import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { IconType } from '@/assets/icons/IconType'

export const SocialMediaIcons = ({ social }: { social: { facebook: string; twitter: string; instagram: string } }) => {
  const socialLinks = [
    { name: 'facebook', url: social.facebook, icon: IconType.facebook },
    { name: 'twitter', url: social.twitter, icon: IconType.twitter },
    { name: 'instagram', url: social.instagram, icon: IconType.instagram },
  ]

  return (
    <View style={styles.socialContainer}>
      {socialLinks.map(({ name, url, icon }) => (
        <TouchableOpacity key={name} onPress={() => console.log(`Opening ${name}: ${url}`)}>
          <Image source={icon} style={styles.socialIcon} />
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
