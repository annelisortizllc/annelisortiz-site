import 'server-only'

const dictionary = () => import('@/content/dictionaries/es.json').then((m) => m.default)

export const getDictionary = async () => dictionary()
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
