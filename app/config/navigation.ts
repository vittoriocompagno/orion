interface NavigationItem {
  name: string;
  href: string;
}

interface SourceItem extends NavigationItem {
  available: boolean;
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  { name: 'PANORAMICA', href: '/dashboard' },
  { name: 'RECENSIONI', href: '/dashboard/reviews' },
  { name: 'GENERA LINK', href: '/dashboard/reviews/generate' },
  { name: 'RISPOSTE', href: '/dashboard/responses' },
  { name: 'ANALYTICS', href: '/dashboard/analytics' },
  { name: 'IMPOSTAZIONI', href: '/dashboard/settings' },
];

export const SOURCE_NAVIGATION: SourceItem[] = [
  { name: 'GOOGLE', href: '/dashboard/sources/google', available: true },
  { name: 'TRIPADVISOR', href: '/dashboard/sources/tripadvisor', available: false },
]; 