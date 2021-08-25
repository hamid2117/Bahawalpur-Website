import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid',
    grid: '2fr 1fr 1fr ',
    justifyContent: 'start',
    gridAutoRows: '100px',
    '@media (max-width: 500px)': {},
  },
}))
const Header = () => {
  const classes = useStyles()

  return (
    <>
      <header className={classes.main}></header>
    </>
  )
}
export default Header
