import { IFormInputProps } from '../../../../shared/ui/Input/Input.types'
import { PlusCircleOutlined } from '@ant-design/icons'
import styles from './InputManualTests.module.scss'
import { Typography } from 'antd'
import { useState } from 'react'
import InputSingleManualTest from './InputSingleManualTest'
const { Text } = Typography

const InputManualTests: React.FC<IFormInputProps> = ({ control, label }) => {
	const [array, setArray] = useState<any>([])

	const handleCreateManualTest = () => {
		setArray([...array, { ...array, id: Math.random() }])
	}

	return (
		<>
			<Text>{label}</Text>
			<div className={styles.wrapper}>
				<InputSingleManualTest control={control} name='1' />
				<InputSingleManualTest control={control} name='2' />
				<InputSingleManualTest control={control} name='3' />
				{array.map((arr: any) => (
					<InputSingleManualTest key={arr.id} control={control} name={''} />
				))}
				<PlusCircleOutlined
					onClick={handleCreateManualTest}
					className={styles.icon}
				/>
			</div>
		</>
	)
}

export default InputManualTests
