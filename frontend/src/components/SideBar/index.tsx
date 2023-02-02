import React from 'react'
import styles from './SideBar.module.scss'

import { HomeIcon, MessageIcon, SearchIcon, VideoIcon, DelaygramLogo } from 'src/assets/icons'

import cn from 'classnames'

const SideBar: React.FC = () => {
  return (
    <div className={cn('', styles.container)}>
      <div className={styles.logo_wrapper}>
        <DelaygramLogo />
      </div>
      {/* Need refactoring here(dynamic icons) */}
      <div className={styles.icons_wrapper}>
        <div className={styles.inner_icon_wrapper}>
          <HomeIcon />
          <h3>Home</h3>
        </div>
        <div className={styles.inner_icon_wrapper}>
          <SearchIcon />
          <h3>Search</h3>
        </div>
        <div className={styles.inner_icon_wrapper}>
          <VideoIcon />
          <h3>Reels</h3>
        </div>
        <div className={styles.inner_icon_wrapper}>
          <MessageIcon />
          <h3>Messages</h3>
        </div>
        <div className={styles.inner_icon_wrapper}>
          <MessageIcon />
          <h3>Notifications</h3>
        </div>
        {/* <img
          alt="user profile picture"
          src="https://placeholder.com/assets/images/150x150-2-500x500.png"
        ></img> */}
      </div>
    </div>
  )
}

export default React.memo(SideBar)
