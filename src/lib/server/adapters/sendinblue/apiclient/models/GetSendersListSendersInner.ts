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
import type { GetSendersListSendersInnerIpsInner } from './GetSendersListSendersInnerIpsInner';
import {
	GetSendersListSendersInnerIpsInnerFromJSON,
	GetSendersListSendersInnerIpsInnerFromJSONTyped,
	GetSendersListSendersInnerIpsInnerToJSON
} from './GetSendersListSendersInnerIpsInner';

/**
 *
 * @export
 * @interface GetSendersListSendersInner
 */
export interface GetSendersListSendersInner {
	/**
	 * Id of the sender
	 * @type {number}
	 * @memberof GetSendersListSendersInner
	 */
	id: number;
	/**
	 * From Name associated to the sender
	 * @type {string}
	 * @memberof GetSendersListSendersInner
	 */
	name: string;
	/**
	 * From Email associated to the sender
	 * @type {string}
	 * @memberof GetSendersListSendersInner
	 */
	email: string;
	/**
	 * Status of sender (true=activated, false=deactivated)
	 * @type {boolean}
	 * @memberof GetSendersListSendersInner
	 */
	active: boolean;
	/**
	 * List of dedicated IP(s) available in the account. This data is displayed only for dedicated IPs
	 * @type {Array<GetSendersListSendersInnerIpsInner>}
	 * @memberof GetSendersListSendersInner
	 */
	ips?: Array<GetSendersListSendersInnerIpsInner>;
}

/**
 * Check if a given object implements the GetSendersListSendersInner interface.
 */
export function instanceOfGetSendersListSendersInner(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'id' in value;
	isInstance = isInstance && 'name' in value;
	isInstance = isInstance && 'email' in value;
	isInstance = isInstance && 'active' in value;

	return isInstance;
}

export function GetSendersListSendersInnerFromJSON(json: any): GetSendersListSendersInner {
	return GetSendersListSendersInnerFromJSONTyped(json, false);
}

export function GetSendersListSendersInnerFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetSendersListSendersInner {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json['id'],
		name: json['name'],
		email: json['email'],
		active: json['active'],
		ips: !exists(json, 'ips')
			? undefined
			: (json['ips'] as Array<any>).map(GetSendersListSendersInnerIpsInnerFromJSON)
	};
}

export function GetSendersListSendersInnerToJSON(value?: GetSendersListSendersInner | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		id: value.id,
		name: value.name,
		email: value.email,
		active: value.active,
		ips:
			value.ips === undefined
				? undefined
				: (value.ips as Array<any>).map(GetSendersListSendersInnerIpsInnerToJSON)
	};
}