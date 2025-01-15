// Fichier de configuration pour vitest.
// Utiliser pour personaliser les couleurs de sorti lorsqu'il y a par exemple des différence
// Entre deux snapshot.

import type { DiffOptions } from 'vitest'
import c from 'tinyrainbow'

export default {
  aIndicator: c.bold('--'),
  bIndicator: c.bold('++'),
  omitAnnotationLines: true,
} satisfies DiffOptions
