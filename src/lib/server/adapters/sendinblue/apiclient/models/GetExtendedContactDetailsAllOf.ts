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
import type { GetExtendedContactDetailsAllOfStatistics } from './GetExtendedContactDetailsAllOfStatistics';
import {
	GetExtendedContactDetailsAllOfStatisticsFromJSON,
	GetExtendedContactDetailsAllOfStatisticsFromJSONTyped,
	GetExtendedContactDetailsAllOfStatisticsToJSON
} from './GetExtendedContactDetailsAllOfStatistics';

/**
 *
 * @export
 * @interface GetExtendedContactDetailsAllOf
 */
export interface GetExtendedContactDetailsAllOf {
	/**
	 *
	 * @type {GetExtendedContactDetailsAllOfStatistics}
	 * @memberof GetExtendedContactDetailsAllOf
	 */
	statistics: GetExtendedContactDetailsAllOfStatistics;
}

/**
 * Check if a given object implements the GetExtendedContactDetailsAllOf interface.
 */
export function instanceOfGetExtendedContactDetailsAllOf(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'statistics' in value;

	return isInstance;
}

export function GetExtendedContactDetailsAllOfFromJSON(json: any): GetExtendedContactDetailsAllOf {
	return GetExtendedContactDetailsAllOfFromJSONTyped(json, false);
}

export function GetExtendedContactDetailsAllOfFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetExtendedContactDetailsAllOf {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		statistics: GetExtendedContactDetailsAllOfStatisticsFromJSON(json['statistics'])
	};
}

export function GetExtendedContactDetailsAllOfToJSON(
	value?: GetExtendedContactDetailsAllOf | null
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		statistics: GetExtendedContactDetailsAllOfStatisticsToJSON(value.statistics)
	};
}
