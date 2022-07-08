import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import * as js1 from './questions/js1';

const PAGES = { js1 };

const PageList: React.FC = () => {
  return <div className="page-list">
    {Object.entries(PAGES).map(([pageName]) => <Link key={pageName} to={pageName}>{pageName}</Link>)}
  </div>;
};

export function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<PageList/>}/>
        {Object.entries(PAGES).map(([pageName, { Question }]) => <Route key={pageName} path={pageName} element={<Question/>}/>)}
      </Route>
    </Routes>
  </BrowserRouter>);
};
