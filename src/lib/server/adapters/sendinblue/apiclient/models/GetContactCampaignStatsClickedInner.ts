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
import type { GetContactCampaignStatsClickedInnerLinksInner } from './GetContactCampaignStatsClickedInnerLinksInner';
import {
	GetContactCampaignStatsClickedInnerLinksInnerFromJSON,
	GetContactCampaignStatsClickedInnerLinksInnerFromJSONTyped,
	GetContactCampaignStatsClickedInnerLinksInnerToJSON
} from './GetContactCampaignStatsClickedInnerLinksInner';

/**
 *
 * @export
 * @interface GetContactCampaignStatsClickedInner
 */
export interface GetContactCampaignStatsClickedInner {
	/**
	 * ID of the campaign which generated the event
	 * @type {number}
	 * @memberof GetContactCampaignStatsClickedInner
	 */
	campaignId: number;
	/**
	 *
	 * @type {Array<GetContactCampaignStatsClickedInnerLinksInner>}
	 * @memberof GetContactCampaignStatsClickedInner
	 */
	links: Array<GetContactCampaignStatsClickedInnerLinksInner>;
}

/**
 * Check if a given object implements the GetContactCampaignStatsClickedInner interface.
 */
export function instanceOfGetContactCampaignStatsClickedInner(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'campaignId' in value;
	isInstance = isInstance && 'links' in value;

	return isInstance;
}

export function GetContactCampaignStatsClickedInnerFromJSON(
	json: any
): GetContactCampaignStatsClickedInner {
	return GetContactCampaignStatsClickedInnerFromJSONTyped(json, false);
}

export function GetContactCampaignStatsClickedInnerFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetContactCampaignStatsClickedInner {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		campaignId: json['campaignId'],
		links: (json['links'] as Array<any>).map(GetContactCampaignStatsClickedInnerLinksInnerFromJSON)
	};
}

export function GetContactCampaignStatsClickedInnerToJSON(
	value?: GetContactCampaignStatsClickedInner | null
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		campaignId: value.campaignId,
		links: (value.links as Array<any>).map(GetContactCampaignStatsClickedInnerLinksInnerToJSON)
	};
}
