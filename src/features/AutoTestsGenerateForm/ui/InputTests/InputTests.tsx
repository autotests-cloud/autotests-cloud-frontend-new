import React from 'react'
import { Typography } from 'antd'
import Ui from '../../../../shared/ui/Input'
const { Text } = Typography
import Content from '../../config/ContentFormAutoTests'
import { IFormInputProps } from '../../../../shared/ui/Input/Input.types'
import styles from './InputTests.module.scss'

const InputTests: React.FC<IFormInputProps> = ({ control }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.border}>
				<Ui.Checkbox
					control={control}
					name='title_check'
					content={Content.TestsTitleContent.options}
				/>
				<Text className={styles.subtitle}>
					- Open url '' <br /> - Title should be 'All posts in a row / Habr'
				</Text>
			</div>
			<div className={styles.border}>
				<Ui.Checkbox
					control={control}
					name='console_check'
					content={Content.TestsErrorsContent.options}
				/>
				<Text className={styles.subtitle}>
					- Open url '' <br /> - Console logs should not contain text 'SEVERE'
				</Text>
			</div>
		</div>
	)
}

export default InputTests
