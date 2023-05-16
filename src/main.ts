export interface Options {
  name?: string
  age?: number
}

export const main = (options: Options): void => {
  console.log('main:', options.name, options.age)
}

export default main
