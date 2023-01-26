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
 * @interface GetChildInfoAllOfApiKeysV2
 */
export interface GetChildInfoAllOfApiKeysV2 {
	/**
	 * Name of the key for version 2
	 * @type {string}
	 * @memberof GetChildInfoAllOfApiKeysV2
	 */
	name: string;
	/**
	 * API Key for version 2
	 * @type {string}
	 * @memberof GetChildInfoAllOfApiKeysV2
	 */
	key: string;
}

/**
 * Check if a given object implements the GetChildInfoAllOfApiKeysV2 interface.
 */
export function instanceOfGetChildInfoAllOfApiKeysV2(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'name' in value;
	isInstance = isInstance && 'key' in value;

	return isInstance;
}

export function GetChildInfoAllOfApiKeysV2FromJSON(json: any): GetChildInfoAllOfApiKeysV2 {
	return GetChildInfoAllOfApiKeysV2FromJSONTyped(json, false);
}

export function GetChildInfoAllOfApiKeysV2FromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetChildInfoAllOfApiKeysV2 {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		name: json['name'],
		key: json['key']
	};
}

export function GetChildInfoAllOfApiKeysV2ToJSON(value?: GetChildInfoAllOfApiKeysV2 | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		name: value.name,
		key: value.key
	};
}
