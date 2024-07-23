import mongoose from 'mongoose';
import logger from '../common/logger';

const { DB_URI, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

mongoose.Promise = Promise;
mongoose.connect(DB_URI!, {
  user: DB_USER,
  pass: DB_PASSWORD,
  dbName: DB_NAME,
});

mongoose.connection.on('connected', () => {
  logger.debug('Connection has been established successfully.');
});

mongoose.connection.on('error', (error) => {
  logger.warn(error, 'Unable to connect to the database');
});

export default mongoose;
