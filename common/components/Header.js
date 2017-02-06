import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'

const Header = ({ titleLink }) => (
  <AppBar title={titleLink} showMenuIconButton={false} className={css(styles.linkTitle)}>
    <Link to='/posts' className={css(styles.link)}>
      <FlatButton label='Posts' className={css(styles.linkButton)} />
    </Link>
  </AppBar>
)

// Note: Can't use aphrodite styling here because they can't be pre-rendered -- have to use inline style instead
Header.defaultProps = {
  titleLink: <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>MyUW React Seed</Link>
}

Header.propTypes = {
  titleLink: PropTypes.node
}

const styles = StyleSheet.create({
  link: {
    display: 'inline-block',
    height: 36,
    marginTop: 14
  },
  linkButton: {
    color: '#fff'
  },
  linkTitle: {
    color: '#fff',
    textDecoration: 'none'
  },
  small: {
    '@media (max-width: 600px)': {
      display: 'none'
    }
  }
})

export default Header
