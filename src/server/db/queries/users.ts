import { Query } from '../index';

const findOneByEmail = async (email: string) => Query(`SELECT * FROM authors WHERE email = '${email}' LIMIT 1`);

const getOneById = async (id: number) => Query(`SELECT * FROM authors WHERE id = ${id} LIMIT 1`);

const insert = async (user: any) => Query(`INSERT INTO authors (email, password) VALUES ?`, user);

export default {
    findOneByEmail,
    getOneById,
    insert
}