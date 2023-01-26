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
 * @interface RemoveCredits
 */
export interface RemoveCredits {
	/**
	 * Required if email credits are empty. SMS credits to be removed from the child account
	 * @type {number}
	 * @memberof RemoveCredits
	 */
	sms?: number;
	/**
	 * Required if sms credits are empty. Email credits to be removed from the child account
	 * @type {number}
	 * @memberof RemoveCredits
	 */
	email?: number;
}

/**
 * Check if a given object implements the RemoveCredits interface.
 */
export function instanceOfRemoveCredits(value: object): boolean {
	let isInstance = true;

	return isInstance;
}

export function RemoveCreditsFromJSON(json: any): RemoveCredits {
	return RemoveCreditsFromJSONTyped(json, false);
}

export function RemoveCreditsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveCredits {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		sms: !exists(json, 'sms') ? undefined : json['sms'],
		email: !exists(json, 'email') ? undefined : json['email']
	};
}

export function RemoveCreditsToJSON(value?: RemoveCredits | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		sms: value.sms,
		email: value.email
	};
}
