import React from 'react'
import Styles from '../../../style'
import { StyleSheet, css } from 'aphrodite'
import data from '../data'

// This is a static page. It uses an array to hold data about the resources
// and maintain DRY
const Home = (props) => (
  <div>
    <h2 className={css(styles.header)}>About</h2>
    <p className={css(styles.lead)}>
      This is a react seed application developed for UW-Madison's MyUW team, based on <a className={css(styles.link)} href='https://github.com/jaredpalmer/react-production-starter' target='_blank'>react-production-starter</a>.
    </p>

    <ul className={css(styles.list)}>
      {data.map((item, i) => (
        <li key={i}>
          <h3><a className={css(styles.link)} href={item.link} target='_blank'>{item.resource}</a></h3>
          <p className={css(styles.body)}>{item.description}</p>
        </li>
       ))}
    </ul>
  </div>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0
  },
  link: {
    color: Styles.type.linkColor,
    transition: '.2s opacity ease',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
})

export default Home
