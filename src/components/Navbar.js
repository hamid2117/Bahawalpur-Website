import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid',
    grid: '2fr 1fr 1fr',
    justifyContent: 'start',
    gridAutoRows: '100px',
    '@media (max-width: 500px)': {},
  },
}))
const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <li>
          <ul>home</ul>
          <ul>home</ul>
          <ul>home</ul>
          <ul>home</ul>
        </li>
      </section>
    </>
  )
}
export default Navbar
