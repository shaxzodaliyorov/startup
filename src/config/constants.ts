import { FiCompass } from "react-icons/fi"
import { AiFillApple, AiFillFacebook, AiOutlineUnorderedList } from "react-icons/ai"
import { BsBook, BsGooglePlay, BsSpotify } from "react-icons/bs"
import { GiNotebook } from "react-icons/gi"
import { FaAws, FaInfo, FaQuestion, FaYandex } from "react-icons/fa"
import { MdContactEmergency, MdOutlineAttachMoney } from "react-icons/md"
import { AnnouncementIcons, CodingIcons, DesignIcons, EngIcons, LaptopIcons, PersonIcons, PrintIcons, RusIcon, TurkIcon, UzbIcons } from "../icons"
import { IoLogoJavascript } from "react-icons/io"
import { SiRedux } from "react-icons/si"
import { CourseType } from "../interface/courses.interface"

export const navigation = [
   {
      title: "sidebar_title_1",
      links: [
         {
            label: "sidebar_title_1_explore",
            route: "/",
            icon: FiCompass
         },
         {
            label: "sidebar_title_1_courses",
            route: "/courses",
            icon: AiOutlineUnorderedList
         },
         {
            label: "sidebar_title_1_books",
            route: "/books",
            icon: BsBook
         },
         {
            label: "sidebar_title_1_articles",
            route: "/articles",
            icon: GiNotebook
         },
      ]
   },
   {
      title: "sidebar_title_2",
      links: [
         {
            label: "sidebar_title_2_about",
            route: "/about",
            icon: FaInfo
         },
         {
            label: "sidebar_title_2_contact",
            route: "/contact",
            icon: MdContactEmergency
         },
         {
            label: "sidebar_title_2_pricing",
            route: "/pricing",
            icon: MdOutlineAttachMoney
         },
         {
            label: "sidebar_title_2_faq",
            route: "/faq",
            icon: FaQuestion
         },
      ]
   }
]

export const categories = [
   {
      name: 'design_category',
      id: 1,
      icon: DesignIcons,
   },
   {
      name: 'sales_marketing_category',
      id: 2,
      icon: AnnouncementIcons,
   },
   {
      name: 'development_it_category',
      id: 3,
      icon: CodingIcons,
   },
   {
      name: 'engineering_architecture_category',
      id: 4,
      icon: PrintIcons,
   },
   {
      name: 'personl_development_category',
      id: 5,
      icon: PersonIcons,
   },
   {
      name: 'finance_accounting_category',
      id: 6,
      icon: LaptopIcons,
   },
];

export const SponorShipCompony = [SiRedux, AiFillFacebook, IoLogoJavascript, AiFillApple, FaAws, BsSpotify, BsGooglePlay, FaYandex]


export const language = [
   {
      nativeLng: "English",
      lng: "en",
      icon: EngIcons
   },
   {
      nativeLng: "Uzbek",
      lng: "uz",
      icon: UzbIcons
   },
   {
      nativeLng: "Türkçe",
      lng: "tr",
      icon: TurkIcon
   },
   {
      nativeLng: "Русский",
      lng: "ru",
      icon: RusIcon
   },
]

export const coursesFilter = [
   {
      title: 'filter_category_title',
      id: 'category',
      categoryList: [
         { name: 'fitler_category_item_1', id: 'web-developments' },
         { name: 'fitler_category_item_2', id: 'mobile-application' },
         { name: 'fitler_category_item_3', id: 'graphic-design' },
         { name: 'fitler_category_item_4', id: 'artificial-intelligence' },
      ],
   },
   {
      title: 'fitler_rating_title',
      id: 'rating',
      categoryList: [
         { name: 'fitler_rating_item_1', id: '4.5' },
         { name: 'fitler_rating_item_2', id: '4' },
         { name: 'fitler_rating_item_3', id: '3.5' },
         { name: 'fitler_rating_item_4', id: '3' },
      ],
   },
   {
      title: 'filter_language_title',
      id: 'language',
      categoryList: [
         { name: 'filter_language_item_1', id: 'en' },
         { name: 'filter_language_item_2', id: 'ru' },
         { name: 'filter_language_item_3', id: 'uz' },
         { name: 'filter_language_item_4', id: 'tr' },
      ],
   },
   {
      title: 'filter_level_title',
      id: 'level',
      categoryList: [
         { name: 'filter_level_item_1', id: 'beginner' },
         { name: 'filter_level_item_2', id: 'medium' },
         { name: 'filter_level_item_3', id: 'proffessional' },
      ],
   },
];


export const Courses: CourseType[] = [
   {
      image: 'https://media.graphassets.com/3gf746AKRbWNjB8OCoEB',
      title: 'JavaScript full course',
      slug: 'javascript',
      lessonCount: 96,
      totalHour: 13.6,
      level: 'Beginner',
      price: 20,
      reviewAvarage: 4.5,
      reviewCount: 200,
      author: {
         firstName: 'Samar',
         lastName: 'Badriddinov',
         avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
      },
   },
   {
      image: 'https://media.graphassets.com/54vR0DStGoFuZBVkFwWQ',
      slug: 'vuejs',
      title: 'VueJS full course',
      lessonCount: 30,
      totalHour: 10.6,
      level: 'Beginner',
      price: 20,
      reviewAvarage: 4.5,
      reviewCount: 250,
      author: {
         firstName: 'Samar',
         lastName: 'Badriddinov',
         avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
      },
   },
   {
      image: 'https://media.graphassets.com/65rcPxsLT9ysJDisXF80',
      title: 'ReactJS full course',
      slug: 'reactjs',
      lessonCount: 70,
      totalHour: 19,
      level: 'Beginner',
      price: 20,
      reviewAvarage: 4.5,
      reviewCount: 150,
      author: {
         firstName: 'Samar',
         lastName: 'Badriddinov',
         avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
      },
   },
   {
      image: 'https://media.graphassets.com/xactyo8TtyTIkAcMWvSm',
      slug: 'vuex',
      title: 'VueX full course',
      lessonCount: 120,
      totalHour: 24.6,
      level: 'Beginner',
      price: 20,
      reviewAvarage: 5,
      reviewCount: 250,
      author: {
         firstName: 'Samar',
         lastName: 'Badriddinov',
         avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
      },
   },
   {
      image: 'https://media.graphassets.com/Ql2hDpJhQsaBT3inNuZ4',
      title: 'Redux full course',
      slug: 'redux',
      lessonCount: 39,
      totalHour: 8.2,
      level: 'Beginner',
      price: 20,
      reviewAvarage: 4.9,
      reviewCount: 120,
      author: {
         firstName: 'Samar',
         lastName: 'Badriddinov',
         avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
      },
   },
   {
      image: 'https://media.graphassets.com/mDcwhbguQpyM74jb18M5',
      title: 'NodeJS full course',
      slug: 'nodejs',
      lessonCount: 56,
      totalHour: 20.6,
      level: 'Beginner',
      price: 20,
      reviewAvarage: 5,
      reviewCount: 250,
      author: {
         firstName: 'Samar',
         lastName: 'Badriddinov',
         avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
      },
   },
];

export const booksCategory = [
   {
      label: 'filter_all_category',
      id: 'all-categories',
   },
   {
      label: 'filter_programmin',
      id: 'programming',
   },
   {
      label: 'filter_design',
      id: 'design',
   },
   {
      label: 'filter_business',
      id: 'business',
   },
   {
      label: 'filter_history',
      id: 'history',
   },
   {
      label: 'filter_writing',
      id: 'writing',
   },
   {
      label: 'filter_lifestyle',
      id: 'lifestyle',
   },
];

export const faq = [
   {
      question: 'faq_question_1',
      answer: 'faq_answer_1',
   },
   {
      question: 'faq_question_2',
      answer: 'faq_answer_2',
   },
   {
      question: 'faq_question_3',
      answer: 'faq_answer_3',
   },
   {
      question: 'faq_question_4',
      answer: 'faq_answer_4',
   },
   {
      question: 'faq_question_5',
      answer: 'faq_answer_5',
   },
   {
      question: 'faq_question_6',
      answer: 'faq_answer_6',
   },
   {
      question: 'faq_question_7',
      answer: 'faq_answer_7',
   },
];


export const avatars = [
   {
      name: 'Ryan Florence',
      url: 'https://bit.ly/ryan-florence',
   },
   {
      name: 'Segun Adebayo',
      url: 'https://bit.ly/sage-adebayo',
   },
   {
      name: 'Kent Dodds',
      url: 'https://bit.ly/kent-c-dodds',
   },
   {
      name: 'Prosper Otemuyiwa',
      url: 'https://bit.ly/prosper-baba',
   },
   {
      name: 'Christian Nwamba',
      url: 'https://bit.ly/code-beast',
   },
];