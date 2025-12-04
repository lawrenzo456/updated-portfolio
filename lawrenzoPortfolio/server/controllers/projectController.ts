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
    const queryString = 'SELECT * FROM "Projects"';
    const { rows } = await db.query(queryString); //set it to rows because we're trying to get the first row, the first instance of us getting to the query, and getting back what we want to.

    console.log(rows);
    res.locals.projects = rows[0];
    console.log(res.locals.projects);
    next();
  } catch (err: unknown) {
    return next({
      log: 'Error in project controller',
      status: 500,
      message: { err: 'Project Controller Error' },
    });
  }
};

export default projectController;
