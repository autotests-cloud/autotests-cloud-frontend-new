import { useState } from 'react'
import ContainerLeft from '../shared/ui/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../shared/ui/Containers/ContainerRight/ConteinerRight'
import FormResult from '../features/PracticeForm/ui/FormResult/FormResult'
import FormMain from '../features/PracticeForm/model/FormMain/FormMain'

const PracticeForm: React.FC = () => {
	const [data, setData] = useState()

	return (
		<>
			<ContainerLeft>
				<FormMain setData={setData} />
			</ContainerLeft>
			<ContainerRight>
				<div>{data && <FormResult data={data} />}</div>
			</ContainerRight>
		</>
	)
}

export default PracticeForm
