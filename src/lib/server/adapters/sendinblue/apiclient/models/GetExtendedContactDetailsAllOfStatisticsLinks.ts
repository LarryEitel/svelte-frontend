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
 * @interface GetExtendedContactDetailsAllOfStatisticsLinks
 */
export interface GetExtendedContactDetailsAllOfStatisticsLinks {
	/**
	 * Number of clicks on this link for the campaign
	 * @type {number}
	 * @memberof GetExtendedContactDetailsAllOfStatisticsLinks
	 */
	count: number;
	/**
	 * UTC date-time of the event
	 * @type {Date}
	 * @memberof GetExtendedContactDetailsAllOfStatisticsLinks
	 */
	eventTime: Date;
	/**
	 * IP from which the user has clicked on the link
	 * @type {string}
	 * @memberof GetExtendedContactDetailsAllOfStatisticsLinks
	 */
	ip: string;
	/**
	 * URL of the clicked link
	 * @type {string}
	 * @memberof GetExtendedContactDetailsAllOfStatisticsLinks
	 */
	url: string;
}

/**
 * Check if a given object implements the GetExtendedContactDetailsAllOfStatisticsLinks interface.
 */
export function instanceOfGetExtendedContactDetailsAllOfStatisticsLinks(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'count' in value;
	isInstance = isInstance && 'eventTime' in value;
	isInstance = isInstance && 'ip' in value;
	isInstance = isInstance && 'url' in value;

	return isInstance;
}

export function GetExtendedContactDetailsAllOfStatisticsLinksFromJSON(
	json: any
): GetExtendedContactDetailsAllOfStatisticsLinks {
	return GetExtendedContactDetailsAllOfStatisticsLinksFromJSONTyped(json, false);
}

export function GetExtendedContactDetailsAllOfStatisticsLinksFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetExtendedContactDetailsAllOfStatisticsLinks {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		count: json['count'],
		eventTime: new Date(json['eventTime']),
		ip: json['ip'],
		url: json['url']
	};
}

export function GetExtendedContactDetailsAllOfStatisticsLinksToJSON(
	value?: GetExtendedContactDetailsAllOfStatisticsLinks | null
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		count: value.count,
		eventTime: value.eventTime.toISOString(),
		ip: value.ip,
		url: value.url
	};
}
