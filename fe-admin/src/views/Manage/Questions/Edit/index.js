import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../Layouts/Manage';
import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';

import { questionGet, questionUpdate, questionClear } from '../../../../actions/QuestionActions';
import { getFormData } from '../../../../helpers/form';
import { connect } from 'react-redux';

const Edit = ({ question, questionGet, questionUpdate, questionClear }) => {
  const { id } = useParams();

  useEffect(() => {
    questionGet(id);

    return () => {
      questionClear();
    };
  }, [id, questionGet, questionClear]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    questionUpdate(id, data);
  };

  return (
    <Layout>
      <h1>Edit Question</h1>
      <div>
        <form onSubmit={submitHandler}>
          <FormGroup label='Label' name='label' data={question} type='text' />
          <FormCheck label='Is Correct?' name='isCorrect' data={question} />
          <div>
            <button className='btn btn-primary btn-round'>Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    question: state.question.question,
  };
};

export default connect(mapStateToProps, { questionGet, questionUpdate, questionClear })(Edit);
