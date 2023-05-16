import first from './first'

export interface Options {
  name?: string
  age?: number
}

export const second = (options: Options): void => {
  first(options)
  console.log('second:', options.name, options.age)
}

export default second
