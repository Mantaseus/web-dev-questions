import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import * as q48 from './q48';
import * as q49 from './q49';

const PAGES = { q48, q49 };

const PageList: React.FC = () => {
  return <div className="page-list">
    {Object.entries(PAGES).map(([pageName]) => <Link to={pageName}>{pageName}</Link>)}
  </div>;
};

export function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<PageList/>}/>
        {Object.entries(PAGES).map(([pageName, { Question }]) => <Route path={pageName} element={<Question/>}/>)}
      </Route>
    </Routes>
  </BrowserRouter>);
};
