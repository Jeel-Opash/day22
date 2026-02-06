import type{ FC } from 'react';
import { UseMemo } from './usememo/useMemo';
import { createTodos } from './usememo/list';
import { useState } from 'react';

const todos = createTodos();

const App: FC = () => {
  const [tab, setTab] = useState<'all'|'active' | 'completed'>('all');
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <button onClick={() => setTab('all')}>All</button>
      <button onClick={() => setTab('active')}>Active</button>
      <button onClick={() => setTab('completed')}>Completed</button>

      <br />

      <label>
        <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)}/>
        Dark mode
      </label>

      <hr />
      <UseMemo todos={todos} tab={tab}
        theme={isDark ? 'dark' : 'light'}/>
    </>
  );
};

export default App;
