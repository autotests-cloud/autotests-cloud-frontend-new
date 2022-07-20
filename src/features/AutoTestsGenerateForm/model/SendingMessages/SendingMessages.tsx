import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useStompClient } from 'react-stomp-hooks'
import { ISendingMessages } from './SendingMessages.types'
import dataSerialize from '../../lib/dataSerialize'
import { uuid } from '../../../../utils/StringUtils'
import styles from './SendingMessages.module.scss'

export const SendingMessages: React.FC<ISendingMessages> = ({ data }) => {
	const stompClient = useStompClient()

	const [visible, setVisible] = useState<boolean>(false)

	useEffect(() => {
		setVisible(!visible)

		if (stompClient && data) {
			stompClient.publish({
				destination: `/app/generate/${uuid}`,
				body: dataSerialize(data),
			})
		}
	}, [data])

	return (
		<>
			{visible ? (
				<Button className={styles.button} htmlType='submit'>
					Generate
				</Button>
			) : null}
		</>
	)
}
