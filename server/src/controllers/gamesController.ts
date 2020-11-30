import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public async list (req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async listOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if(game.length > 0) return res.json(game[0]);
        res.status(404).json({message: 'Juego no existe'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games SET ?', [req.body]);
        res.json({message: 'Game Saved.'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE games set ? WHERE ?', [req.body, id])
        res.json({text: 'Update a Game ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'Delete a Game ' + req.params.id});
    }

}

const gamesController = new GamesController();
export default gamesController;