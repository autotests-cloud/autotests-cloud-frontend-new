import React from 'react'
import Ui from '../../../../shared/ui/Input'
import Content from '../../config/ContentPracticeForm'
import styles from './FormViews.module.scss'
import { IFormViewsProps } from './FormViews.types'

const FormViews: React.FC<IFormViewsProps> = ({ control, setValue }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<Ui.Text name='firstName' control={control} label='First Name' />
				<Ui.Text name='lastName' control={control} label='Last Name' />
			</div>

			<div className={styles.wrapper}>
				<Ui.Text
					name='email'
					control={control}
					label='Email'
					placeholder='name@example.com'
				/>
				<Ui.Text name='phone' control={control} label='Phone' />
			</div>

			<div className={styles.wrapper}>
				<Ui.SelectOption
					label='Select Language'
					name='language'
					control={control}
					content={Content.LanguageContent.options}
				/>
				<Ui.Date name='birthDate' control={control} label='Birthdate' />
			</div>

			<div className={styles.wrapper}>
				<Ui.Radio
					name='gender'
					control={control}
					label='Gender'
					content={Content.GenderContent.options}
				/>
				<Ui.Checkbox
					control={control}
					name='hobbies'
					label='Hobbies'
					content={Content.HobbiesContent.options}
				/>
			</div>

			<Ui.SelectMultiple
				name='subjects'
				control={control}
				label='Subjects'
				content={Content.SubjectsContent.subjects}
			/>
			<Ui.SelectCascader
				name='stateCity'
				control={control}
				placeholder='Select'
				label='Select State and City'
				setValue={setValue}
				content={Content.StateCityContent.options}
			/>
			<Ui.Slider name='slider' control={control} label='Slider' />
			<Ui.TextArea name='address' control={control} label='Address' />
			<Ui.FileUploud name='file' control={control} setValue={setValue} />
		</>
	)
}

export default FormViews
