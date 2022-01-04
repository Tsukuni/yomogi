import { FC } from 'react';
import { Text, Flex, Avatar, Grid, GridItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import Image from 'next/image';
import { Yomoot as YomootType } from '../types';
import { format } from 'date-fns';

export const Yomoot: FC<{
  yomoot: YomootType;
}> = ({ yomoot }) => (
  <Grid templateColumns='60px 1fr' padding='16px' borderBottom='1px solid #6E767D'>
    <GridItem marginRight='12px'>
      <Avatar name='yomogi' src='/icon2.jpg' width='48px' height='48px' borderColor='#045762' />
    </GridItem>
    <GridItem>
      <Flex>
        <Name>よもぎ</Name>
        <Text fontSize='15px' color='#6E767D'>
          @_yomogimogimogi・{format(new Date(yomoot.datetime), 'yyyy年MM月dd日')}
        </Text>
      </Flex>
      <Text fontSize='md' marginBottom={4}>
        {yomoot.content.split('\n').map((text, index) => {
          return (
            <>
              {text}
              {yomoot.content.split('\n').length !== index + 1 && <br />}
            </>
          );
        })}
      </Text>
      {yomoot.image && (
        <Image
          src={yomoot.image.url}
          width={yomoot.image.width}
          height={yomoot.image.height}
          layout='responsive'
          alt='image'
          className={image}
        />
      )}
    </GridItem>
  </Grid>
);

const Name = styled.span`
  font-weight: 700;
  margin-right: 4px;
`;

const image = css`
  border-radius: 16px;
  margin-top: 12px;
`;
