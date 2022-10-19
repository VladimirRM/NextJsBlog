import styles from './layout.module.css'
import UtilStyles from './styles/utils.module.css' 



export default function Layout({children, home}){
    return(
        <div className={UtilStyles.container}>
            <header className={styles.header}>
                { home ? (

                ):(
                    
                )

                }
            </header>
        </div>
    )
}
