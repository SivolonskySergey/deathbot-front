import {
  HomeOutlined,
  AutoGraphOutlined,
  MenuBookOutlined,
  SettingsOutlined,
  BookOnlineOutlined,
  LibraryAddCheck,
} from '@mui/icons-material';

export const navMenu = [
  {
    name: 'Главная',
    icon: <HomeOutlined />,
    path: '/',
    id: 1,
  },
  {
    name: 'Избранное',
    icon: <AutoGraphOutlined />,
    path: '/watchlist',
    id: 2,
  },
  {
    name: 'Новости',
    icon: <BookOnlineOutlined />,
    path: '/news',
    id: 3,
  },
  {
    name: 'Настройки',
    icon: <SettingsOutlined />,
    path: '/settings',
    id: 4,
  },
  {
    name: 'Цитаты',
    icon: <LibraryAddCheck />,
    path: '/quotes',
    id: 5,
  },
];
