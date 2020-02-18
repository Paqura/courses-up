interface MenuItem {
  to: string;
  title: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { to: '/', title: 'Courses' },
  { to: '/archive', title: 'Archive' },
];