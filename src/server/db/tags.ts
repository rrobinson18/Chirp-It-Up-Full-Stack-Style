import { Query } from '../db/index';

const getAll = async () => Query(`SELECT * FROM tags`);

export default {
    getAll
}