import type {
  HeaderInterface,
  TopBarInterface,
} from '@/shared/interfaces'
import { PictoEnum } from '@/shared/interfaces'

export const topBarData: TopBarInterface = {
  social: [
    {
      ariaLabel: 'Suivez nous sur Instagram',
      link: '/',
      picto: PictoEnum.instagram,
    },
    {
      ariaLabel: 'Suivez nous sur facebook',
      link: '/',
      picto: PictoEnum.facebook,
    },
    {
      ariaLabel: 'Contactez-nous sur Whatsapp',
      link: '/',
      picto: PictoEnum.whatsapp,
    },
  ],
  address: {
    street: 'Les Hottes Ouest',
    city: 'VERCHAIX',
    zipcode: '74440',
    gmapLink: 'https://www.google.com/maps/place/Rte+des+Hottes,+74440+Verchaix/@46.0920687,6.6682631,17z/data=!3m1!4b1!4m6!3m5!1s0x478c01f50bf3c017:0xe6a09dc2f11a4224!8m2!3d46.092065!4d6.670838!16s%2Fg%2F11ld14t6rv?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D',
  },
}

export const headerData: HeaderInterface = {
  topBar: topBarData,
}
