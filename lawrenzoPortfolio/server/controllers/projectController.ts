import type { RequestHandler, Request, Response, NextFunction } from 'express';

import db from '../models/projectModels';

interface ProjectController {
  getProject: RequestHandler;
}

const projectController = {} as ProjectController;

projectController.getProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryString = 'SELECT * FROM projects';
    const query = await db.query(queryString);

    console.log(query);
    res.locals.projects = query['rows'];
    console.log(res.locals.projects);
    return next();
  } catch (err) {
    return next({
      log: 'Error in project controller',
      status: 500,
      message: { err: 'projectController.getProject' },
    });
  }
};

export default projectController;
