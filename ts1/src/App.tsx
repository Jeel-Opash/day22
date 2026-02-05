import { MyPage } from "./theme/mypage";
import { ThemeProvider } from "./theme/themecontext";


function App() {
  return (
    <ThemeProvider>
      <MyPage/>
    </ThemeProvider>
  );
}

export default App;