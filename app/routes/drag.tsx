import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import { useState } from 'react'
import Draggable from '~/components/Draggable'
import Droppable from '~/components/Droppable'

export default function Page() {
  const [isDropped, setIsDropped] = useState(false)
  const draggableMarkup = <Draggable>Drag me</Draggable>

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
    </DndContext>
  )
}
