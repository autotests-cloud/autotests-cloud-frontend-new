import { UseFormSetValue } from 'react-hook-form'
import { IFormAutoTestsInput } from '../../../features/AutoTestsGenerateForm/model/FormMain/FormMain.types'
import { IFormPracticeInput } from '../../../features/PracticeForm/model/FormMain/FormMain.types'

type IFormInput = IFormAutoTestsInput | IFormPracticeInput

export interface IFormInputProps {
	control: any
	name: string | any
	label?: string
	placeholder?: string
	setValue?: UseFormSetValue<IFormInput> | any
	content?: any
	direction?: 'horizontal' | 'vertical'
}
