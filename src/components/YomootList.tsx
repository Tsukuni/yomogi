import { Yomoot } from './Yomoot';
import { useInfiniteQuery } from 'react-query';
import { Yomoot as YomootType } from '../types';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner, Center } from '@chakra-ui/react';

type Page = {
  limit: number;
  totalCount: number;
  contents: YomootType[];
  offset: number;
};

export const YomootList = () => {
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery<Page>(
    'yomoot',
    async ({ pageParam = 0 }) => {
      const data = await fetch(
        `https://yomogi.microcms.io/api/v1/yomoot?offset=${pageParam}&limit=2`,
        {
          headers: {
            'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY as string,
          },
        },
      );

      const res = await data.json();

      return res;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.offset + 2 >= lastPage.totalCount) {
          return undefined;
        } else {
          return lastPage.offset + 2;
        }
      },
    },
  );

  return (
    <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
      {data?.pages?.map((page) => {
        return page.contents.map((obj) => {
          return <Yomoot key={obj.id} yomoot={obj} />;
        });
      })}
      {isFetching && (
        <Center marginTop={4}>
          <Spinner />
        </Center>
      )}
    </InfiniteScroll>
  );
};
