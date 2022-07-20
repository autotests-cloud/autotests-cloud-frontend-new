import { Tabs } from 'antd'
import FormMain from '../features/AutoTestsGenerateForm/model/FormMain/FormMain'
import FormTitles from '../features/AutoTestsGenerateForm/ui/FormTitles/FormTitles'
import ContainerLeft from '../shared/ui/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../shared/ui/Containers/ContainerRight/ConteinerRight'
import { StompSessionProvider } from 'react-stomp-hooks'
import { Subscribing } from '../features/AutoTestsGenerateForm/model/Subscribing/Subscribing'
const { TabPane } = Tabs

const AutoTestsGenerateForm: React.FC = () => {
	return (
		<StompSessionProvider
			url={'http://localhost:8080/ws'}
			// url={'https://api.autotests.cloud'}
		>
			<ContainerLeft>
				<FormMain />
			</ContainerLeft>
			<ContainerRight>
				<Tabs defaultActiveKey='2' type='card'>
					<TabPane tab='Documentation' key='1'>
						<FormTitles />
					</TabPane>
					<TabPane tab='Console output' key='2'>
						<Subscribing />
					</TabPane>
				</Tabs>
			</ContainerRight>
		</StompSessionProvider>
	)
}

export default AutoTestsGenerateForm
