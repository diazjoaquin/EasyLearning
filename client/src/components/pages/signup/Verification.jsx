import { Button } from "@chakra-ui/button";
import { EmailIcon } from "@chakra-ui/icons";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Verification = () => {
    
    return (
      <section h='100vh'>
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='100vh'
        >
          <AlertIcon boxSize='40px' mr={0}/>
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Thank you for registering on EasyLearning!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              We send you an email of verirification.
            </AlertDescription>
            <br></br>
            <Link to='/'>
            <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
              Go Home!
            </Button></Link>
          </Alert>
        </section>    
        )
};

export default Verification;