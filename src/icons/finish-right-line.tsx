import { Icon, useColorModeValue } from '@chakra-ui/react';
import { IconProp } from './icons.props';

const FinishRightLine = ({ ...props }: IconProp) => {
   return (
      <Icon
         width='142'
         fill={useColorModeValue('gray.700', 'gray.200')}
         height='21'
         viewBox='0 0 142 21'
         xmlns='http://www.w3.org/2000/svg'
         {...props}
      >
         <path d='M141.9 5.4354C142.141 4.9382 141.933 4.34023 141.435 4.0998L133.333 0.181752C132.836 -0.0586784 132.238 0.149478 131.997 0.646682C131.757 1.14389 131.965 1.74186 132.462 1.98229L139.664 5.46499L136.182 12.6671C135.941 13.1643 136.149 13.7623 136.647 14.0027C137.144 14.2432 137.742 14.035 137.982 13.5378L141.9 5.4354ZM140.671 4.05565C140.193 4.22197 139.718 4.38684 139.243 4.55026L139.895 6.44108C140.371 6.27699 140.849 6.11146 141.329 5.94448L140.671 4.05565ZM136.421 5.51337C135.467 5.83537 134.521 6.15132 133.581 6.46124L134.208 8.3605C135.152 8.04912 136.102 7.73171 137.06 7.40829L136.421 5.51337ZM130.757 7.382C129.796 7.69119 128.843 7.99387 127.897 8.29004L128.494 10.1987C129.446 9.90088 130.404 9.59659 131.369 9.28582L130.757 7.382ZM125.056 9.1663C124.093 9.45877 123.138 9.74431 122.189 10.0229L122.753 11.9418C123.707 11.6615 124.669 11.3742 125.637 11.08L125.056 9.1663ZM119.323 10.8498C118.361 11.1221 117.406 11.387 116.459 11.6446L116.983 13.5746C117.938 13.3151 118.899 13.0483 119.867 12.7742L119.323 10.8498ZM113.566 12.4135C112.597 12.6649 111.636 12.9085 110.681 13.1442L111.16 15.0859C112.123 14.8482 113.092 14.6027 114.068 14.3493L113.566 12.4135ZM107.785 13.8396C106.808 14.0676 105.837 14.2872 104.873 14.4983L105.301 16.452C106.274 16.2389 107.254 16.0173 108.24 15.7873L107.785 13.8396ZM101.964 15.1134C100.985 15.3131 100.011 15.5038 99.0435 15.6857L99.4129 17.6513C100.391 17.4675 101.374 17.2748 102.363 17.0731L101.964 15.1134ZM96.1081 16.2131C95.1245 16.3816 94.1464 16.5407 93.1731 16.6905L93.4773 18.6672C94.4619 18.5157 95.4512 18.3548 96.4457 18.1844L96.1081 16.2131ZM90.2344 17.1163C89.2443 17.2508 88.2588 17.3754 87.2774 17.4903L87.5098 19.4767C88.5037 19.3604 89.5014 19.2342 90.5036 19.0981L90.2344 17.1163ZM84.3203 17.8078C83.3306 17.9044 82.3445 17.9909 81.3614 18.0673L81.5164 20.0613C82.5127 19.9838 83.512 19.8962 84.5146 19.7983L84.3203 17.8078ZM78.3958 18.2677C77.4033 18.3246 76.4132 18.3712 75.4251 18.4073L75.4982 20.406C76.5003 20.3693 77.5041 20.3221 78.5103 20.2644L78.3958 18.2677ZM72.4548 18.4849C71.4635 18.5004 70.4734 18.5054 69.4839 18.4999L69.4728 20.4998C70.4764 20.5054 71.4806 20.5004 72.486 20.4847L72.4548 18.4849ZM66.5122 18.4518C65.5227 18.4253 64.5332 18.3884 63.5431 18.3409L63.4474 20.3386C64.4516 20.3867 65.4551 20.4242 66.4587 20.4511L66.5122 18.4518ZM60.5768 18.1677C59.5901 18.0997 58.6022 18.0214 57.6123 17.9328L57.4339 19.9248C58.4373 20.0147 59.4389 20.094 60.4394 20.1629L60.5768 18.1677ZM54.654 17.6378C53.6735 17.5301 52.6905 17.4123 51.7045 17.2845L51.4474 19.2679C52.4462 19.3974 53.4421 19.5167 54.4357 19.6258L54.654 17.6378ZM48.7589 16.8743C47.7814 16.7288 46.8004 16.5736 45.8154 16.4086L45.485 18.3811C46.4818 18.5481 47.4748 18.7052 48.4644 18.8525L48.7589 16.8743ZM42.8895 15.8923C41.921 15.7127 40.9481 15.524 39.9703 15.326L39.5734 17.2862C40.5617 17.4863 41.5454 17.6772 42.525 17.8588L42.8895 15.8923ZM37.0527 14.711C36.0897 14.5002 35.1217 14.2806 34.1479 14.0522L33.6913 15.9994C34.6744 16.23 35.6521 16.4518 36.625 16.6647L37.0527 14.711ZM31.2583 13.353C30.3005 13.1142 29.337 12.8671 28.3673 12.6118L27.858 14.5458C28.836 14.8034 29.808 15.0526 30.7745 15.2936L31.2583 13.353ZM25.4883 11.8345C24.5405 11.5724 23.5866 11.3026 22.6261 11.0251L22.071 12.9465C23.0386 13.226 23.9999 13.4979 24.9552 13.7621L25.4883 11.8345ZM19.7574 10.1793C18.8148 9.89593 17.8657 9.60536 16.9097 9.30757L16.3149 11.2171C17.277 11.5168 18.2325 11.8093 19.1816 12.0946L19.7574 10.1793ZM14.0682 8.40782C13.1249 8.10439 12.1749 7.79414 11.2177 7.47708L10.5888 9.37564C11.5513 9.69446 12.5068 10.0065 13.4558 10.3117L14.0682 8.40782ZM8.40259 6.53211C7.46565 6.21352 6.52179 5.8886 5.57071 5.55736L4.9129 7.44608C5.86849 7.7789 6.81699 8.10542 7.75873 8.42564L8.40259 6.53211ZM2.75983 4.56754C2.2878 4.39954 1.81398 4.23004 1.33833 4.05903L0.661668 5.94108C1.1393 6.11281 1.61514 6.28304 2.08923 6.45176L2.75983 4.56754Z' />
      </Icon>
   );
};

export default FinishRightLine;