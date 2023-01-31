import React from 'react'

import styles from './Suggestion.module.scss'

import cn from 'classnames'

const Suggestion: React.FC = () => {
  return (
    <div className={cn(styles.container)}>
      <h1>Suggestion</h1>
    </div>
  )
}

export default Suggestion
