import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getQuestionData } from '../console_test';

export function useQuestionKey() {
  const location = useLocation();
  return location.pathname.replace('/', '');
}

export function useQuestionData() {
  const questionKey = useQuestionKey();
  const data = useMemo(() => getQuestionData(questionKey), [questionKey]);
  return {
    ...data,
    key: questionKey,
  };
}
