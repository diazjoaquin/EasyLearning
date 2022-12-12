import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, IconButton, Image, Button, Stack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { BiLike, BiCommentDetail } from "react-icons/bi"
import Comments from '../../comments/Comments'

const CardVideo = ({ urlVideo, comments, description, i, videoId }) => {
  return (
    <Card maxW='md'>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

            <Box>
              <Heading size='sm'>{`Titulo del video ${i}`}</Heading>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          {description}
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
      />

      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Box>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Button flex='1' variant='ghost' leftIcon={<BiCommentDetail />}>
                    Comments
                  </Button>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {comments.map((e, i) =>
                (

                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    key={i}
                  >
                    <Stack>
                      <CardBody>
                        <Heading size='sm'>{e.title}</Heading>
                        <Text py='2'>
                          {e.description}
                        </Text>
                      </CardBody>
                    </Stack>
                  </Card>
                ))}
                <Comments videoId={videoId} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </CardFooter >
    </Card >
  )
}

export default CardVideo