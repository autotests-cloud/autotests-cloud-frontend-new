import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../Input.types'
import FormItem from 'antd/lib/form/FormItem'
import { Slider } from 'antd'

const InputSlider = ({ name, control, label }: IFormInputProps) => {
	return (
		<FormItem label={label}>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Slider onChange={onChange} value={value} defaultValue={30} />
				)}
			/>
		</FormItem>
	)
}

export default InputSlider
