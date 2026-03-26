import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import axios from 'axios'

// Add New Job
const addJob = async (newJob) => {
  await axios.post('/api/jobs', newJob);
  return;
}

// Delete Job
const deleteJob = async (jobId) => {
  await axios.delete(`/api/jobs/${jobId}`);
  return;
}

//Update Job 
const updateJob = async (job) => {
  await axios.put(`/api/jobs/${job.id}`, job);
  return;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/jobs/:id' element={<JobPage deleteJobFunc={deleteJob} />} loader={jobLoader} />
      <Route path='/add-job' element={<AddJobPage addJobfunc={addJob} />} shouldRevalidate={() => false} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobFunc={updateJob} />} loader={jobLoader}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App