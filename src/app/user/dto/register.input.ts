import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@InputType()
export class RegisterUserInput {
  @Field(() => String, { description: "email address or mobile number is required" })
  userData: string;
}

@InputType()
export class RegisterUserConfirmInput {
  @Field(() => String, { description: "email address or mobile number is required" })
  userData: string;

  @Field(() => String, { description: "OTP is required" })
  otp: string;
}

@InputType()
export class RegisterUserAddPassword {
  @Field(() => String)
  password: string;
}

@InputType()
export class RegisterUserUpdateProfile {
  @Field(_ => String, { description: "name is empty" })
  name: string;
}

