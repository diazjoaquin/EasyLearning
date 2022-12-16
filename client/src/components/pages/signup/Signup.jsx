import Navbar from "../../navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Footer2 from "../../footer/Footer2";
import { useAuth } from "../../context/Auth-context";


export default function SignupCard() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    setError("");
    try {
      await signup(email, password)
      setTimeout(function(){
        history.push("/");
      }, 2000);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }
  
    return (
      <div>
        <Navbar/>
        <div>
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                <Heading fontSize={'4xl'} textAlign={'center'}>
                  Sign up
                </Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                  to enjoy all of our cool features ✌️
                </Text>
              </Stack>
              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="fullName" isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input type="text"/>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="phoneNumber">
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="number" />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input type={showPassword ? 'text' : 'password'} id="password" onChange={(e) => setPassword(e.target.value)}/>
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      onClick={handleSubmit}
                      >
                      Sign up
                    </Button>
                    {error && <span>{error}</span>}
                  </Stack>
                  <Stack pt={6}>
                    <Text align={'center'}>
                      Already a user? <Link color={'blue.400'} to={'/login'}>Login</Link>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </div>
        <div>
          <Footer2/>
        </div>
      </div>
    )
  };
