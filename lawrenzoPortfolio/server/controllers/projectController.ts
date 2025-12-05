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
    const queryString = 'SELECT * FROM "Projects" ORDER BY "id"';
    const query = await db.query(queryString); //set it to rows because we're trying to get the first row, the first instance of us getting to the query, and getting back what we want to.

    // console.log(query);
    const rows = query['rows'];
    // console.log(rows);
    console.log(rows[0]['project_link']);
    res.locals.projects = rows[0];
    // console.log(res.locals.projects);
    return next();
  } catch (err: unknown) {
    return next({
      log: 'Error in project controller',
      status: 500,
      message: { err: 'Project Controller Error' },
    });
  }
};

export default projectController;
