import { Typography } from 'antd'
import KanbanLessonItem from '../KanbanLessonItem/KanbanLessonItem'
import styles from './KanbanLessons.module.scss'

const KanbanLessons = () => {
	return (
		<>
			<Typography className={styles.title}>Lessons</Typography>
			<div className={styles.wrapper}>
				<div>
					<Typography className={styles.additional}>
						Additional lessons
					</Typography>
					<div className={styles.wrapp}>
						<div></div>
					</div>
				</div>
				<div>
					<Typography className={styles.main}>Main lessons</Typography>
					<div className={styles.wrapp}>
						<KanbanLessonItem />
					</div>
				</div>
			</div>
		</>
	)
}

export default KanbanLessons
