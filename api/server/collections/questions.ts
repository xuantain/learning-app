import { MongoObservable } from "meteor-rxjs";
import { Question } from "../models";

export const questions = new MongoObservable.Collection<Question>('questions');