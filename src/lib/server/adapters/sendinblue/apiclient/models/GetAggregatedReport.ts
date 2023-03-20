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
 * @interface GetAggregatedReport
 */
export interface GetAggregatedReport {
	/**
	 * Time frame of the report
	 * @type {string}
	 * @memberof GetAggregatedReport
	 */
	range: string;
	/**
	 * Number of requests for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	requests: number;
	/**
	 * Number of delivered emails for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	delivered: number;
	/**
	 * Number of hardbounces for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	hardBounces: number;
	/**
	 * Number of softbounces for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	softBounces: number;
	/**
	 * Number of clicks for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	clicks: number;
	/**
	 * Number of unique clicks for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	uniqueClicks: number;
	/**
	 * Number of openings for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	opens: number;
	/**
	 * Number of unique openings for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	uniqueOpens: number;
	/**
	 * Number of complaint (spam report) for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	spamReports: number;
	/**
	 * Number of blocked contact emails for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	blocked: number;
	/**
	 * Number of invalid emails for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	invalid: number;
	/**
	 * Number of unsubscribed emails for the timeframe
	 * @type {number}
	 * @memberof GetAggregatedReport
	 */
	unsubscribed: number;
}

/**
 * Check if a given object implements the GetAggregatedReport interface.
 */
export function instanceOfGetAggregatedReport(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'range' in value;
	isInstance = isInstance && 'requests' in value;
	isInstance = isInstance && 'delivered' in value;
	isInstance = isInstance && 'hardBounces' in value;
	isInstance = isInstance && 'softBounces' in value;
	isInstance = isInstance && 'clicks' in value;
	isInstance = isInstance && 'uniqueClicks' in value;
	isInstance = isInstance && 'opens' in value;
	isInstance = isInstance && 'uniqueOpens' in value;
	isInstance = isInstance && 'spamReports' in value;
	isInstance = isInstance && 'blocked' in value;
	isInstance = isInstance && 'invalid' in value;
	isInstance = isInstance && 'unsubscribed' in value;

	return isInstance;
}

export function GetAggregatedReportFromJSON(json: any): GetAggregatedReport {
	return GetAggregatedReportFromJSONTyped(json, false);
}

export function GetAggregatedReportFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetAggregatedReport {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		range: json['range'],
		requests: json['requests'],
		delivered: json['delivered'],
		hardBounces: json['hardBounces'],
		softBounces: json['softBounces'],
		clicks: json['clicks'],
		uniqueClicks: json['uniqueClicks'],
		opens: json['opens'],
		uniqueOpens: json['uniqueOpens'],
		spamReports: json['spamReports'],
		blocked: json['blocked'],
		invalid: json['invalid'],
		unsubscribed: json['unsubscribed']
	};
}

export function GetAggregatedReportToJSON(value?: GetAggregatedReport | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		range: value.range,
		requests: value.requests,
		delivered: value.delivered,
		hardBounces: value.hardBounces,
		softBounces: value.softBounces,
		clicks: value.clicks,
		uniqueClicks: value.uniqueClicks,
		opens: value.opens,
		uniqueOpens: value.uniqueOpens,
		spamReports: value.spamReports,
		blocked: value.blocked,
		invalid: value.invalid,
		unsubscribed: value.unsubscribed
	};
}
