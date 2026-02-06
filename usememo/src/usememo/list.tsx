export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function createTodos(): Todo[] {
  const todos: Todo[] = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: 'Todo ' + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}

export function filterTodos(
  todos: Todo[],
  tab: 'all' | 'active' | 'completed'
): Todo[] {
  console.log(
    '[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.'
  );

  const startTime = performance.now();
  while (performance.now() - startTime < 500) {}

  return todos.filter(todo => {
    if (tab === 'all') return true;
    if (tab === 'active') return !todo.completed;
    return todo.completed;
  });
}
