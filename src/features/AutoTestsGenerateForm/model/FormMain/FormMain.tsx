import { useForm, SubmitHandler } from 'react-hook-form'
import React, { useState } from 'react'
import { defaultValues } from '../../config/defaultValues'
import { Form, Typography } from 'antd'
import styles from './FormMain.module.scss'
import { IFormAutoTestsInput } from './FormMain.types'
import { SendingMessages } from '../SendingMessages/SendingMessages'
import FormViews from '../../ui/FormViews/FormViews'

const FormMain: React.FC = () => {
	const { handleSubmit, control } = useForm<IFormAutoTestsInput>({
		defaultValues,
	})

	const [data, setData] = useState<IFormAutoTestsInput>()

	const onSubmit: SubmitHandler<IFormAutoTestsInput> = data => {
		setData(data)
	}

	return (
		<>
			<Typography className={styles.title}>
				Test automation as a Service
			</Typography>
			<Form onFinish={handleSubmit(onSubmit)}>
				<FormViews control={control} />
				<div className={styles.wrapper}>
					<SendingMessages data={data} />
				</div>
			</Form>
		</>
	)
}

export default FormMain
