import Todo from '@/components/Todo/Todo';
import { MOCK_TODO_LIST } from '@/mock/todolist';
import styles from './page.module.scss';
export default function Home() {

  return (
    <main className={styles['main']}>
      <div className={styles['main-wrapper']}>
        <form action="">
          <input 
            type="text"
            placeholder='Add to do'
          />
          <button type='submit'>
            Add to do
          </button>
        </form>
        <div className={styles['todo-list']}>
          {
            MOCK_TODO_LIST.map(({ id, title, description }) => (
              <Todo
                key={id}
                title={title}
                description={description}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
}