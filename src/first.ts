import main from './main'

export interface Options {
  name?: string
  age?: number
}

export const first = (options: Options): void => {
  main(options)
  console.log('first:', options.name, options.age)
}

export default first
