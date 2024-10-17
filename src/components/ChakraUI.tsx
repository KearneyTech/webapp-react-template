import { Card, CardBody, ChakraProvider, extendTheme, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function ChakraUI() {
    const config = { 
        initialColorMode: 'dark',
        styles: {
            global: {
                'html, body': {
                    color: 'white'
                }
            }
        }
    };
    let theme = extendTheme({ config });

    return (
        <ChakraProvider theme={theme}>
            <Heading>Chakra UI</Heading>
            <Card maxW='md'>
                <CardBody>
                    <Image
                        src='/images/pch.jpeg'
                        alt='The coast by PCH'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text fontSize='2xl' color='blue.600'>Now hear this!</Text>
                        <Text fontSize='lg'>I really don't have anything to say.</Text>
                    </Stack>
                </CardBody>
            </Card>
        </ChakraProvider>
    );
}
