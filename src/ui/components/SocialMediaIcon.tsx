/* eslint-disable @typescript-eslint/no-require-imports */
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

const icons = {
  facebook: require('@/assets/icons/facebook.png'),
  twitter: require('@/assets/icons/instagram.png'),
  instagram: require('@/assets/icons/twiter.png'),
}

export const SocialMediaIcons = ({ social }: { social: { facebook: string; twitter: string; instagram: string } }) => {
  const socialLinks = [
    { name: 'facebook', url: social.facebook, icon: icons.facebook },
    { name: 'twitter', url: social.twitter, icon: icons.twitter },
    { name: 'instagram', url: social.instagram, icon: icons.instagram },
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
