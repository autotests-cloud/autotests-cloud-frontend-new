import { Typography } from 'antd'
import styles from './KanbanLessonItem.module.scss'

const KanbanLessonItem = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<div>1</div>
				<Typography>Вводное занятие. Сразу к практике</Typography>
			</div>
			<ul>
				<li>
					<Typography>Разрабатываем и запускаем первый автотест</Typography>
					<Typography>Java / Gradle / JUnit5 / Selenide</Typography>
				</li>
				<li>
					<Typography>Разрабатываем и запускаем первый автотест</Typography>
					<Typography>Java / Gradle / JUnit5 / Selenide</Typography>
				</li>
			</ul>
			<div>
				<Typography>Lectors:</Typography>
			</div>
		</div>
	)
}

export default KanbanLessonItem
