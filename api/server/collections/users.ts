import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { User } from '../models';

export const Users = MongoObservable.fromExisting<User>(Meteor.users);
// export const Users = new MongoObservable.Collection<User>('users');