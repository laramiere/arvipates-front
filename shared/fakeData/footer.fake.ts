import type { FooterInterface } from '@/shared/interfaces'

export const footerData: FooterInterface = {
  scrollTopButton: {
    title: 'Retour en haut de la page',
  },
  socialLink: {
    title: 'Suivez-nous sur les réseaux sociaux !',
    items: [
      {
        ariaLabel: 'Nous suivre sur Instagram',
        link: '/',
        picto: 'Instagram',
      },
      {
        ariaLabel: 'Nous suivre sur facebook',
        link: '/',
        picto: 'Facebook',
      },
    ],
  },
  logo: {
    href: '/',
    picture: {
      id: 'nhuiobfhueoz789-',
      file: {
        url: '/images/logo_footer.png',
        alternativeText: 'Accueil arvi\'pâtes',
      },
    },
  },
  footerNav: [
    {
      content: 'Politique de confidentialité',
      href: '/',
    },
    {
      content: 'Crédits',
      href: '/',
    },
    {
      content: 'Mentions Légales',
      href: '/',
    },
  ],
}
