import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id?: ObjectId;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

