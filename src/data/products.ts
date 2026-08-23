export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  glyph: string // single glyph used in the product seal
}

export const products: Product[] = [
  {
    id: 'honey',
    name: 'Raw Honey',
    tagline: 'Unheated, uncut, straight from the comb',
    description:
      'Cold-extracted and never pasteurised, so the enzymes and pollen stay intact. Comes in wildflower and mustard-blossom varieties depending on season.',
    glyph: '⬡',
  },
  {
    id: 'dry-fruits',
    name: 'Dry Fruits',
    tagline: 'Almonds, cashews, walnuts, pistachios',
    description:
      'Sorted and graded by hand, roasted in small batches with no added oil or salt unless you ask for it.',
    glyph: '◆',
  },
  {
    id: 'muesli',
    name: 'Muesli',
    tagline: 'Rolled oats, seeds, and real dried fruit',
    description:
      'No refined sugar, no puffed filler. Just oats, nuts, seeds and fruit in a mix built to actually keep you full.',
    glyph: '◈',
  },
  {
    id: 'talbina',
    name: 'Talbina',
    tagline: 'Barley porridge mix, ground fine',
    description:
      'Whole barley, milled the traditional way and blended with milk powder and honey so it only needs hot water or milk.',
    glyph: '◉',
  },
  {
    id: 'dates',
    name: 'Dates',
    tagline: 'Ajwa, Medjool, and seasonal picks',
    description:
      'Sourced in small lots so quality doesn\u2019t drop with volume. Soft-textured, naturally sweet, no syrup dipping.',
    glyph: '●',
  },
  {
    id: 'omani-barfi',
    name: 'Omani Barfi',
    tagline: 'A Gulf-inspired take on a classic sweet',
    description:
      'Milk-based barfi finished with saffron, cardamom and a scatter of pistachio \u2014 made in small trays, not on a factory line.',
    glyph: '◇',
  },
]
