import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  body: {
    backgroundColor: '#FFF',
    margin: '0',
    padding: '0',
    width: '100vw',
    height: '100%'
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  a: {
    color: 'rgba(255, 175, 75, 1)',
  },
  h1: {
    color: 'white',
  },
  h2: {
    color: 'white',
  },
  h3: {
    color: 'white',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
