import { Mutation, Query, Resolver } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { SearchService } from './search.service';

@Resolver()
export class SearchResolver {
  constructor(private readonly searchService: SearchService) {}

  @Mutation(() => GraphQLJSON)
  indexTest() {
    return this.searchService.addIndex();
  }

  @Query(() => GraphQLJSON)
  searchTest() {
    return this.searchService.search();
  }

  @Mutation(() => GraphQLJSON)
  deleteTest() {
    return this.searchService.delete();
  }
}
