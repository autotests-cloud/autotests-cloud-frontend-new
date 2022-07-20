import { Content } from 'antd/lib/layout/layout'
import { FC } from 'react'
import { ContainerProps } from '../Container.types'
import styles from './ConteinerRight.module.scss'

const ContainerRight: FC<ContainerProps> = ({ children }) => {
	return (
		<div className={styles.content__right}>
			<Content className={styles.content__right_wrapper}>{children}</Content>
		</div>
	)
}

export default ContainerRight
