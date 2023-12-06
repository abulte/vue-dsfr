import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vitepress'
import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'
import { hmrFix } from './plugins/hmrFix.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueDsfr",
  description: "Une documentation pour les utilisateurs de VueDsfr",

  cleanUrls: true,
  appearance: { listenToStorageChanges: false }, // handling this in Story.vue itself to avoid flickering

  rewrites: {
    'src/components/:comp/:comp.md': 'composants/:comp.md',
    'docs/:splat*': ':splat*',
  },

  themeConfig: {
    docFooter: {
      next: 'Page suivante',
      prev: 'Page précédente',
    },
    logo: '/nouveau-logo-marianne-gouvernement.png',
    nav: [
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Références',
        items: [
          { text: 'Composants', link: '/composants' },
          { text: 'Nuxt 3', link: '/nuxt/' },
          { text: 'Types', link: '/types' }
        ]
      },
      {
        text: 'Liens',
        items: [
          {
            text: 'Système de Design Français',
            link: 'https://www.systeme-de-design.gouv.fr/',
            target: '_blank'
          }
        ]
      }
    ],
    outline:{
      level: [2, 3],
      label: 'Sur cette page :',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher...',
            buttonAriaLabel: 'Rechercher'
          },
          modal: {
            backButtonTitle: 'effacer la recherche',
            displayDetails: 'afficher les détails',
            noResultsText: 'Aucun résultat pour ',
            resetButtonTitle: 'resetButtonTitle',
            footer: {
              selectText: 'aller à ce texte',
              navigateText: 'naviguer dans les résultats',
              closeText: 'fermer'
            }
      }
        },
      }
    },
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'VueDSFR',
              link: '/guide/',
            },
            {
              text: 'L’écosystème',
              link: '/ecosysteme',
            },
            {
              text: 'Les icônes',
              link: '/icones',
            },
            {
              text: 'Guide du développeur',
              link: '/guide-developpeur',
            },
          ]
        },
        {
          text: 'Tous les types',
          link: '/types',
          items: []
        },
        {
          text: 'Tous les composants',
          link: '/composants',
          collapsed: false,
          items: [
            {
              text: 'DsfrAlert',
              link: '/composants/DsfrAlert.md',
            },
            {
              text: 'DsfrBadge',
              link: '/composants/DsfrBadge.md',
            },
            {
              text: 'DsfrNotice',
              link: '/composants/DsfrNotice.md',
            },
          ]
        },
        {
          text: 'Recettes nuxt',
          link: '/nuxt/',
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dnum-mi/vue-dsfr' },
      { icon: 'discord', link: 'https://discord.gg/jbBJ9769ZZ' }
    ]
  },

  vite: {
    plugins: [
      whyframe({ defaultSrc: '/_frame', components: [{ name: 'Story' }] }),
      whyframeVue({ include: /\.(vue|md)$/ }),
      hmrFix()
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../src', import.meta.url)),
      }
    },

    // not needed, just there to prevent reload on cold start
    optimizeDeps: {
      include: [
        '@vueuse/core',
      ]
    }
  },
})
