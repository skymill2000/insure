import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Hello from './component/Hello';
import ListItem from './component/ListItem';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path={"/main"} component={Hello}></Route>
        {/* 컴포넌트를 추가하고 라우팅을 나누세요 
          1. 컴포넌트 코드 추가 작성
          2. 라우팅 연결
        */}
        <Route path={"/test"} component={}></Route>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
