import classnames from "classnames"

/**
 * Generate classnames based on the prop vars
 *
 * @param {string}                           base
 * @param {Record<string, boolean>} variants
 * @param {string}                           extraClassNames extra class names
 *
 * @return {string} classnames
 */

const generateClassNames = (
	base: string,
	variants: Record<string, boolean> = {},
	extraClassNames?: string,
) => {
	// append variant's class name
	const classes = Object.keys(variants).map((attr) => ({
		[`${base}--${attr}`]: !!variants[attr],
	}))

	return classnames(base, classes, extraClassNames)
}

/**
 * Break an array into chunks of a specified size
 *
 * @param {any[]}  arr  - The array to be chunked
 * @param {number} size - The size of each chunk
 *
 * @return {any[][]} - An array of arrays containing the chunks
 */
const chunkArray = <T>(arr: T[], size: number) => {
	const chunkedArray = []

	// Iterate through the input array, creating chunks of the specified size
	for (let i = 0; i < arr.length; i += size) {
		// Use Array.slice to extract a chunk of the array
		const chunk = arr.slice(i, i + size)

		// Add the chunk to the result array
		chunkedArray.push(chunk)
	}

	return chunkedArray
}

export { generateClassNames, chunkArray }
