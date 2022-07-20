import { IFormAutoTestsInput } from '../../../AutoTestsGenerateForm/model/FormMain/FormMain.types'
import { IFormPracticeInput } from '../../model/FormMain/FormMain.types'

export interface IFormResult {
	data: IFormPracticeInput | IFormAutoTestsInput
}
