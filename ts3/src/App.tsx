import {ErrorBoundary} from 'react-error-boundary';
import { MyComponent } from './errorhandling/error';
export function fallbackRender({error,resetErrorBoundary}){
  return(
    <div>
      <h2>wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  )
}

export function App(){
  return(
    <ErrorBoundary fallbackRender={fallbackRender} onReset={()=>{}}>
      <MyComponent/>
    </ErrorBoundary>
  )
}