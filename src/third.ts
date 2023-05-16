export interface Options {
  name?: string
  age?: number
}

export const third = (options: Options): void => {
  console.log('third:', options.name, options.age)
}

export default third
