## What is ELK?

### Elasticsearch + Logstash + Kibana

### [Elasticsearch](https://www.elastic.co/kr/)

elasticsearch란 흔히 검색엔진이라고 말한다.

결론부터 말하자면, 데이터베이스에 SELECT에 대한 여러가지 편리한 기능을 제공하며, 역색인을 통해 빠른 속도로 데이터를 검색할 수 있는 것이다.

elasticsearch의 핵심 키워드는 `역색인(inverted-index)` 이다.

보통의 데이터베이스의 경우, 데이터를 `색인`을 통해 정렬함으로써 검색의 속도를 증가시킨다.
키워드를 정렬함으로써 문서의 위치를 찾는 것이다.

흔히 책의 목차는 각 페이지에 대한 컨텐츠를 찾기 쉽게 만들 수 있다는 예를 든다.

elasticsearch의 `역색인`의 경우 특정 키워드가 어디에서 사용되었는지를 목록화하여 키워드가 포함된 문서를 찾는 것이다.

흔히 책의 맨 뒷장에, 단어들이 어느 페이지에서 사용되었는지 보여주는 것을 예로 든다.

`색인`은 문서안에서 키워드를 찾아내는 것이고, `역색인`은 키워드를 통해 키워드가 사용된 문서를 찾아내는 과정이다.

`역색인`을 사용하면 데이터가 많아져도, 데이터를 나누어 색인이 생성된 곳에 넣기만하면 되기때문에 빠른 속도를 유지할 수 있다는 장점이 있지만, 최악의 경우 많은 인덱스를 생성하여 많은 메모리를 차지할 수 있다는 단점이 있다.

### [Logstash](https://www.elastic.co/kr/logstash/)

logstash는 데이터 수집 파이프라인이다.
기존의 데이터를 input, filter, output의 과정을 통해 elasticsearch에 넣어주는 역할을 한다.

logstash를 사용하지 않아도 다른 여러가지 대안이 있지만, 같은 [elastic](https://www.elastic.co/kr/about/) 플랫폼에서 제공하고 있는만큼, 여러가지 편의 기능을 제공하고 있다.

### [Kibana](https://www.elastic.co/kr/kibana/)

kibana는 데이터 시각화 툴이다.
위 과정을 통해 만들어진 데이터들을 그래프와 차트 등을 쉽고 확장성있게 활용할 수 있는 UI툴이다.

### ELKB = ELK + [Beat](https://www.elastic.co/kr/beats/)

최근에는 beat를 추가함으로써 ELKB stack이라고 부르기도 한다.

#### Beat란

beat는 logstash와 비슷한, 데이터 수집기로서의 역할을 한다.

logstash는 많은 데이터 처리 기능을 제공하고, 강력하고 유연한 도구인 반면,
beat는 특정 소스에서 데이터를 수집하고 전달하도록 설계된 경량 데이터가 수집기 이다.

### Is elasticsearch database?

그래서 검색엔진인 elasticsearch는 데이터베이스인가? 라는 물음이 자주 붙는다고 한다.

데이터베이스의 여러가지 기능을 제공하긴 하지만, 코어는 검색엔진으로써 역할을 하도록 설계되었기때문이다.

결론부터 말하자면, 데이터베이스라고 할 수는 있지만 메인데이터베이스로 사용하는 것은 추천하지 않는다는 것이다.

검색의 성능을 극대화한만큼, 데이터베이스로써의 다른 성능적인 부분은 양보했다고 볼 수 있기 때문이다.

2013년의 elastic 블로그의 글에서는 [Elasticsearch is a document oriented database](Elasticsearch is a document oriented database)라고 칭하고 있긴 하다.

### Getting started

#### Before Getting started

Download docker from [Official website](https://docs.docker.com/compose/install)

### Run

```bash
$ docker-compose --env-file ./.changeme.env up
```

#### [API server](http://localhost:8000/graphql)

#### [elasticsearch](http://localhost:9200/)

#### [kibana](http://localhost:5601/)
