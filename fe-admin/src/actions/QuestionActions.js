import { apiPost, apiPut, apiGet, apiDelete } from '../helpers/api';

export const QUESTION_CREATE = 'QUESTION_CREATE';
// export const QUESTION_ADD_REPLIES = 'QUESTION_ADD_REPLIES';
export const QUESTION_GET = 'QUESTION_GET';
export const QUESTION_LIST = 'QUESTION_LIST';
export const QUESTION_UPDATE = 'QUESTION_UPDATE';
export const QUESTION_TO_REMOVE = 'QUESTION_TO_REMOVE';
export const QUESTION_REMOVE = 'QUESTION_REMOVE';
export const QUESTION_CLEAR = 'QUESTION_CLEAR';

export const questionCreate = async (data) => {
  const id = await apiPost('/question', { ...data });

  const isCorrect = !!data.isCorrect;
  const payload = apiPut(`/question/${id}`, { ...data, isCorrect });

  return { type: QUESTION_CREATE, payload };
};

// export const questionAddReplies = (id, data) => {
//   const isCorrect = !!data.isCorrect;
//   const payload = apiPut(`/question/${id}`, { ...data, isCorrect });
//   return { type: QUESTION_ADD_REPLIES, payload };
// };

export const questionUpdate = (id, data) => {
  const isSocial = !!data.isSocial;
  const payload = apiPut(`/question/${id}`, { ...data, isSocial });
  return { type: QUESTION_UPDATE, payload };
};

export const questionGet = (id) => {
  const payload = apiGet(`/question/${id}`);
  return { type: QUESTION_GET, payload };
};

export const questionList = (data) => {
  const payload = apiGet('/question');
  return { type: QUESTION_LIST, payload };
};

export const setQuestionToRemove = (link) => {
  return { type: QUESTION_TO_REMOVE, payload: link };
};

export const questionRemove = (link) => {
  const payload = apiDelete(`/question/${link.id}`);
  return { type: QUESTION_REMOVE, payload };
};

export const questionClear = () => {
  return { type: QUESTION_CLEAR, payload: {} };
};
