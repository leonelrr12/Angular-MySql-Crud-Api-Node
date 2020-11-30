import { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GameRoutes {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', gamesController.create);
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.listOne);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }
}

const gameRoutes = new GameRoutes();
export default gameRoutes.router;