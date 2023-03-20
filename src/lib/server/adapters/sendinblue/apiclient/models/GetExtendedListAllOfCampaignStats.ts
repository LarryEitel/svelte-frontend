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
import type { GetCampaignStats } from './GetCampaignStats';
import {
	GetCampaignStatsFromJSON,
	GetCampaignStatsFromJSONTyped,
	GetCampaignStatsToJSON
} from './GetCampaignStats';

/**
 *
 * @export
 * @interface GetExtendedListAllOfCampaignStats
 */
export interface GetExtendedListAllOfCampaignStats {
	/**
	 * ID of the campaign
	 * @type {number}
	 * @memberof GetExtendedListAllOfCampaignStats
	 */
	campaignId: number;
	/**
	 *
	 * @type {GetCampaignStats}
	 * @memberof GetExtendedListAllOfCampaignStats
	 */
	stats: GetCampaignStats;
}

/**
 * Check if a given object implements the GetExtendedListAllOfCampaignStats interface.
 */
export function instanceOfGetExtendedListAllOfCampaignStats(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'campaignId' in value;
	isInstance = isInstance && 'stats' in value;

	return isInstance;
}

export function GetExtendedListAllOfCampaignStatsFromJSON(
	json: any
): GetExtendedListAllOfCampaignStats {
	return GetExtendedListAllOfCampaignStatsFromJSONTyped(json, false);
}

export function GetExtendedListAllOfCampaignStatsFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetExtendedListAllOfCampaignStats {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		campaignId: json['campaignId'],
		stats: GetCampaignStatsFromJSON(json['stats'])
	};
}

export function GetExtendedListAllOfCampaignStatsToJSON(
	value?: GetExtendedListAllOfCampaignStats | null
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		campaignId: value.campaignId,
		stats: GetCampaignStatsToJSON(value.stats)
	};
}
