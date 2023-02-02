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
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Footer2 from "../../footer/Footer2";
import { useAuth } from "../../context/Auth-context";
import axios from "axios";


export default function SignupCard() {

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: 0,
    emailAddress: "",
    password: ""
  })

  const { signup, user, emailVerification } = useAuth();

  const handleSubmit = async (e) => {
    setError("");
    try {
      history.push("/verification");
      await signup(form.emailAddress, form.password);
      await axios.post("/createUser", form);
      let response = await axios.get(`/getUserByEmail?email=${form.emailAddress}`);
      // esto tiene que estar encriptado.
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <Navbar />
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
                      <Input name="fullName" type="text" onChange={(e) => handleChange(e)} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="phoneNumber">
                      <FormLabel>Phone Number</FormLabel>
                      <Input type="number" name="phoneNumber" onChange={(e) => handleChange(e)} />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="emailAddress" onChange={(e) => handleChange(e)} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} name="password" onChange={(e) => handleChange(e)} />
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
        <Footer2 />
      </div>
    </div>
  )
};
