import { Menu } from 'antd'
import { MenuMode } from 'antd/lib/menu'
import { useNavigate } from 'react-router-dom'

interface ILeftMenu {
	mode: MenuMode | any
}

const LeftMenu: React.FC<ILeftMenu> = ({ mode }) => {
	const navigate = useNavigate()

	const menuItems = [
		{
			key: 'autotests',
			label: 'Autotests',
			onClick: () => {
				navigate('/')
			},
		},
		{
			key: 'kanban',
			label: 'Kanban',
			onClick: () => {
				navigate('/kanban')
			},
		},
		{
			key: 'form',
			label: 'Form',
			onClick: () => {
				navigate('/form')
			},
		},
	]

	return <Menu items={menuItems} mode={mode}></Menu>
}

export default LeftMenu
