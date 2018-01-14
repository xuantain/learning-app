import { MongoObservable } from "meteor-rxjs";
import { Answer } from "../models";

export const answers = new MongoObservable.Collection<Answer>('answers');