import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../Input.types'
import { Radio, Space, Typography } from 'antd'

const InputRadio: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	content,
	direction,
}) => {
	const generateRadioOptions = (content: any[]) => {
		return content.map(singleOptionValue => (
			<Radio key={singleOptionValue.id} value={singleOptionValue.value}>
				{singleOptionValue.label}
			</Radio>
		))
	}

	return (
		<div>
			<Typography>{label}</Typography>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Radio.Group value={value} onChange={onChange}>
						<Space direction={direction}>{generateRadioOptions(content)}</Space>
					</Radio.Group>
				)}
			/>
		</div>
	)
}

export default InputRadio
