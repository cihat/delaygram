import React from 'react'
import styles from './SideBar.module.scss'

import cn from 'classnames'

const SideBar: React.FC = () => {
  return (
    <div className={cn('', styles.container)}>
      <h1>SideBar</h1>
    </div>
  )
}

export default React.memo(SideBar)
