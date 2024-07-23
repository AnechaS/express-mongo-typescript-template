import createHttpError from 'http-errors';
import httpStatus from 'http-status';
import User from './user.model';
import { MESSAGE } from '@/common/constants';
import type { CreateUserValues, FindUserOptions, UpdateUserValues } from './user.interface';

// TODO: Filters data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const find = async (query?: FindUserOptions) => {
  return User.find();
};

// TODO: Filters data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const count = async (query?: FindUserOptions) => {
  return User.countDocuments();
};

const findById = async (id: string) => {
  const user = await User.findById(id);
  if (!user) {
    throw createHttpError(httpStatus.NOT_FOUND, MESSAGE.RESOURCE_NOT_FOUND);
  }

  return user;
};

const create = async (data: CreateUserValues) => {
  return User.create(data);
};

const update = async (id: string, data: UpdateUserValues) => {
  const user = await findById(id);
  Object.assign(user, data);
  return user.save();
};

const destroy = async (id: string) => {
  const user = await findById(id);
  return user.deleteOne();
};

export default {
  find,
  count,
  findById,
  create,
  update,
  destroy,
};
