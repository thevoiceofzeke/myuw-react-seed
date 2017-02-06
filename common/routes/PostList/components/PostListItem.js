import React from 'react'
import ListItem from 'material-ui/List'
import Styles from '../../../style'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite'

const PostListItem = ({ post }) => (
  <ListItem>
    <Link to={`/post/${post.slug}`} className={css(styles.title)}> {post.title} </Link>
  </ListItem>
)

const styles = StyleSheet.create({
  root: {
    margin: '0 auto 1.5rem'
  },
  title: {
    color: Styles.type.linkColor,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
})

export default PostListItem
