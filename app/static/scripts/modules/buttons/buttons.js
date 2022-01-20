/**
 * @module engine/core/ui/buttons
 */

'use strict'

import _ from '../../utils/utils.js'

let bthCodes = {

	'send': ({type, text}, n) =>
		`<input class="UiBth UiBthSend" name="UiBth_${n}" type="${type || 'button'}" value="${text || 'button'}" />`,
	'warn': ({type, text}, n) =>
		`<input UiBthSend="UiBth UiBthError" name="UiBth_${n}" type="${type || 'button'}" value="${text || 'button'}" />`,
	'standart': ({type, text}, n) =>
		`<input class="UiBth UiBthStandart" name="UiBth_${n}" type="${type || 'button'}" value="${text || 'button'}" />`

}

export default class Buttons {

	/**
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Object} options
	 */
	static createButton (selector, type, options) {

		const el =  document.querySelector(selector)
		const collection = ['send', 'error', 'standart']

		let baseBlock = document.createElement('div')
        baseBlock.id = 'BaseUiJSBlock'
        baseBlock.className = `Ui_${_.randomNumber(1, 999)}`
        el.appendChild(baseBlock)

		for (let el of collection) {
			if (type === el) {
				baseBlock.innerHTML = bthCodes[el](options, _.randomNumber(1, 999))
			}
		}

		baseBlock.childNodes[0].addEventListener('click', () => options.callback())

	}

}
