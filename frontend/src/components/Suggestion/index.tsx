import React from 'react'
import styles from './Suggestion.module.scss'
import cn from 'classnames'
import useTheme from 'src/hooks/useTheme'
import { useTranslation } from 'react-i18next'

const Suggestion: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const { t, i18n } = useTranslation()

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const changeLanguage = (lang: string) => i18n.changeLanguage(lang)

  return (
    <div className={cn(styles.container)}>
      <h1>{t('suggestions')}</h1>
      <p>
        {t('activeLanguage')}: {i18n.language}
      </p>
      <br />
      <button onClick={changeTheme}>Change Theme</button>
      <button onClick={() => changeLanguage('tr')}>Change Language: Turkish</button>
      <button onClick={() => changeLanguage('en')}>Change Language: English</button>
    </div>
  )
}

export default Suggestion
