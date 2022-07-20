import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../shared/ui/Layout/Layout'
import Kanban from '../pages/Kanban'
import AutoTestsGenerateForm from '../pages/AutoTestsGenerateForm'
import PracticeForm from '../pages/PracticeForm'

import './styles/index.scss'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='kanban' element={<Kanban />} />
				<Route index element={<AutoTestsGenerateForm />} />
				<Route path='form' element={<PracticeForm />} />
			</Route>
		</Routes>
	)
}

export default App
