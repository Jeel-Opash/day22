import {useTheme} from '../theme/themecontext';

export const MyPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

