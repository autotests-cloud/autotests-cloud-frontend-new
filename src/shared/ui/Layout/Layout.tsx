import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Navbar from '../../../widgets/Navbar/Navbar'

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className={styles.layout}>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
