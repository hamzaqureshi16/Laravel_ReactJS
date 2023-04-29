import React from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link,useForm } from '@inertiajs/react';
import { useNavigate } from 'react-router-dom';

export default function AddTask({id}) {
  const navigate = useNavigate();

  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    description: '',
    due_date: '',
    status: 'pending',
    user_id : id
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('tasks.store'));
  };

  return (
    <>
      <Head>
        <title>Add Task</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h3>Add Task</h3>
              </div>
              <div className="card-body">
                <form onSubmit={submit}>
                  <div className="form-group">
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <TextInput
                      type="text"
                      name="title"
                      className="form-control"
                      value={data.title}
                      onChange={(e) => setData('title', e.target.value)}
                    />
                    {errors.title && (
                      <InputError>{errors.title[0]}</InputError>
                    )}
                  </div>
                  <div className="form-group">
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <textarea
                      name="description"
                      className="form-control"
                      value={data.description}
                      onChange={(e) => setData('description', e.target.value)}
                    ></textarea>
                    {errors.description && (
                      <InputError>{errors.description[0]}</InputError>
                    )}
                  </div>
                  <div className="form-group">
                    <InputLabel htmlFor="due_date">Due Date</InputLabel>
                    <input
                      type="date"
                      name="due_date"
                      className="form-control"
                      value={data.due_date}
                      onChange={(e) => setData('due_date', e.target.value)}
                    />
                    {errors.due_date && (
                      <InputError>{errors.due_date[0]}</InputError>
                    )}
                  </div>
                  <div className="form-group">
                    <InputLabel htmlFor="status">Status</InputLabel>
                    <select
                      name="status"
                      className="form-control"
                      value={data.status}
                      onChange={(e) => setData('status', e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <PrimaryButton className="mt-2" disabled={processing}>
                      Add Task
                    </PrimaryButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
