import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.send('Hellouuuuuuuuuuuuuuu')
    }
}

export const indexController = new IndexController();