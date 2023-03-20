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
/**
 *
 * @export
 * @interface GetIpFromSender
 */
export interface GetIpFromSender {
	/**
	 * ID of the dedicated IP
	 * @type {number}
	 * @memberof GetIpFromSender
	 */
	id: number;
	/**
	 * Dedicated IP
	 * @type {string}
	 * @memberof GetIpFromSender
	 */
	ip: string;
	/**
	 * Domain associated to the IP
	 * @type {string}
	 * @memberof GetIpFromSender
	 */
	domain: string;
	/**
	 * Weight of the IP
	 * @type {number}
	 * @memberof GetIpFromSender
	 */
	weight: number;
}

/**
 * Check if a given object implements the GetIpFromSender interface.
 */
export function instanceOfGetIpFromSender(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'id' in value;
	isInstance = isInstance && 'ip' in value;
	isInstance = isInstance && 'domain' in value;
	isInstance = isInstance && 'weight' in value;

	return isInstance;
}

export function GetIpFromSenderFromJSON(json: any): GetIpFromSender {
	return GetIpFromSenderFromJSONTyped(json, false);
}

export function GetIpFromSenderFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetIpFromSender {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json['id'],
		ip: json['ip'],
		domain: json['domain'],
		weight: json['weight']
	};
}

export function GetIpFromSenderToJSON(value?: GetIpFromSender | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		id: value.id,
		ip: value.ip,
		domain: value.domain,
		weight: value.weight
	};
}
