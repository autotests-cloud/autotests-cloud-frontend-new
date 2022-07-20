import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useStompClient } from 'react-stomp-hooks'
import { ISendingMessages } from './SendingMessages.types'
import dataSerialize from '../../lib/dataSerialize'
import { uuid } from '../../../../utils/StringUtils'

export const SendingMessages: React.FC<ISendingMessages> = ({ data }) => {
	const stompClient = useStompClient()

	const [visible, setVisible] = useState<boolean>(false)

	useEffect(() => {
		setVisible(!visible)

		if (stompClient && data) {
			console.log(dataSerialize(data))

			stompClient.publish({
				destination: `/app/generate/${uuid}`,
				body: dataSerialize(data),
			})
		} else {
			//Handle error
		}
	}, [data])

	return (
		<>
			{visible ? (
				<Button style={{ width: '130px', maxWidth: '100%' }} htmlType='submit'>
					Generate
				</Button>
			) : null}
		</>
	)
}
