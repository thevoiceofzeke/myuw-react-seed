import React from 'react'
import Helmet from 'react-helmet'
import Styles from '../style'
import Header from './Header'
import { StyleSheet, css } from 'aphrodite'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// Customize material theme
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Styles.material.primary1,
    primary2Color: Styles.material.primary2,
    primary3Color: Styles.material.primary3,
    accent1Color: Styles.material.accent1,
    accent2Color: Styles.material.accent2,
    accent3Color: Styles.material.accent3,
    canvasColor: Styles.material.canvas,
    textColor: Styles.type.color,
    alternateTextColor: Styles.type.altColor
  }
})

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className={css(styles.root)}>
      <Helmet title='MyUW React Seed' titleTemplate='%s - MyUW React Seed'
        link={[
          {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500'}
        ]}
      />
      <Header />
      <div className={css(styles.content)}>
        {children}
      </div>
      <footer className={css(styles.footer)}>
        Based on <a className={css(styles.footerLink)} href='https://github.com/jaredpalmer/react-production-starter' target='_blank'>react-production-starter</a> by <a className={css(styles.footerLink)} href='http://twitter.com/jaredpalmer' target='_blank'>Jared Palmer</a>
      </footer>
    </div>
  </MuiThemeProvider>
)

const styles = StyleSheet.create({
  root: {
    color: '#000',
    fontFamily: Styles.type.sans,
    background: '#f7f7f7',
    minHeight: '100vh'
  },
  content: {
    padding: '3rem 8rem'
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    fontSize: 12
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'underline',
    ':hover': {
      opacity: 0.6
    }
  },
  small: {
    '@media (max-width: 600px)': {
      padding: '2rem'
    }
  }
})

export default App
