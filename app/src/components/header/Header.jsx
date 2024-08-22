import Button from '../button/Button.jsx'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div>
      <header className={styles.siteHeader}>
        <h3>🔥Fireplace Palace</h3>
        <Button />
      </header>
    </div>
  )
}

export default Header
