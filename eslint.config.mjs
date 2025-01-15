import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    stylistic: true, // enable stylistic formatting rules
    typescript: true,
    vue: true,
    jsonc: false,
    yml: false,
  }),
  ...tailwind.configs['flat/recommended'],
  {
    name: 'tailwindcss',
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
)

// export default antfu({
//   ...tailwind.configs['flat/recommended'],
//   stylistic: true, // enable stylistic formatting rules
//   typescript: true,
//   vue: true,
//   jsonc: false,
//   yml: false,
// })
