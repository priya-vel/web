import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
    @Query(_ => String)
    async getHello(): Promise<string> {
        return "hello world"
    }
}
