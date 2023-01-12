import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import Navbar from '../../navbar/Navbar';
import Footer2 from '../../footer/Footer2';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  window.scrollTo({ top: 0, left: 0 });
  return (
    <div>
      <Navbar>

      </Navbar>


      <Container maxW={'7xl'} p="12">

        <Heading as="h1">Welcometo the easy blog</Heading>
        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between">
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <BlogTags tags={['Development', 'Health & Fitness']} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                New Courses
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
              "New courses added to our online learning platform!"
              In this news article, you can introduce the new courses that you have added to your online learning platform. Include details about the course content, the teacher, and any other relevant information. You can also include a promotion or discount to attract students to enroll.
            </Text>
            <BlogAuthor name="Jesica Marquez" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>


        <Divider marginTop="5" />

        <Box display="flex" flex-directio="row">
          <Wrap spacing="700px" marginTop="5">
            <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      transform="scale(1.0)"
                      src={
                        'https://www.omnisend.com/wp-content/uploads/2022/07/Expert-interview-Phillip-Jackson-600x301.png'
                      }
                      alt="some text"
                      objectFit="contain"
                      width="100%"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Link>
                </Box>
                <BlogTags tags={['JavaScript', 'Real World']} marginTop="3" />
                <Heading fontSize="xl" marginTop="2">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Expert Interview
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  "Tips for success in online learning"
                  We are excited to share with you an expert interview with [expert name], a leading authority on online learning.

                  In this interview, [expert name] shares their insights and tips for success in the online learning environment. They discuss the importance of setting goals, managing time effectively, and staying motivated. They also provide advice on how to choose the right online course or program and how to make the most of available resources.

                  [Expert name] has a wealth of experience in the field of online learning and their advice is sure to be valuable for anyone looking to succeed in this type of educational setting. We hope you find this interview helpful and that it provides you with the guidance you need to achieve your goals.
                </Text>
                <BlogAuthor
                  name="John Doe"
                  date={new Date('2021-04-06T19:01:27Z')}
                />
              </Box>
            </WrapItem>
          </Wrap>



          <Wrap spacing="700px" marginTop="5">
            <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      transform="scale(1.0)"
                      src={
                        'https://static.toiimg.com/thumb/msid-94473435,width-400,resizemode-4/94473435.jpg'
                      }
                      alt="some text"
                      objectFit="contain"
                      width="100%"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Link>
                </Box>
                <BlogTags tags={['AutoTest', 'Certification']} marginTop="3" />
                <Heading fontSize="xl" marginTop="2">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Introduction of new online learning tools
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  We are excited to announce the introduction of new online learning tools on our platform!

                  Our goal is to provide our students with the best possible learning experience, and these new tools will help us achieve that.

                  [List the new tools and describe their features and benefits].

                  We believe that these tools will greatly enhance the learning experience of our students and help them achieve their goals. We encourage all of our students to take advantage of these resources.

                  If you have any questions about these new tools, please don't hesitate to contact our support team. We are here to help you succeed.
                </Text>
                <BlogAuthor
                  name="John Doe"
                  date={new Date('2021-04-06T19:01:27Z')}
                />
              </Box>
            </WrapItem>
          </Wrap>

        </Box>

        <Box display="flex" flex-directio="row">
          <Wrap spacing="800px" marginTop="20">
            <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      transform="scale(1.0)"
                      src={
                        'https://solvico.es/wp-content/uploads/2022/02/Mesa-de-trabajo-85-copia-2-2.png'
                      }
                      alt="some text"
                      objectFit="contain"
                      width="100%"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Link>
                </Box>
                <BlogTags tags={['Meeting', 'People']} marginTop="3" />
                <Heading fontSize="xl" marginTop="2">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Online event:
                  </Link>
                </Heading>
                <Text fontSize="md" marginTop="2">
                  We are excited to announce an upcoming online event featuring successful professionals in various industries.

                  During this event, you will have the opportunity to hear from and ask questions to professionals who have achieved success in their careers. They will share their experiences and offer insights and advice on how to succeed in your chosen field.

                  The event will take place on [date and time] and will be held via [online platform]. It is open to all students and professionals who are interested in learning from successful individuals and advancing in their careers.

                  To register for the event, please follow the link below. We look forward to seeing you at the event!
                </Text>
                <BlogAuthor
                  name="John Doe"
                  date={new Date('2021-04-06T19:01:27Z')}
                />
              </Box>
            </WrapItem>
          </Wrap>


          <Wrap spacing="1000px" >
            <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
              <Box w="100%" marginLeft="150">
                <Box borderRadius="lg" overflow="hidden">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                      transform="scale(0.8)"
                      src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yHt1vviqOKDRj-2ow0VGfR-rVj6fZqEFeg&usqp=CAU'
                      }
                      alt="some text"
                      objectFit="contain"
                      width="80%"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Link>
                </Box>
                <BlogTags tags={['Courses']} marginTop="3" />
                <Heading fontSize="xl" marginTop="2" >
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    New online certification program
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2" >
                  Our program is designed for professionals looking to gain specialized skills and knowledge in their field. It consists of a series of courses and hands-on projects that will prepare you for industry-recognized certification exams.

                  Our program is taught by experienced industry professionals who are experts in their respective fields. The course content is practical and up-to-date, and is designed to give you the skills and knowledge you need to succeed in your career.

                  In addition to the coursework, our program also includes access to a network of professionals, job placement assistance, and ongoing support to ensure your success.

                  If you are interested in advancing your career and gaining industry-recognized certification, we encourage you to apply to our program. Spaces are limited, so be sure to apply early. We look forward to helping you achieve your career goals!

                </Text>
                <BlogAuthor
                  name="John Doe"
                  date={new Date('2021-04-06T19:01:27Z')}
                />
              </Box>
            </WrapItem>
          </Wrap>

        </Box>


        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>

        </VStack>
      </Container>

      <div>
        <Footer2>

        </Footer2>
      </div>
    </div>
  );
};

export default ArticleList;