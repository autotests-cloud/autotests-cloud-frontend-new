import { Controller } from 'react-hook-form'
import { Input, Typography } from 'antd'
import { IFormInputProps } from '../Input.types'

const InputText: React.FC<IFormInputProps> = ({
	control,
	name,
	placeholder,
	label,
}) => {
	return (
		<div>
			<Typography>{label}</Typography>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input value={value} onChange={onChange} placeholder={placeholder} />
				)}
			/>
		</div>
	)
}

export default InputText
