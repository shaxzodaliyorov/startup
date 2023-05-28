import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { BiLogIn, BiLogInCircle, BiMenuAltLeft } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { language } from '../../config/constants';
import { DarkLogo, LightLogo } from '../../icons';
import { headerProps } from './header.props';
const Header = ({ onToggle }: headerProps): JSX.Element => {
	const router = useRouter();

	const { toggleColorMode, colorMode } = useColorMode();

	const { t, i18n } = useTranslation();

	const onLanguage = (lng: string) => {
		router.replace(router.asPath);
		i18n.changeLanguage(lng);
	};

	return (
		<Box
			w={'full'}
			pos={'fixed'}
			zIndex={99}
			bg={useColorModeValue('gray.50', 'gray.800')}
			color={useColorModeValue('gray.700', 'gray.200')}
			h={'10vh'}
			top={0}
			left={0}
			px={10}
			borderBottom='1px'
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
		>
			<Flex h={'full'} justifyContent={'space-between'} alignItems={'center'}>
				<HStack>
					<Icon as={BiMenuAltLeft} w={6} h={6} cursor='pointer' onClick={onToggle} />
					<Link href={'/'}>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}</Link>
				</HStack>
				<HStack>
					{/* <IconButton
						aria-label='support'
						icon={<MdContactSupport />}
						colorScheme={'cyan'}
						variant={'ghost'}
					/> */}
					<Menu placement='bottom'>
						<MenuButton
							aria-label='translate'
							as={Button}
							variant={'outline'}
							rightIcon={<TbWorld />}
							textTransform={'uppercase'}
							display={{ base: 'none', md: 'flex' }}
						>
							{i18n.resolvedLanguage}
						</MenuButton>
						<MenuList p={0} overflow={'hidden'}>
							{language.map((item, index) => (
								<MenuItem
									onClick={() => onLanguage(item.lng)}
									key={index}
									icon={<item.icon />}
									backgroundColor={i18n.resolvedLanguage === item.lng ? 'cyan.500' : ''}
								>
									{item.nativeLng}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					<IconButton
						onClick={toggleColorMode}
						aria-label='color-mode'
						icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
						colorScheme={'cyan'}
						variant={'outline'}
					/>
					<Button
						display={{ base: 'none', md: 'flex' }}
						onClick={() => router.push('/auth')}
						rightIcon={<BiLogIn size={'1.3rem'} />}
						colorScheme={'cyan'}
					>
						{t('login', { ns: 'layout' })}
					</Button>
					<IconButton
						display={{ base: 'flex', md: 'none' }}
						aria-label='login'
						icon={<BiLogInCircle />}
						onClick={() => router.push('/auth')}
						colorScheme={'cyan'}
						variant={'outline'}
					/>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Header;
