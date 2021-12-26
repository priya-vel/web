import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import bcrypt from 'bcrypt'

export type UserDocument = User & Document;

@Schema({
  timestamps: true
})
@ObjectType()
export class User {
  @Field(_ => ID)
  _id: number;

  @Prop()
  @Field(_ => String)
  name: string;

  @Prop({ unique: true })
  @Field(_ => String)
  email: string;

  @Prop({ unique: true })
  @Field(_ => String)
  mobileno: string;

  @Prop()
  password: string;

  @Prop()
  @Field(_ => String)
  createdAt: string;

  @Prop()
  @Field(_ => String)
  updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.comparePassword = async function(pwd: string) {
  const user = this as UserDocument;
  return bcrypt.compare(pwd, user.password).catch(_ => false)
}
