import type { ContentBlockCardWithBgInterface, ContentBlockInterface } from '@/shared/interfaces/index'

export const contentBlockDataWithoutImage: ContentBlockInterface = {
  title: 'la fabrique  de pâââtes',
  content: '<p>Au cœur de la vallée du Giffre, à Verchaix, Arvi’pâtes perpétue l’art des pâtes artisanales dans sa fabrique située sous le restaurant.</p><p>Ici, chaque étape de fabrication est réalisée sur place avec des ingrédients rigoureusement sélectionnés, pour créer des pâtes au goût authentique, inspirées par les richesses de notre belle région et notre savoir-faire traditionnel.</p>',
  cta: 'En savoir plus',
}
export const contentBlockData: ContentBlockInterface = {
  title: 'arvi’pââââtes, un lieu convivial et une cuisine gourmande',
  content: `<p>Chez Arvi’pâtes, nous travaillons en circuit court. Nos produits sont issus de l’agriculture raisonnée et tous nos plats sont fait maison et toujours de saison.</p><p>Mais ce qui nous caractérise, c’est avant tout notre belle équipe ! Ici, on aime bien rigoler et on trinque facilement. Arvi’pâtes c’est un lieu de vie épicurien, reflet de notre magnifique terroir. Le soir l’ambiance est à la fête, conversation interminable, rires... Ce qu’on aime le plus ? écouter vos blagounettes avec joyeuseté !</p>`,
  cta: 'Réserver une table',
  mediaLeft: {
    id: '56bhue',
    file: {
      url: '/images/pate_1.png',
      alternativeText: 'pate',
    },
  },
  mediaRight: {
    id: '56bhvfue',
    file: {
      url: '/images/pate_2.png',
      alternativeText: 'pate',
    },
  },
}

export const contentBlockCardWithBgData: ContentBlockCardWithBgInterface = {
  content: {
    content: '<p>Nous cuisinons des produits frais et locaux. Nous sommes très fiers de collaborer avec nos producteurs, tous situés dans la région Auvergne-Rhône-Alpes. Ce sont eux qui, en travaillantla terre de manière responsable, nous fournissent de quoi vous cuisiner de bons plats de saison.</p><p>Nous vous invitons midi et soir à venir déguster une cuisine simple mais exigeante où nous mêlons recettes de grand-mère et convivialité.</p>',
    cta: 'Voir la cartaa',
    title: 'Au menu aujourd\'hui...',
  },
  background: {
    id: 'hufir67hje',
    file: {
      url: '/images/bg.jpg',
      alternativeText: 'background',
    },
  },
}
