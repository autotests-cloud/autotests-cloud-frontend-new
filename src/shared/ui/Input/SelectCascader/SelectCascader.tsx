import { Cascader, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../Input.types'
interface Option {
	value: string
	label: string
	children?: Option[]
}

const options: Option[] = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
]

const InputSelectCascader: React.FC<IFormInputProps> = ({
	name,
	setValue,
	control,
	label,
}) => {
	const [option, setOption] = useState<any>()

	useEffect(() => {
		if (option) setValue(name, option)
	}, [option])

	const handleChange = (value: any) => {
		setOption(value)
	}

	return (
		<>
			<Typography>{label}</Typography>
			<Controller
				control={control}
				name={name}
				render={() => (
					<Cascader
						defaultValue={['zhejiang', 'hangzhou', 'xihu']}
						options={options}
						onChange={handleChange}
					/>
				)}
			/>
		</>
	)
}

export default InputSelectCascader
