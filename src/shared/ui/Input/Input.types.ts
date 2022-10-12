import { UseFormSetValue } from 'react-hook-form'
import { IFormAutoTestsInput } from '../../../features/AutoTestsGenerateForm/model/FormMain/FormMain.types'

export interface IFormInputProps {
	control: any
	name: string | any
	label?: string
	placeholder?: string
	setValue?: UseFormSetValue<IFormAutoTestsInput> | any
	content?: any
	direction?: 'horizontal' | 'vertical'
}
