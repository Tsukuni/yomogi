import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@chakra-ui/react';
import {
  Heading,
  VStack,
  Center,
  Text,
  Avatar,
  Box,
  HStack,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import { FaBirthdayCake } from 'react-icons/fa';
import { YomootList } from '../components';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleChange = (number: number) => {
    setTabIndex(number);
  };

  return (
    <div>
      <Head>
        <title>よもったー</title>
        <meta name='description' content='よもぎちゃんのHP' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo
        title='よもったー'
        description='よもぎちゃん専用'
        twitter={{
          handle: '@tteooiyry',
          site: '@tteooiyry',
          cardType: 'summary_large_image',
        }}
      />

      <Center bg='#045762' color='#f3f2da'>
        <Column width={['600px']}>
          <Box position='relative'>
            <Image
              src='/image3.jpg'
              width={600}
              height={200}
              alt='bg'
              layout='responsive'
              quality={70}
              priority
            />
            <Avatar
              size='2xl'
              src='/icon2.jpg'
              showBorder
              borderColor='#045762'
              position='absolute'
              left='14px'
              bottom='-60px'
              borderWidth='5px'
              quality={70}
              priority='true'
              loading='eager'
            />
          </Box>
          <Box margin='16px' marginTop='64px'>
            <VStack align='stretch'>
              <Box>
                <Heading fontSize='20px'>よもぎ</Heading>
                <Text fontSize='15px' color='#6E767D'>
                  @_yomogimogimogi
                </Text>
              </Box>
              <Text fontSize='md'>飼い主以外に会うとうれしょんします</Text>
              <HStack spacing='4px' fontSize='15px' color='#6E767D'>
                <Center>
                  <FaBirthdayCake />
                </Center>
                <Center>2021/07/28</Center>
              </HStack>
              <HStack spacing='10px' fontSize='15px' color='#6E767D'>
                <Box>
                  <HStack>
                    <Text fontWeight='bold' color='#f3f2da'>
                      1
                    </Text>
                    <Text>フォロー中</Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Text fontWeight='bold' color='#f3f2da'>
                      150000
                    </Text>
                    <Text>フォワー</Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
          </Box>
          <Box marginTop='0px' color='#f3f2da'>
            <Tabs isFitted borderBottom='none' onChange={handleChange}>
              <TabList borderBottom='none'>
                <StyledTab>
                  <Box css={borderBox}>
                    ヨモート
                    {tabIndex === 0 && <Border />}
                  </Box>
                </StyledTab>
                <StyledTab>
                  <Box css={borderBox}>メディア {tabIndex === 1 && <Border />}</Box>
                </StyledTab>
              </TabList>
            </Tabs>
          </Box>

          <YomootList />
        </Column>
      </Center>
    </div>
  );
};

const Column = styled(Box)`
  min-height: 100vh;
  border-left: 1px solid #6e767d;
  border-right: 1px solid #6e767d;
`;

const StyledTab = styled(Tab)`
  color: #f3f2da !important;
  background: none;
  border: none;
  border-bottom: 1px solid #6e767d !important;
  box-shadow: none;
  margin: 0;
  padding: 0;
  &:focus {
    box-shadow: none;
    border-bottom: 1px solid #6e767d;
  }
  &:active {
    background: none;
    border-bottom: 1px solid #6e767d;
  }
`;

const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  align-self: center;
  bottom: 0px;
  right: 0px;
  border-radius: 9999px;
  display: inline-flex;
  background-color: #f3f2da;
`;

const borderBox = css({
  position: 'relative',
  paddingTop: '16px',
  paddingBottom: '16px',
  overflowWrap: 'break-word',
  fontWeight: 700,
});

export default Home;
