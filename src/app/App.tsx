import React from 'react'
import Layout from '../shared/ui/Layout/Layout'
import AutoTestsGenerateForm from '../pages/AutoTestsGenerateForm'

import './styles/index.scss'

const App: React.FC = () => {
	return (
		<Layout>
			<AutoTestsGenerateForm />
		</Layout>
	)
}

export default App
