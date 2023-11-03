/**
 * Check if value is null
 *
 * @param {unknown} value value to be checked
 *
 * @return {boolean} Returns true if value is null
 */
const isNull = (value: unknown) => null === value

/**
 * Check if value is undefined
 *
 * @param {unknown} value
 *
 * @return {boolean} True if value is undefined
 */
const isUndefined = (value: unknown) => "undefined" === typeof value

/**
 * Check if value is an object
 *
 * @param {unknown} value value to be checked
 *
 * @return {boolean} returns True if value is an object type
 */
const isObject = (value: unknown) => {
	return "object" === typeof value && !isArray(value)
}

/**
 * Check if value is an array
 *
 * @param {unknown} value value to be checked
 *
 * @return {boolean} returns True if value is an object type
 */
const isArray = (value: unknown) => Array.isArray(value)

/**
 * Check if value is boolean type
 *
 * @param {unknown} value Value to to be checked
 *
 * @return {boolean} Returns true if boolean
 */
const isBoolean = (value: unknown) => "boolean" === typeof value

/**
 * Check if value is number
 *
 * @param  value Value to be checked
 *
 * @return {boolean} Returns true if value is number
 */
const isNumber = (value: unknown) => {
	return "number" === typeof value || !Number.isNaN(value)
}

/**
 * Check if variable is function
 *
 * @param {unknown} value Value to be checked
 * @return {boolean} Returns true if variable is function
 */
const isFunction = (value: unknown) => "function" === typeof value

/**
 * Check if value is string
 *
 * @param {unknown} value Value to be checked
 * @return {boolean} Returns true if a variable is string
 */
const isString = (value: unknown) => "string" === typeof value

/**
 * Check if string is empty
 *
 * @param {string | undefined} value string to be checked
 * @return {boolean} Returns true if string is blank
 */
const isEmpty = (value: string | undefined) => "" === value

/**
 * Capitalize text
 *
 * @param {string} string Text to be capitalized
 *
 * @return {string} Capitalize text
 */
const capitalizeText = (string: string) => {
	return string?.charAt(0)?.toUpperCase() + string?.slice(1)
}

/**
 * Returns the content if the condition is true, otherwise returns undefined.
 *
 * @param {boolean} condition - Condition to match.
 * @param {any}     content   - The content to return if the condition is true.
 * @param {any}     fallback  - The fallback to return
 *
 * @return {any|undefined} - The content or undefined.
 */
const conditionalValue = (
	condition: boolean,
	content: any = null,
	fallback: any = undefined,
): any | undefined => {
	// use condition as content if passed
	if (isNull(content)) {
		content = condition
	}

	return !!condition ? content : fallback
}

export {
	isNull,
	isUndefined,
	isObject,
	isArray,
	isBoolean,
	isNumber,
	isEmpty,
	capitalizeText,
	isFunction,
	isString,
	conditionalValue,
}
