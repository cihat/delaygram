import React from 'react'
import styles from './SideBar.module.scss'

import { HomeIcon, MessageIcon, SearchIcon, VideoIcon, DelaygramLogo } from 'src/assets/icons'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

const SideBar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={cn('', styles.container)}>
      <div className={styles.logo_wrapper}>
        <DelaygramLogo />
      </div>
      {/* Need refactoring here(dynamic icons) */}
      <div className={styles.icons_wrapper}>
        <div className={styles.inner_icon_wrapper}>
          <HomeIcon />
          <h3>{t('home')}</h3>
        </div>
        <div className={styles.inner_icon_wrapper}>
          <SearchIcon />
          <h3>{t('search')}</h3>
        </div>
        <div className={styles.inner_icon_wrapper}>
          <VideoIcon />
          <h3>{t('reels')}</h3>
        </div>
        <div className={styles.inner_icon_wrapper}>
          <MessageIcon />
          <h3>{t('messages')}</h3>
        </div>
        <div className={styles.inner_icon_wrapper}>
          <MessageIcon />
          <h3>{t('notifications')}</h3>
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
