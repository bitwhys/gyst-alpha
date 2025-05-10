// Tremor chartColors [v0.1.0]

export type ColorUtility = 'bg' | 'stroke' | 'fill' | 'text'

export const chartColors = {
  // replace with radix colors: blue
  blue: {
    bg: 'bg-(--blue-9)',
    stroke: 'stroke-(--blue-9)',
    fill: 'fill-(--blue-9)',
    text: 'text-(--blue-9)',
  },
  // replace with radix colors: jade
  jade: {
    bg: 'bg-(--jade-9)',
    stroke: 'stroke-(--jade-9)',
    fill: 'fill-(--jade-9)',
    text: 'text-(--jade-9)',
  },
  // replace with radix colors: violet
  violet: {
    bg: 'bg-(--violet-9)',
    stroke: 'stroke-(--violet-9)',
    fill: 'fill-(--violet-9)',
    text: 'text-(--violet-9)',
  },
  // replace with radix colors: amber
  amber: {
    bg: 'bg-(--amber-9)',
    stroke: 'stroke-(--amber-9)',
    fill: 'fill-(--amber-9)',
    text: 'text-(--amber-9)',
  },
  // replace with radix colors: gold (our gray)
  gray: {
    bg: 'bg-(--color-gray-9)',
    stroke: 'stroke-(--color-gray-9)',
    fill: 'fill-(--color-gray-9)',
    text: 'text-(--color-gray-9)',
  },
  // replace with radix colors: cyan
  cyan: {
    bg: 'bg-(--cyan-9)',
    stroke: 'stroke-(--cyan-9)',
    fill: 'fill-(--cyan-9)',
    text: 'text-(--cyan-9)',
  },
  // replace with radix colors: pink
  pink: {
    bg: 'bg-(--pink-9)',
    stroke: 'stroke-(--pink-9)',
    fill: 'fill-(--pink-9)',
    text: 'text-(--pink-9)',
  },
  // replace with radix colors: lime
  lime: {
    bg: 'bg-(--lime-9)',
    stroke: 'stroke-(--lime-9)',
    fill: 'fill-(--lime-9)',
    text: 'text-(--lime-9)',
  },
  // replace with radix colors: crimson
  crimson: {
    bg: 'bg-(--crimson-9)',
    stroke: 'stroke-(--crimson-9)',
    fill: 'fill-(--crimson-9)',
    text: 'text-(--crimson-9)',
  },
} as const satisfies {
  [color: string]: {
    [key in ColorUtility]: string
  }
}

export type AvailableChartColorsKeys = keyof typeof chartColors

export const AvailableChartColors: AvailableChartColorsKeys[] = Object.keys(
  chartColors
) as Array<AvailableChartColorsKeys>

export const constructCategoryColors = (
  categories: string[],
  colors: AvailableChartColorsKeys[]
): Map<string, AvailableChartColorsKeys> => {
  const categoryColors = new Map<string, AvailableChartColorsKeys>()
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length])
  })
  return categoryColors
}

export const getColorClassName = (
  color: AvailableChartColorsKeys,
  type: ColorUtility
): string => {
  const fallbackColor = {
    bg: 'bg-gray-500',
    stroke: 'stroke-gray-500',
    fill: 'fill-gray-500',
    text: 'text-gray-500',
  }
  return chartColors[color]?.[type] ?? fallbackColor[type]
}

// Tremor getYAxisDomain [v0.0.0]

export const getYAxisDomain = (
  autoMinValue: boolean,
  minValue: number | undefined,
  maxValue: number | undefined
) => {
  const minDomain = autoMinValue ? 'auto' : (minValue ?? 0)
  const maxDomain = maxValue ?? 'auto'
  return [minDomain, maxDomain]
}

// Tremor hasOnlyOneValueForKey [v0.1.0]

export function hasOnlyOneValueForKey(
  array: any[],
  keyToCheck: string
): boolean {
  const val: any[] = []

  for (const obj of array) {
    if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
      val.push(obj[keyToCheck])
      if (val.length > 1) {
        return false
      }
    }
  }

  return true
}
