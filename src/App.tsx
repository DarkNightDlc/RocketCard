import { useState } from 'react'
import { AbsoluteCenter, Avatar, Button, Center, Flex, HStack, Image, SimpleGrid, Stack, Tag, TagLabel, Text, VStack } from '@chakra-ui/react'
import Card from './components/Card'
import { api } from './services/api'

function App() {

  const [colorCard, setColorCard] = useState<string>('#0E1218')

  const handleRandomColor = ()=>{
    const newColor = '#'+ Math.floor(Math.random()*16777215).toString(16)
    
    setColorCard(newColor)
    // newColor !== colorCard ? setColorCard('#' + newColor) : handleRandomColor()
  }

  return (
    <Center as="main" minH="99vh">
  
      <SimpleGrid 
        columns={[1,1,1,2]}
        spacing={['35px',"150px"]}
        maxW={['full','1440px']}
        maxH={[null,'793px']}
        px={[null,"100px"]}
        py="20px"
        alignItems='center'
      >
        
        <Card  colorCard={colorCard}/>

        <VStack spacing="33px" >
          <Text fontSize="20px" fontWeight='400'>
            Customizar Rocketcard
          </Text>
          <Button
            bg="bg"
            border='2px
            solid'
            borderColor="borderButton"
            borderRadius="15px"
            px="46px"
            py="20px"
            size='15px'
            fontWeight='400'
            onClick={()=> handleRandomColor()}
            _hover={{
              filter: 'auto',
              brightness:'40%'
            }}
          >
            Gerar Background
          </Button>
        </VStack>
      </SimpleGrid>
    </Center>
  )
}

export default App
