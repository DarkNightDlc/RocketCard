import { Avatar, Box, Center, HStack, Image, List, ListIcon, ListItem, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiBookMarkLine, RiGroupLine, RiMapPin2Line } from 'react-icons/ri'
import { CgWorkAlt } from 'react-icons/cg'
import { api } from "../services/api";

interface Props {
    colorCard: string;
}

export default function Card({colorCard}:Props){

    const [user, setUser] = useState({
        name: undefined,
        followers: null,
        following: null,
        company: null,
        location: null,
        repository: null,
    });

    useEffect(() => {
        (async function loadProducts() {
            const {data} = await api.get('/users/DarkNightDlc');
    
            const user = {
                name: data.name,
                followers: data.followers,
                following: data.following,
                company: data.company,
                location: data.location,
                repository: data.public_repos,
                avatar: data.avatar_url,
            }
    
            setUser(user);
        })()

    }, [])

        console.log(user)

    return(
        <Center px="15px" py="24px" maxW="438px" h="700px" borderRadius="50px" bg="bg">
            <VStack
                alignItems="start"
                bg={colorCard}
                h='full'
                w="full"
                overflow="hidden"
                borderRadius="50px"
                position="relative"
            >
                <Tag gap="20px" bg="transparent" mb="31px" mt="37.78px" ml="49.58px">
                    <Image
                        border="2px solid"
                        color="text"
                        borderRadius='full'
                        boxSize='54px'
                        src='/logo.svg'
                        alt={user.name} 
                    />
                    <TagLabel textShadow='1px 1px black' fontSize="24px" fontWeight="400" color="text">{user.name}</TagLabel>
                </Tag>
                <Box position="relative">
                    <Avatar
                        name={user.name}
                        boxSize={['auto',"372px"]}
                        src={user.avatar}
                        border="10px solid"
                        color="purple.100"
                        position='relative'
                        left="76px"
                    />
                    <List
                        spacing="8px"
                        px="20px"
                        py="33px"
                        position="absolute"
                        left="21px"
                        top="200px"
                        border="1px solid black"
                        rounded="50px"
                        bgGradient='linear(to-b, black, #464545, #3E3838)'
                        opacity="0.9"
                        textShadow='1px 1px black'
                    >
                        <ListItem display="flex" alignItems='center' gap='9px' fontSize='16px' fontWeight="400">
                            <ListIcon as={RiGroupLine} w='20px' h='20px'/> 
                            <Text>{user.followers}</Text>
                            <Text>Seguidores</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems='center' gap='9px' fontSize='16px' fontWeight="400">
                            <ListIcon as={RiGroupLine} w='20px' h='20px'/> 
                            <Text>{user.following}</Text>
                            <Text>Seguindo</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems='center' gap='9px' fontSize='16px' fontWeight="400">
                            <ListIcon as={RiBookMarkLine} w='20px' h='20px'/> 
                            <Text>{user.followers}</Text>
                            <Text>Repositórios</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems='center' gap='9px' fontSize='16px' fontWeight="400">
                            <ListIcon as={CgWorkAlt} w='20px' h='20px'/> 
                            <Text>{user.company === null ? "Aberto a Propostas" : user.company }</Text>
                        </ListItem>
                        <ListItem display="flex" alignItems='center' gap='9px' fontSize='16px' fontWeight="400">
                            <ListIcon as={RiMapPin2Line} w='20px' h='20px'/> 
                            <Text>{user.location}</Text>
                        </ListItem>
                    </List>
                    
                </Box>
                <Tag size='20px' fontWeight="400" gap="20px" bg="transparent" alignSelf="end" pt="60px" pr='12px'>
                    <Image
                      boxSize='34px'
                      src='/logo.svg'
                    />
                    <TagLabel fontSize="24px" fontWeight="400" color="text" textShadow='1px 1px black'>ROCKETCARD</TagLabel>
                </Tag>
            </VStack>
        </Center>
    )
}