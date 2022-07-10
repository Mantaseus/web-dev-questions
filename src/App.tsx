import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import './App.css'
import { Badges } from './components/Badges';
import { useQuestionData } from './components/hooks';
import { QUESTIONS } from './questions';

const PageList: React.FC = () => {
  const navigate = useNavigate();

  return <div className="page-list">
    <table>
      <tbody>
        {Object.entries(QUESTIONS).map(([questionKey, page]) => {
          const questionData = useQuestionData(questionKey)
          return (<tr key={questionKey} onClick={() => navigate(questionKey)}>
            <td className="fit"><strong>{questionKey}</strong></td>
            <td><strong>{page.title}</strong></td>
            <td>
              <Badges questionData={questionData} badges={page.badges}/>
              <div className="text-muted-sm" style={{ marginTop: '0.5rem' }}>
                {questionData.lastAttemptTime && `Last attempted: ${new Date(questionData.lastAttemptTime).toLocaleString()}`}
              </div>
              <div className="text-muted-sm">
                {questionData.completedTime && `Completed: ${new Date(questionData.completedTime).toLocaleString()}`}
              </div>
            </td>
          </tr>);
        })}
      </tbody>
    </table>
  </div>;
};

export function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<PageList/>}/>
        {Object.entries(QUESTIONS).map(([pageName, { Question }]) => <Route key={pageName} path={pageName} element={<Question/>}/>)}
      </Route>
    </Routes>
  </BrowserRouter>);
};
