import DsfrTooltip from './DsfrTooltip.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tuile)
 */
export default {
  component: DsfrTooltip,
  title: 'Composants/DsfrTooltip',
  argTypes: {
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` du tooltip. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    content: {
      control: 'text',
      description: 'Contenu de votre bulle d’aide',
    },
    onHover: {
      control: 'boolean',
      description: 'Permet le basculement de la tuile en mode horizontal',
    },
    onClick: {
        control: 'boolean',
        description: 'Permet le basculement de la tuile en mode horizontal',
      },
  },
}

export const TooltipOnHover = (args) => ({
  components: {
    DsfrTooltip,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrTooltip
      :content="content"
      :onHover="onHover"
      :onClick="onClick"
    >
      Un élément intriguant
    </DsfrTooltip>
  `,

})
TooltipOnHover.args = {
  content: 'Un élément assez intriguant',
  onHover: true,
  onClick: false,
}

export const TooltipOnClick = (args) => ({
  components: {
    DsfrTooltip,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrTooltip
      :content="content"
      :onHover="onHover"
      :onClick="onClick"
    />
  `,

})
TooltipOnClick.args = {
  content: 'Une icône assez mystérieuse',
  onHover: false,
  onClick: true,
}
