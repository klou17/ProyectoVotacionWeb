import { color } from '../styles/color'
import { fonts, fontSize } from '../styles/fonts'
import { StyleSheet, TextInput as TextInputReactNative } from 'react-native'

interface Props {
  placeholder: string
  isSecureEntry?: boolean
  size?: keyof typeof fontSize
  fontFamily?: keyof typeof fonts
  color?: keyof typeof color
}
export const TextInput = ({
  placeholder,
  isSecureEntry,
  size = 'sm',
  fontFamily = 'LatoRegular',
  color = 'black',
}: Props) => {
  return (
    <TextInputReactNative
      style={[
        {
          color: color,
          fontSize: fontSize[size],
          fontFamily: fonts[fontFamily],
        },
        styles.input,
      ]}
      placeholder={placeholder}
      secureTextEntry={isSecureEntry}
      placeholderTextColor='#b0b0b0'
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
  },
})
