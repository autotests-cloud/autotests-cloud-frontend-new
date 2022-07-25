import KanbanLessons from '../features/KanbanBoard/model/KanbanLessons/KanbanLessons'
import KanbanTasks from '../features/KanbanBoard/model/KanbanTasks/KanbanTasks'
import ContainerLeft from '../shared/ui/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../shared/ui/Containers/ContainerRight/ConteinerRight'

const KanbanBoard: React.FC = () => {
	return (
		<>
			<ContainerLeft>
				<KanbanLessons />
			</ContainerLeft>
			<ContainerRight>
				<KanbanTasks />
			</ContainerRight>
		</>
	)
}

export default KanbanBoard
