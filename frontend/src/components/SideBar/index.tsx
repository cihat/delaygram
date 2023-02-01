import React from 'react'
import styles from './SideBar.module.scss'

import cn from 'classnames'

import useTheme from 'src/hooks/useTheme'

const SideBar: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div className={cn('', styles.container)}>
      <h1>SideBar</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default React.memo(SideBar)
