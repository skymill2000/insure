import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Hello from './component/Hello';
import Hello2 from './component/Hello2';
import ListItem from './component/ListItem';
import StyledComponentTest from './component/StyledComponentTest';
import AuthTest from './pages/AuthTest';
import FlightInput from './pages/FlightInput';
import NewsSearch from './pages/NewsSearch';

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
        <Route path={"/test"} component={Hello2}></Route>
        <Route path={"/styled"} component={StyledComponentTest}></Route>
        <Route path={"/news"} component={NewsSearch}></Route>
        <Route path={"/authTest"} component={AuthTest}></Route>
        {/* practice */}

        <Route path={"/inputflight"} component={FlightInput}></Route>
        <Route path={"/singupInsure"} component={FlightInput}></Route>

      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
