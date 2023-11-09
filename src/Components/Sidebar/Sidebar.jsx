import styles from './Sidebar.module.scss';
import Image from 'next/image';
import { 
  MdOutlineDashboard,
  MdOutlineQueryStats,
} from 'react-icons/md';
import Link from 'next/link';
import {useRouter} from 'next/router';

const links = [
  {name: 'painel', icon: <MdOutlineDashboard />, url: '/'},
  {name: 'estabelecimento', icon: <MdOutlineQueryStats />, url: '/estabelecimento'}
]


const Sidebar = () => {
  const router = useRouter();

  let {route} = router;



const renderLinks = links.map((link, i) => (
    <li key={i}>
      <Link href={link.url} className={route === link.url ? styles.active : ''}>
        <div>{link.icon}</div>
        <span>{link.name}</span>
      </Link>
    </li>
));


  return(
    <section className={styles.sidebar}>
      <div className={styles.image}>
          <Image src='/logo.svg' alt='dashboard' width='46' height='43'/>
      </div>
      <nav className={styles.navigation}>
        <ul >
          {renderLinks}
        </ul>

      </nav>
    </section>
  )
}

export default Sidebar;