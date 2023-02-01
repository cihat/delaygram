import React from 'react'

import styles from './Suggestion.module.scss'

import cn from 'classnames'

import useTheme from 'src/hooks/useTheme'

const Suggestion: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div className={cn(styles.container)}>
      <h1>Suggestion</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default Suggestion
