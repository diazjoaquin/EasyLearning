import { Divider, Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, CloseButton } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import style from './Cart.module.css';



const Cart = () => {


    return (
        <section className={style.cart}>
            <div className={style.cont}>
                <div>
                <div><h1 className={style.h1}>Shopping Cart</h1></div>
                    <br></br>
                    <h3 className={style.h3}>1 Course in cart</h3>
                    <Divider orientation='horizontal' />
                    <div w="1000px">
                        <Card
                        w="600px"
                        h="150px"
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CloseButton className={style.x}/>
                                <CardBody>
                                <Heading size='md'>Course Name</Heading>

                                <Text py='2'>
                                    By: Proffesor
                                </Text>
                                <Text py='.5'>
                                    4.5 ⭐⭐⭐⭐⭐ (24,123 ratings)
                                </Text>
                                <Text py='.5'>
                                    $65.00
                                </Text>
                                </CardBody>
                                <CardFooter>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </div>
                </div>
                <div className={style.checkout}>
                    <h3>Total</h3>
                    <p>$65.00</p>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                        Checkout
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Cart;