import background from '../assets/image/background.jpg'
import { Button, Flex, Heading, Image, Input, Link, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()
  return (
    <Flex h='100vh'>
      <Image
        src={background}
        alt='background'
        w='100vw'
        h='100vh'
        fit='cover'
        position='absolute'
        zIndex={0}
      />

      <Flex w='100%' h='100%' alignItems={'center'} justifyContent='center'>
        <VStack
          backgroundColor='white'
          position={['inherit', 'inherit', 'absolute']}
          left={['unset', 'unset', '200px']}
          zIndex={1}
          p={8}
          borderRadius={20}
          spacing={4}
          minW='360px'
        >
          <Heading color='#3C3030' fontSize={'3xl'} as='u'>
            Preencha as informações!
          </Heading>

          <VStack w='100%'>
            <Input variant='outline' w='100%' type='text' placeholder='Nome Completo' />
            <Input variant='outline' w='100%' type='email' placeholder='Email' />
            <Input variant='outline' w='100%' type='text' placeholder='CPF' />
            <Input variant='outline' w='100%' type='number' placeholder='Celular' />
            <Input variant='outline' w='100%' type='password' placeholder='Senha' />
            <Input variant='outline' w='100%' type='password' placeholder='Repetir senha' />
          </VStack>

          <Button
            width='100%'
            color='white'
            backgroundColor='#3C3030'
            _hover={{ backgroundColor: '#3C3030', opacity: '0.6' }}
          >
            Cadastrar
          </Button>

          <Link alignSelf={'end'} onClick={() => navigate('/')}>
            Voltar
          </Link>
        </VStack>
      </Flex>
    </Flex>
  )
}
