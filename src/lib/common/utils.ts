/**
 * Concatenates a list of class names into a single string, filtering out any falsy values.
 *
 * @param {...string[]} classes - A list of class names to be concatenated.
 * @returns {string} A single string containing all truthy class names separated by spaces.
 */

export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  
  /**
   * Utility function to generate a class name string from a props object.
   *
   * @example
   * cnWithProps({ foo: true, bar: false }) // 'foo'
   *
   * @param {T} props - Object with boolean values
   * @returns {string} Class name string
   */
  export function cnWithProps<T extends Record<string, boolean>>(props: T) {
    return Object.entries(props)
      .filter(([value]) => value)
      .map(([key]) => key)
      .join(' ');
  }