import { FC } from 'react'
import styles from './styles/index.module.scss'

interface TodoProps {
  title: string
  description?: string
}

const Todo: FC<TodoProps> = ({ title }) => {
  return (
    <div className={styles['todo']}>
      <span>
        {title}
      </span>
      <div className={styles['button-container']}>
        <button>Edit</button>
        <button>Delete</button>
      </div>

      {/* TODO ADD MODAL AND DISPLAY DESCRIPTION */}
      {/* {description && 
        <p>
          {description}
        </p>
      } */}
    </div>
  )}

export default Todo