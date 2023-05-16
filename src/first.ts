export interface Options {
  name?: string
  age?: number
}

export const first = (options: Options): void => {
  console.log('first:', options.name, options.age)
}

export default first
