import { Query } from '../db/index';

const getBlogTags = (blogid: number) => Query(`SELECT t.name FROM blogtags bt JOIN tags t ON t.id = bt.tagid WHERE bt.blogid = ?;`, [blogid]);

export default {
getBlogTags
}