import styles from './layout.module.css'
import UtilStyles from './styles/utils.module.css' 
import Image from 'next/image'
import Link from "next/link"


const name = 'Max Roslow'



export default function Layout({children, home}){
    return(
        <div className={UtilStyles.container}>
            <header className={styles.header}>
                { home ? (
                     <>
                     <Image priority
                     src='/images/profile.jpeg'
                     className={UtilStyles.borderCircle}
                     height={144}
                     width={144}
                     alt={name}
                     />
                     <h1 className={UtilStyles.heading2xl}>{name}</h1>
                     </>

                ):(
                   <>
                   </>
                    

                )

                }
            </header>
        </div>
    )
}
