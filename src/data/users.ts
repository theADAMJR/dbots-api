import { SavedUser, UserDocument } from './models/user';
import DBWrapper from './db-wrapper';
import { PartialUser } from '../api/modules/partial-users';

export default class Users extends DBWrapper<PartialUser, UserDocument> {
  protected async getOrCreate(user: PartialUser) {
    if (!user) return;
    if (user.bot)
      throw new TypeError(`Bots don't have accounts`);

    return await SavedUser.findById(user.id)
      ?? this.create(user);
  }

  async delete(user: PartialUser) {
    return await SavedUser.findByIdAndDelete(user.id);
  }

  protected async create(user: PartialUser) {
    return new SavedUser({ _id: user.id }).save();
  }
}
