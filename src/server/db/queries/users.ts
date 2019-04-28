import { Query } from '../index';

const findOneByEmail = async (email: string) => Query(`SELECT * users WHERE email = '${email}' LIMIT 1`);

const getOneById = async (id: number) => Query(`SELECT * FROM users WHERE id = ${id} LIMIT 1`);

const insert = async (user: any) => Query(`INSERT INTO users (email, password) VALUES ?`, user);

export default {
    findOneByEmail,
    getOneById,
    insert
}