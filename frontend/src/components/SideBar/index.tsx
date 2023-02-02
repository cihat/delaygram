import React from 'react'
import styles from './SideBar.module.scss'
import { HomeIcon, MessageIcon, SearchIcon, VideoIcon, DelaygramLogo } from 'src/assets/icons'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const SideBar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={cn('', styles.container)}>
      <NavLink to="/" className={styles.logo_wrapper}>
        <DelaygramLogo />
      </NavLink>
      <nav className={styles.icons_wrapper}>
        <ul>
          <li>
            <NavLink to="/" className={styles.inner_icon_wrapper}>
              <HomeIcon />
              <h3>{t('home')}</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.inner_icon_wrapper}>
              <SearchIcon />
              <h3>{t('search')}</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reels" className={styles.inner_icon_wrapper}>
              <VideoIcon />
              <h3>{t('reels')}</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/direct/inbox" className={styles.inner_icon_wrapper}>
              <MessageIcon />
              <h3>{t('messages')}</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.inner_icon_wrapper}>
              <MessageIcon />
              <h3>{t('notifications')}</h3>
            </NavLink>
          </li>
          {/* <img
          alt="user profile picture"
          src="https://placeholder.com/assets/images/150x150-2-500x500.png"
        ></img> */}
        </ul>
      </nav>
    </div>
  )
}

export default React.memo(SideBar)
