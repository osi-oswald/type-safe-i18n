// Warning: this file has been generated by bin/generate-i18n. Do not change or commit it!
// tslint:disable:max-line-length
// tslint:disable:ter-max-len
import { Translations } from './i18n-interface';

interface AllTranslations {
  [language: string]: Translations;
}

export const allTranslations: AllTranslations = {
  // this part is generated from de.json, en.json, ....
  de: {
    hello: {
      world: 'Welt'
    },
    example: {
      one: 'Du hast ein Beispiel',
      other: 'Du hast {count} Beispiele'
    },
    another: {
      very: {
        nested: {
          example: 'Ein sehr verschachteltes Beispiel'
        }
      }
    },
    some: {
      exampleWithVariables: 'Das {subject} ist {color}'
    }
  },
  en: {
    hello: {
      world: 'World'
    },
    example: {
      one: 'You have an example',
      other: 'You have {count} examples'
    },
    another: {
      very: {
        nested: {
          example: 'Another very nested example'
        }
      }
    },
    some: {
      exampleWithVariables: 'The {subject} is {color}'
    }
  }
  // until here
};
