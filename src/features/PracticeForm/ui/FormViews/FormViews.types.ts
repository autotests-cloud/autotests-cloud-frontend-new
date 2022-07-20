import { Control } from 'react-hook-form'
import { IFormPracticeInput } from '../../model/FormMain/FormMain.types'

export interface IFormViewsProps {
	control: Control<IFormPracticeInput, object>
	setValue: any
}
