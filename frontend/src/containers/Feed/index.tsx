import React from 'react'
import styles from './Feed.module.scss'

import SideBar from 'src/components/SideBar'
import Flow from 'src/components/Flow'

import cn from 'classnames'

const Feed: React.FC = () => {
  return (
    <div className={cn(`${styles.container}`)}>
      <SideBar />
      <Flow />
    </div>
  )
}

export default Feed
