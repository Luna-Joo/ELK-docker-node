import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchResolver } from './search.resolver';
import { SearchService } from './search.service';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        node: configService.get('ELASTIC_SEARCH_NODE'),
        auth: {
          username: 'elastic',
          password: 'changeme',
        },
      }),
    }),
  ],
  providers: [SearchResolver, SearchService],
})
export class SearchModule {}
