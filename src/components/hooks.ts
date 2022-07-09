import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getQuestionData } from '../console_test';

export function useQuestionKey() {
  const location = useLocation();
  return location.pathname.replace('/', '');
}

export function useQuestionData(key?: string) {
  const keyFromURL = useQuestionKey();
  const questionKey = key || keyFromURL;
  const data = useMemo(() => getQuestionData(questionKey), [questionKey]);
  return {
    ...data,
    key: questionKey,
  };
}
