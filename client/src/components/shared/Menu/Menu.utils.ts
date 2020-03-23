interface MenuItem {
  to: string;
  title: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { to: '/', title: 'Boards' },
  { to: '/archive/boards', title: 'Archive' },
  { to: '/register', title: 'Register' },
  { to: '/login', title: 'Login' },
];