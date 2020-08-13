import {
  QUESTION_CREATE,
  QUESTION_LIST,
  QUESTION_GET,
  QUESTION_UPDATE,
  QUESTION_TO_REMOVE,
  QUESTION_REMOVE,
  QUESTION_CLEAR,
} from '../actions/QuestionActions';

const initialState = {
  question: null,
  questions: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case QUESTION_CREATE: {
      const response = payload ? payload.data : null;
      const question = response ? response.data : null;
      return { ...state, question };
    }
    case QUESTION_UPDATE: {
      const response = payload ? payload.data : null;
      const question = response ? response.data : null;
      return { ...state, question };
    }
    case QUESTION_GET: {
      const response = payload ? payload.data : null;
      const question = response ? response.data : null;
      return { ...state, question };
    }
    case QUESTION_LIST: {
      const response = payload ? payload.data : null;
      const questions = response ? response.data : null;
      return { ...state, questions };
    }
    case QUESTION_TO_REMOVE: {
      return { ...state, questionToRemove: payload };
    }
    case QUESTION_REMOVE: {
      const questions = state.questions.filter((question) => question.id !== state.questionToRemove.id);
      return { ...state, questionToRemove: null, questions };
    }
    case QUESTION_CLEAR: {
      return { ...state, question: null };
    }
    default: {
      return state;
    }
  }
}
