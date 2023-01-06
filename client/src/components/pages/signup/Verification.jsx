import { Button } from "@chakra-ui/button";
import { EmailIcon } from "@chakra-ui/icons";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

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
              Thank you for registirinig!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Please check your email and verify your email adress.
            </AlertDescription>
            <br></br>
            <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
              Resend verification email
            </Button>
          </Alert>
        </section>    
        )
};

export default Verification;