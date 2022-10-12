import ReactDOM from 'react-dom/client'
import App from './app/App'
import CountManualTestProvider from './context/CountManualTestProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<CountManualTestProvider>
		<App />
	</CountManualTestProvider>
)
