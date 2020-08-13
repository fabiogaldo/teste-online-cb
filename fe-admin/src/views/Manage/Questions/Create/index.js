import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../../../Layouts/Manage';
import { getFormData } from '../../../../helpers/form';
import { questionCreate } from '../../../../actions/QuestionActions';

import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const initialValues = {
  question: '',
  correct: '',
  options: Array(5).fill({
    desc: '',
  }),
};

const validateSchema = yup.object({
  question: yup.string().required('REQRUIRED'),
  correct: yup.string().required('Seleciona a correta'),
  options: yup.array(
    yup.object({
      desc: yup.string().max(10, 'max 10').required('me preenche cabra'),
    })
  ),
});

const Create = ({ question, questionCreate }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    console.log(data);
    //questionCreate(data);
  };

  if (question) {
    return <Redirect to='/manage/questions' />;
  }

  return (
    <Layout>
      {/* <h1>Create Question</h1>
      <div>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label>Question title:</label>
            <input type='text' className='form-control' name='label' />
          </div>
          <hr></hr>
          <div className='form-group'>
            <label>1st option</label>
            <input type='text' className='form-control form-option' name='option' />
          </div>
          <div className='from-group form-check'>
            <label className='form-check-label'>
              <input type='radio' name='isCorrect' value='1' />
              <span className='form-check-sign'></span>
              Is Correct?
            </label>
          </div>
          <div className='form-group'>
            <label>2nd option</label>
            <input type='text' className='form-control form-option' name='option[]' />
          </div>
          <div className='from-group form-check'>
            <label className='form-check-label'>
              <input type='radio' name='isCorrect' value='2' />
              <span className='form-check-sign'></span>
              Is Correct?
            </label>
          </div>
          <div className='form-group'>
            <label>3rd option</label>
            <input type='text' className='form-control form-option' name='option[]' />
          </div>
          <div className='from-group form-check'>
            <label className='form-check-label'>
              <input type='radio' name='isCorrect' value='3' />
              <span className='form-check-sign'></span>
              Is Correct?
            </label>
          </div>
          <div className='form-group'>
            <label>4th option</label>
            <input type='text' className='form-control form-option' name='option[]' />
          </div>
          <div className='from-group form-check'>
            <label className='form-check-label'>
              <input type='radio' name='isCorrect' value='4' />
              <span className='form-check-sign'></span>
              Is Correct?
            </label>
          </div>
          <div className='form-group'>
            <label>5th option</label>
            <input type='text' className='form-control form-option' name='option[]' />
          </div>
          <div className='from-group form-check'>
            <label className='form-check-label'>
              <input type='radio' name='isCorrect' value='5' />
              <span className='form-check-sign'></span>
              Is Correct?
            </label>
          </div>
          <div>
            <button className='btn btn-primary btn-round'>Submit</button>
          </div>
        </form>
      </div> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          values.options[values.correct].isCorrect = true;
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            Question <Field name='question' />
            <ErrorMessage name={`question`} component='div' className='field-error' />
            <FieldArray name='options'>
              {() => (
                <div>
                  {values.options.length > 0 &&
                    values.options.map((option, index) => (
                      <div className='row' key={index}>
                        <div className='col'>
                          <label htmlFor={`options.${index}.desc`}>Desc</label>
                          <Field name={`options.${index}.desc`} placeholder='Jane Doe' type='text' />
                          <ErrorMessage name={`options.${index}.desc`} component='div' className='field-error' />
                        </div>
                        <div className='col'>
                          <Field type='radio' name='correct' value={index.toString()} />
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </FieldArray>
            <ErrorMessage name={`correct`} component='div' className='field-error' />
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            <button type='submit'>Invite</button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { question: state.question.question };
};

export default connect(mapStateToProps, { questionCreate })(Create);
