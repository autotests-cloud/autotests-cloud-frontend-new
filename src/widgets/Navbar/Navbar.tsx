import { useEffect, useState } from 'react'
import { Layout, Button, Drawer } from 'antd'
import RightMenu from './RightMenu'
import { MenuOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import LeftMenu from './LeftMenu'

import styles from './Navbar.module.scss'
import { logo } from '../../assets'

const Navbar = () => {
	const [visible, setVisible] = useState(false)
	const showDrawer = () => {
		setVisible(!visible)
	}

	// If you do not want to auto-close the mobile drawer when a path is selected
	// Delete or comment out the code block below
	// From here
	const { pathname: location } = useLocation()
	useEffect(() => {
		setVisible(false)
	}, [location])
	// Upto here

	return (
		<nav className={styles.navbar}>
			<Button className={styles.menuButton} type='text' onClick={showDrawer}>
				<MenuOutlined />
			</Button>
			<Drawer
				title={'Brand Here'}
				placement='right'
				closable={true}
				onClose={showDrawer}
				visible={visible}
				style={{ zIndex: 99999 }}
			>
				<LeftMenu mode={'inline'} />
				<RightMenu mode={'inline'} />
			</Drawer>
		</nav>
	)
}

export default Navbar
