/**
 * @module engine/core/utils
 */

 'use strict'

export default class _ {

	static randomNumber (min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	static isset (vars) {
		return typeof vars !== 'undefined' && vars !== null
	}

	static empty (vars) {
		return typeof vars === 'undefined' && vars === null
	}

	static type (obj) {
		// Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase()
		return obj === null ? String(obj) : {}[toString.call(obj)] || 'object'
	}

	static parseHTML (str) {
		let tmp = document.implementation.createHTMLDocument()
		tmp.body.innerHTML = str
		return tmp.body.children
	}

	static map (arr, callback) {
		arr.map(callback)
	}

	static isWindow (obj) {
		return obj !== null && obj === obj.window
	}

	static likeArray (obj) {
		let length = !!obj && 'length' in obj && obj.length,
			type   = this.type(obj)

		return 'function' !== type && !this.isWindow(obj) && (
			'array' === type || length === 0 || (typeof length == 'number' && length > 0 && (length - 1) in obj)
		)
	}

	static each (arr, callback) {
		if (this.likeArray(arr)) {
			for (let i = 0; i < arr.length; i++) {
				if (callback.call(arr[i], i, arr[i]) === false) {
					return arr
				}
			}
		} else {
			for (let key in arr) {
				if (callback.call(arr[key], key, arr[key]) === false) {
					return arr
				}
			}
		}
	}

	static proxy (fn, ctx) {
		fn.apply(ctx, arguments)
	}


	static contains (el, child) {
		return el !== child && el.contains(child)
	}

}