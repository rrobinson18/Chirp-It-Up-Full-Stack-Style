import { Connection } from './index';
import { resolve } from 'path';
import { rejects } from 'assert';

export const all = async () => {
    return new Promise((resolve, reject) => {

        Connection.query('SELECT * from blogs', (err, results) => {
            if(err) {
                return reject(err); 
            }
            resolve(results);
        });
    })
}

export default {
    all
}