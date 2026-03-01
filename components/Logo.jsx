import styles from './Logo.module.css'

export default function Logo() {
    return <div className={styles.logo}>
        <div className={styles.title}>
            <div>Projet</div>
            <span>Intégrateur</span>
        </div>
        <div className={styles.number}></div>
    </div>
}
