import { MouseEvent, KeyboardEvent } from "react"

/**
 * Use this for onKeyDown callback when making a div or span element clickable
 *
 * @param {KeyboardEvent} event
 * @param {() => void}    callback
 */
const handleOnKeyDown = (
	event: React.KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
	callback?: (() => void) | undefined,
) => {
	if (event.key === "Enter" || event.key === " ") {
		if (callback) {
			callback()
		}
	}
}

/**
 * Handles common event operations like stopping propagation and preventing default behavior.
 *
 * @param {MouseEvent<unknown> | KeyboardEvent<unknown>} e               - The event object.
 * @param {boolean}                                      stopPropagation - If true, stops the event from further propagation in the event chain.
 * @param {boolean}                                      preventDefault  - If true, prevents the default behavior associated with the event.
 */
const handleEventDefault = (
	e: MouseEvent<unknown> | KeyboardEvent<unknown>,
	stopPropagation?: boolean,
	preventDefault?: boolean,
) => {
	if (stopPropagation) {
		e?.stopPropagation()
	}

	if (preventDefault) {
		e?.preventDefault()
	}
}

export { handleEventDefault, handleOnKeyDown }
