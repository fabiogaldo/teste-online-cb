import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from '../../Layouts/Manage';
import { questionList, setQuestionToRemove, questionRemove } from '../../../actions/QuestionActions';

const Questions = ({ questions, questionRemove, questionToRemove, questionList, setquestionToRemove }) => {
  useEffect(() => {
    questionList();
  }, [questionList]);

  const cancelDelete = (e) => setquestionToRemove(null);
  const confirmDelete = (e) => (questionToRemove ? questionRemove(questionToRemove) : null);

  return (
    <Layout>
      <div className='row'>
        <div className='col'>
          <h1>Questions</h1>
        </div>
        <div className='col text-right align-self-bottom pt-2'>
          <Link to='/manage/questions/create' className='btn btn-primary'>
            Add
          </Link>
        </div>
      </div>

      {questions && questions.length
        ? questions.map((question) => {
            const deleteClick = (e) => setQuestionToRemove(question);
            const border = questionToRemove && questionToRemove.id === question.id ? 'border border-danger rounded' : 'border border-transparent';

            return (
              <div key={question.id} className={`pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${border}`}>
                <div className='align-self-center'>
                  <span className='text-primary clearfix'>{question.label}</span>
                </div>
                <div className='ml-auto p-2 clearfix'>
                  <Link to={`/manage/questions/edit/${question.id}`} className='mr-2'>
                    Edit
                  </Link>
                  <button className='btn btn-clear' onClick={deleteClick}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : null}

      {questionToRemove ? (
        <div className='alert alert-danger rounded float-center shadow-bold'>
          <h4 className='alert-heading'>Delete Confirmation!</h4>
          <p>Are you sure you want to delete, this action cannot be undone.</p>
          <hr />
          <div className='d-flex justify-content-between'>
            <button className='btn btn-outline-light' onClick={cancelDelete}>
              cancel
            </button>
            <button className='btn btn-danger' onClick={confirmDelete}>
              delete
            </button>
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.question.questions,
    questionToRemove: state.question.questionToRemove,
  };
};

export default connect(mapStateToProps, { questionList, setQuestionToRemove, questionRemove })(Questions);
