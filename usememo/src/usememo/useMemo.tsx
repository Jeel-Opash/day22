import type { FC } from 'react';
import { useMemo } from 'react';
import type { Todo } from './list';
import { filterTodos } from './list';

interface UseMemoProps {
  todos: Todo[];
  theme: 'light' | 'dark';
  tab: 'all' | 'active' | 'completed';
}

export const UseMemo: FC<UseMemoProps> = ({ todos, theme, tab }) => {
  const visibleTodos = useMemo(() => {
    return filterTodos(todos, tab);
  }, [todos, tab]);

  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
