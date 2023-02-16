import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  index = 'post_list';
  constructor(private readonly elasticSearchService: ElasticsearchService) {}

  async addIndex() {
    const bodyList = Array(10)
      .fill({})
      .map((_, i) => ({
        id: i,
        title: `${i}번째 제목`,
        content: `${i}번째 내용`,
      }));

    const res = await Promise.all(
      bodyList.map(
        async (v) =>
          await this.elasticSearchService.index({ index: this.index, body: v }),
      ),
    );

    await this.elasticSearchService.indices.refresh({ index: this.index });

    return res;
  }

  async search() {
    return await this.elasticSearchService.search({
      index: this.index,
      body: {
        query: {
          multi_match: {
            fields: ['title', 'content'],
            query: '0번째 제목',
          },
        },
      },
    });
  }

  async delete() {
    return this.elasticSearchService.indices.delete({
      index: this.index,
    });
  }
}
