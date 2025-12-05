// import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
// import apiRouter from '../routes/api.ts';
import projectController from './controllers/projectController.ts';

const app = express();

const PORT = 3000;
// const PORT = 5173;

app.use(express.json());
app.use(express.static('./dist'));
app.use(express.urlencoded({ extended: true }));
// const ProjectRouter = express.Router();
// app.use('/', ProjectRouter);
// app.use('/api', apiRouter);

//static files

//routes
//app.use so the info is served regardless of any button being pushed instead of app.get cause not getting
app.use(
  '/projects',
  projectController.getProject,
  (req: Request, res: Response) => {
    console.log('got to /projects');
    return res.status(200).json(res.locals.projects);
  }
);

//catch all for failed routes
app.use((req, res) => res.status(404).send('Page not found.'));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;
