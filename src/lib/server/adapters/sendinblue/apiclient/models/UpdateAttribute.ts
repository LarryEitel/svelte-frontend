// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  |
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UpdateAttributeEnumerationInner } from './UpdateAttributeEnumerationInner';
import {
	UpdateAttributeEnumerationInnerFromJSON,
	UpdateAttributeEnumerationInnerFromJSONTyped,
	UpdateAttributeEnumerationInnerToJSON
} from './UpdateAttributeEnumerationInner';

/**
 *
 * @export
 * @interface UpdateAttribute
 */
export interface UpdateAttribute {
	/**
	 * Value of the attribute to update. Use only if the attribute's category is 'calculated' or 'global'
	 * @type {string}
	 * @memberof UpdateAttribute
	 */
	value?: string;
	/**
	 * List of the values and labels that the attribute can take. Use only if the attribute's category is "category". For example, [{"value":1, "label":"male"}, {"value":2, "label":"female"}]
	 * @type {Array<UpdateAttributeEnumerationInner>}
	 * @memberof UpdateAttribute
	 */
	enumeration?: Array<UpdateAttributeEnumerationInner>;
}

/**
 * Check if a given object implements the UpdateAttribute interface.
 */
export function instanceOfUpdateAttribute(value: object): boolean {
	let isInstance = true;

	return isInstance;
}

export function UpdateAttributeFromJSON(json: any): UpdateAttribute {
	return UpdateAttributeFromJSONTyped(json, false);
}

export function UpdateAttributeFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): UpdateAttribute {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		value: !exists(json, 'value') ? undefined : json['value'],
		enumeration: !exists(json, 'enumeration')
			? undefined
			: (json['enumeration'] as Array<any>).map(UpdateAttributeEnumerationInnerFromJSON)
	};
}

export function UpdateAttributeToJSON(value?: UpdateAttribute | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		value: value.value,
		enumeration:
			value.enumeration === undefined
				? undefined
				: (value.enumeration as Array<any>).map(UpdateAttributeEnumerationInnerToJSON)
	};
}
