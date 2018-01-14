export const DEFAULT_PICTURE_URL = '/assets/default-profile-pic.svg';

export enum MessageType {
  TEXT = <any>'text'
}

export enum QuestionType {
  TEXT = <any>'text'
}

export enum LevelType {
  TEXT = <any>'text'
}

export enum MediaType {
  TEXT = <any>'text'
}

export enum TestType {
  TEXT = <any>'text'
}

export interface Profile {
  name?: string;
  picture?: string;
}

export interface Message {
  _id?: string;
  chatId?: string;
  senderId?: string;
  content?: string;
  createdAt?: Date;
  type?: MessageType;
  ownership?: string;
}

export interface Chat {
  _id?: string;
  title?: string;
  picture?: string;
  lastMessage?: Message;
  memberIds?: string[];
}

export interface User extends Meteor.User {
  profile?: Profile;
}

export interface Media {
  _id?: string;
  content?: string;
  ownership?: string;
  createdAt?: Date;
  type?: MediaType;
  lastModifiedBy?: User;
  lastModifiedAt?: Date;
  history: string[];
}

export interface Question {
  _id?: string;
  localeTag?: string;
  content?: string;
  ownership?: User;
  createdAt?: Date;
  lastModifiedBy?: User;
  lastModifiedAt?: Date;
  type?: QuestionType;
  level?: LevelType;
  answers?: Answer[];
  rightAnswers?: Answer[];
  medias?: Media[];
  history: string[];
}

export interface Answer {
  _id?: string;
  localeTag?: string;
  content?: string;
  medias?: Media[];  
}

export interface Test {
  _id?: string;
  titleTag: string;
  ownership?: User;
  createdAt?: Date;
  lastModifiedBy?: User;
  lastModifiedAt?: Date;
  questions?: Question[];
  type?: TestType;
  history: string[];
}

export interface Lession {
  _id?: string;
  titleTag?: string;
  content?: string;
  medias?: Media[];
  subLession: Lession[];
}