
const Envs = {
  API_KEY: import.meta.env.VITE_API_KEY
}

export const init = (): void => {
  console.debug('env', Envs)
  const undefinedItems = Object.entries(Envs).filter(
    ([, val]) => val === undefined
  )

  if (undefinedItems.length) throw new Error('環境変数が不足しています')
}

export default Envs