/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
import { Typography } from 'antd'
import ContentKanbanTasks from '../../config/ContentKanbanTasks'
import styles from './KanbanTasks.module.scss'

const KanbanTasks = () => {
	return (
		<>
			<Typography className={styles.title}>Tasks</Typography>
			<Board
				disableColumnDrag
				allowRemoveLane
				allowRenameColumn
				allowRemoveCard
				onLaneRemove={console.log}
				onCardRemove={console.log}
				onLaneRename={console.log}
				initialBoard={ContentKanbanTasks}
				allowAddCard={{ on: 'top' }}
				onNewCardConfirm={(draftCard: any) => ({
					id: new Date().getTime(),
					...draftCard,
				})}
				onCardNew={console.log}
			/>
		</>
	)
}

export default KanbanTasks
