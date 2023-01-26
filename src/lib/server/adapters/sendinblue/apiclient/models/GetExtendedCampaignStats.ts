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
import type { GetDeviceBrowserStats } from './GetDeviceBrowserStats';
import {
	GetDeviceBrowserStatsFromJSON,
	GetDeviceBrowserStatsFromJSONTyped,
	GetDeviceBrowserStatsToJSON
} from './GetDeviceBrowserStats';
import type { GetExtendedCampaignStatsCampaignStatsInner } from './GetExtendedCampaignStatsCampaignStatsInner';
import {
	GetExtendedCampaignStatsCampaignStatsInnerFromJSON,
	GetExtendedCampaignStatsCampaignStatsInnerFromJSONTyped,
	GetExtendedCampaignStatsCampaignStatsInnerToJSON
} from './GetExtendedCampaignStatsCampaignStatsInner';
import type { GetExtendedCampaignStatsGlobalStats } from './GetExtendedCampaignStatsGlobalStats';
import {
	GetExtendedCampaignStatsGlobalStatsFromJSON,
	GetExtendedCampaignStatsGlobalStatsFromJSONTyped,
	GetExtendedCampaignStatsGlobalStatsToJSON
} from './GetExtendedCampaignStatsGlobalStats';
import type { GetStatsByDevice } from './GetStatsByDevice';
import {
	GetStatsByDeviceFromJSON,
	GetStatsByDeviceFromJSONTyped,
	GetStatsByDeviceToJSON
} from './GetStatsByDevice';

/**
 *
 * @export
 * @interface GetExtendedCampaignStats
 */
export interface GetExtendedCampaignStats {
	/**
	 *
	 * @type {GetExtendedCampaignStatsGlobalStats}
	 * @memberof GetExtendedCampaignStats
	 */
	globalStats: GetExtendedCampaignStatsGlobalStats;
	/**
	 * List-wise statistics of the campaign.
	 * @type {Array<GetExtendedCampaignStatsCampaignStatsInner>}
	 * @memberof GetExtendedCampaignStats
	 */
	campaignStats: Array<GetExtendedCampaignStatsCampaignStatsInner>;
	/**
	 * Number of clicks on mirror link
	 * @type {number}
	 * @memberof GetExtendedCampaignStats
	 */
	mirrorClick: number;
	/**
	 * Number of remaning emails to send
	 * @type {number}
	 * @memberof GetExtendedCampaignStats
	 */
	remaining: number;
	/**
	 * Statistics about the number of clicks for the links
	 * @type {object}
	 * @memberof GetExtendedCampaignStats
	 */
	linksStats: object;
	/**
	 *
	 * @type {{ [key: string]: GetCampaignStats | undefined; }}
	 * @memberof GetExtendedCampaignStats
	 */
	statsByDomain: { [key: string]: GetCampaignStats | undefined };
	/**
	 *
	 * @type {GetStatsByDevice}
	 * @memberof GetExtendedCampaignStats
	 */
	statsByDevice: GetStatsByDevice;
	/**
	 *
	 * @type {{ [key: string]: GetDeviceBrowserStats | undefined; }}
	 * @memberof GetExtendedCampaignStats
	 */
	statsByBrowser: { [key: string]: GetDeviceBrowserStats | undefined };
}

/**
 * Check if a given object implements the GetExtendedCampaignStats interface.
 */
export function instanceOfGetExtendedCampaignStats(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'globalStats' in value;
	isInstance = isInstance && 'campaignStats' in value;
	isInstance = isInstance && 'mirrorClick' in value;
	isInstance = isInstance && 'remaining' in value;
	isInstance = isInstance && 'linksStats' in value;
	isInstance = isInstance && 'statsByDomain' in value;
	isInstance = isInstance && 'statsByDevice' in value;
	isInstance = isInstance && 'statsByBrowser' in value;

	return isInstance;
}

export function GetExtendedCampaignStatsFromJSON(json: any): GetExtendedCampaignStats {
	return GetExtendedCampaignStatsFromJSONTyped(json, false);
}

export function GetExtendedCampaignStatsFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetExtendedCampaignStats {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		globalStats: GetExtendedCampaignStatsGlobalStatsFromJSON(json['globalStats']),
		campaignStats: (json['campaignStats'] as Array<any>).map(
			GetExtendedCampaignStatsCampaignStatsInnerFromJSON
		),
		mirrorClick: json['mirrorClick'],
		remaining: json['remaining'],
		linksStats: json['linksStats'],
		statsByDomain: mapValues(json['statsByDomain'], GetCampaignStatsFromJSON),
		statsByDevice: GetStatsByDeviceFromJSON(json['statsByDevice']),
		statsByBrowser: mapValues(json['statsByBrowser'], GetDeviceBrowserStatsFromJSON)
	};
}

export function GetExtendedCampaignStatsToJSON(value?: GetExtendedCampaignStats | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		globalStats: GetExtendedCampaignStatsGlobalStatsToJSON(value.globalStats),
		campaignStats: (value.campaignStats as Array<any>).map(
			GetExtendedCampaignStatsCampaignStatsInnerToJSON
		),
		mirrorClick: value.mirrorClick,
		remaining: value.remaining,
		linksStats: value.linksStats,
		statsByDomain: mapValues(value.statsByDomain, GetCampaignStatsToJSON),
		statsByDevice: GetStatsByDeviceToJSON(value.statsByDevice),
		statsByBrowser: mapValues(value.statsByBrowser, GetDeviceBrowserStatsToJSON)
	};
}
