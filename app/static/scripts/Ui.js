/**
 * @module engine/core/Ui
 */

'use strict'

import Buttons from './modules/buttons/buttons.js'

export default class Ui {

	

	/**
	 *
	 * @param {String} type
	 */
	theme (type) {

		if (this.empty(type)) this.theme = 'light'

		this.theme = type

		document.querySelector('#BaseUiJSBlock').classList.add(this.theme)

	}

	bth (selector, type, options) {
		return Buttons.createButton(selector, type, options)
	}

	/**
	 * Connects two objects into one
	 * @param {Object} out
	 */
	static extend (out) {
		out = out || {}

		for (let i = 1; i < arguments.length; i++) {
			let obj = arguments[i]

			if (!obj) continue

			for (let key in obj) {
				if (obj.hasOwnProperty(key)) {
					if (typeof obj[key] === 'object') {
						out[key] = obj[key].slice(0)
					} else {
						out[key] = this.extend(out[key], obj[key])
					}
				} else {
					out[key] = obj[key]
				}
			}
		}

		return out
	}

}