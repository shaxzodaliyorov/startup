import {
	Avatar,
	Box,
	Card,
	CardBody,
	Heading,
	HStack,
	Icon,
	Image,
	Stack,
	Text,
	useToast,
} from '@chakra-ui/react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { format } from 'date-fns';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsFillStopCircleFill } from 'react-icons/bs';
import { useSpeechSynthesis } from 'react-speech-kit';
import { voiceLanguages } from '../../config/constants';
import { TimeReadingText } from '../../helpers/time.helpers';
import { ArticleDetailedProps } from './article-detailed.props';

const ArticleDetailedPageComponent = ({ article }: ArticleDetailedProps) => {
	const { t } = useTranslation();

	const [myVoice, setMyVoice] = useState();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const toast = useToast();
	const router = useRouter();

	const onEnd = () => {
		toast({
			title: 'The End',
			status: 'info',
			position: 'top-right',
			isClosable: true,
		});
	};

	const { speak, voices, cancel, speaking, supported } = useSpeechSynthesis({ onEnd });

	useEffect(() => {
		const lng = Cookies.get('i18next');
		const currentLanguage = voiceLanguages.find(item => item.language === lng);
		const supportLanguage = voiceLanguages.map(c => c.voiceUrl);
		const allSupportVoices = voices.filter(item => supportLanguage.includes(item.voiceURI));
		setMyVoice(allSupportVoices.find(item => item.lang === currentLanguage?.codes));
	}, [voices, router]);

	const startSpeak = () => {
		setIsLoading(false);

		setTimeout(() => {
			setIsLoading(true);
		}, 3800);
	};

	return (
		<>
			<Card>
				<CardBody>
					<Box
						w={'full'}
						h={{ base: '30vh', lg: '60vh' }}
						backgroundImage={`url(${article.image.url})`}
						key={article.id}
						backgroundPosition={'center'}
						backgroundRepeat={'no-repeat'}
						backgroundSize={'cover'}
						position={'relative'}
					>
						<Box pos={'absolute'} top={0} left={0} right={0} bottom={0} bg={'rgba(0,0,0,0.8)'}>
							<Stack
								justifyContent={'center'}
								spacing={3}
								w={{ base: '100%', lg: '70%' }}
								pl={{ base: 3, lg: 10 }}
								pos={'relative'}
								h={'full'}
							>
								<Heading color={'white'}>{article.title}</Heading>
								<Text color={'gray.400'}>{article.excerpt}</Text>
								<HStack>
									<Avatar src={article.author.avatar.url} />
									<Box>
										<Text color={'white'}>{article.author.name}</Text>
										<Text color={'gray.500'}>
											{format(new Date(article.createdAt), 'dd MMM,yyyy ')}•{' '}
											{TimeReadingText(article.discription.text)}{' '}
											{t('read_article', { ns: 'layout' })}
										</Text>
									</Box>
								</HStack>
							</Stack>
						</Box>
					</Box>
				</CardBody>
			</Card>
			<Box>
				{supported && myVoice && (
					<>
						<Box
							my={5}
							pos={'relative'}
							cursor={'pointer'}
							border={'1px'}
							w={'300px'}
							p={1}
							borderRadius={'lg'}
							maxH={'200px'}
							borderColor={'gray'}
						>
							{!speaking ? (
								<HStack
									onClick={() => {
										speak({
											text: `${t('start_reading_article', { ns: 'global' })} ${article.title} ${t(
												'article',
												{ ns: 'global' }
											)} ${article.discription.text}`,
											voice: myVoice,
										});
										startSpeak();
									}}
								>
									<Icon as={AiFillPlayCircle} w={10} h={10} />
									<Text>{t('play', { ns: 'global' })}</Text>
								</HStack>
							) : (
								<HStack onClick={cancel}>
									<Icon as={BsFillStopCircleFill} w={10} h={10} />
									<Text>{t('stop', { ns: 'global' })}</Text>
									{speaking && isLoading && (
										<Image
											alt={'wave'}
											pos={'absolute'}
											right={0}
											w={'50%'}
											src={'/images/wave.gif'}
										/>
									)}
								</HStack>
							)}
						</Box>
					</>
				)}
				<RichText
					content={article.discription.raw}
					renderers={{
						h1: ({ children }) => (
							<Heading as={'h1'} mt={2}>
								{children}
							</Heading>
						),
						h2: ({ children }) => (
							<Heading as={'h2'} mt={2}>
								{children}
							</Heading>
						),
						h3: ({ children }) => <Heading as={'h3'}>{children}</Heading>,
						h4: ({ children }) => <Heading as={'h3'}>{children}</Heading>,
						h5: ({ children }) => <Heading as={'h3'}>{children}</Heading>,
						bold: ({ children }) => (
							<Text fontWeight={'bold'} as={'h3'}>
								{children}
							</Text>
						),
						p: ({ children }) => <Text my={4}>{children}</Text>,
						img: children => (
							<Image
								src={children.src}
								alt={children.altText}
								width={children.width}
								height={children.height}
							/>
						),
						a: children => <Image src={children.href} alt={children.title} />,
					}}
				/>
			</Box>
		</>
	);
};

export default ArticleDetailedPageComponent;
