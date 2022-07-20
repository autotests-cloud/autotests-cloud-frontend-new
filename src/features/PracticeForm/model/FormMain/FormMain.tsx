import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import { defaultValues } from '../../config/defaultValues'
import PracticeFormViews from '../../ui/FormViews/FormViews'
import { Button, Form, Typography } from 'antd'
import styles from './FormMain.module.scss'
import { IFormMainProps, IFormPracticeInput } from './FormMain.types'

const { Title, Text } = Typography

const FormMain: React.FC<IFormMainProps> = ({ setData }) => {
	const { handleSubmit, control, setValue, reset } =
		useForm<IFormPracticeInput>({
			defaultValues,
		})

	const onSubmit: SubmitHandler<IFormPracticeInput> = data => {
		setData(data), console.log(data)
	}

	return (
		<>
			<Title>Practice Form</Title>
			<Form onFinish={handleSubmit(onSubmit)}>
				<PracticeFormViews setValue={setValue} control={control} />
				<div className={styles.wrapper}>
					<Button className={styles.wrapper__button} htmlType='submit'>
						Generate
					</Button>
					<Button className={styles.wrapper__button} onClick={() => reset()}>
						Reset
					</Button>
					<footer className={styles.footer}>
						<Text className={styles.text}>© QA GURU</Text>
					</footer>
				</div>
			</Form>
		</>
	)
}

export default FormMain
