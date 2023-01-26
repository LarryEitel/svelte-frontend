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
 * @interface GetCampaignOverview
 */
export interface GetCampaignOverview {
	/**
	 * ID of the campaign
	 * @type {number}
	 * @memberof GetCampaignOverview
	 */
	id: number;
	/**
	 * Name of the campaign
	 * @type {string}
	 * @memberof GetCampaignOverview
	 */
	name: string;
	/**
	 * Subject of the campaign. Only available if `abTesting` flag of the campaign is `false`
	 * @type {string}
	 * @memberof GetCampaignOverview
	 */
	subject?: string;
	/**
	 * Type of campaign
	 * @type {string}
	 * @memberof GetCampaignOverview
	 */
	type: GetCampaignOverviewTypeEnum;
	/**
	 * Status of the campaign
	 * @type {string}
	 * @memberof GetCampaignOverview
	 */
	status: GetCampaignOverviewStatusEnum;
	/**
	 * UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ)
	 * @type {Date}
	 * @memberof GetCampaignOverview
	 */
	scheduledAt?: Date;
	/**
	 * Status of A/B Test for the campaign. abTesting = false means it is disabled, & abTesting = true means it is enabled.
	 * @type {boolean}
	 * @memberof GetCampaignOverview
	 */
	abTesting?: boolean;
	/**
	 * Subject A of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
	 * @type {string}
	 * @memberof GetCampaignOverview
	 */
	subjectA?: string;
	/**
	 * Subject B of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
	 * @type {string}
	 * @memberof GetCampaignOverview
	 */
	subjectB?: string;
	/**
	 * The size of your ab-test groups. Only available if `abTesting` flag of the campaign is `true`
	 * @type {number}
	 * @memberof GetCampaignOverview
	 */
	splitRule?: number;
	/**
	 * Criteria for the winning version. Only available if `abTesting` flag of the campaign is `true`
	 * @type {string}
	 * @memberof GetCampaignOverview
	 */
	winnerCriteria?: string;
	/**
	 * The duration of the test in hours at the end of which the winning version will be sent. Only available if `abTesting` flag of the campaign is `true`
	 * @type {number}
	 * @memberof GetCampaignOverview
	 */
	winnerDelay?: number;
	/**
	 * It is true if you have chosen to send your campaign at best time, otherwise it is false
	 * @type {boolean}
	 * @memberof GetCampaignOverview
	 */
	sendAtBestTime?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum GetCampaignOverviewTypeEnum {
	Classic = 'classic',
	Trigger = 'trigger'
}
/**
 * @export
 * @enum {string}
 */
export enum GetCampaignOverviewStatusEnum {
	Draft = 'draft',
	Sent = 'sent',
	Archive = 'archive',
	Queued = 'queued',
	Suspended = 'suspended',
	InProcess = 'in_process'
}

/**
 * Check if a given object implements the GetCampaignOverview interface.
 */
export function instanceOfGetCampaignOverview(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'id' in value;
	isInstance = isInstance && 'name' in value;
	isInstance = isInstance && 'type' in value;
	isInstance = isInstance && 'status' in value;

	return isInstance;
}

export function GetCampaignOverviewFromJSON(json: any): GetCampaignOverview {
	return GetCampaignOverviewFromJSONTyped(json, false);
}

export function GetCampaignOverviewFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetCampaignOverview {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json['id'],
		name: json['name'],
		subject: !exists(json, 'subject') ? undefined : json['subject'],
		type: json['type'],
		status: json['status'],
		scheduledAt: !exists(json, 'scheduledAt') ? undefined : new Date(json['scheduledAt']),
		abTesting: !exists(json, 'abTesting') ? undefined : json['abTesting'],
		subjectA: !exists(json, 'subjectA') ? undefined : json['subjectA'],
		subjectB: !exists(json, 'subjectB') ? undefined : json['subjectB'],
		splitRule: !exists(json, 'splitRule') ? undefined : json['splitRule'],
		winnerCriteria: !exists(json, 'winnerCriteria') ? undefined : json['winnerCriteria'],
		winnerDelay: !exists(json, 'winnerDelay') ? undefined : json['winnerDelay'],
		sendAtBestTime: !exists(json, 'sendAtBestTime') ? undefined : json['sendAtBestTime']
	};
}

export function GetCampaignOverviewToJSON(value?: GetCampaignOverview | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		id: value.id,
		name: value.name,
		subject: value.subject,
		type: value.type,
		status: value.status,
		scheduledAt: value.scheduledAt === undefined ? undefined : value.scheduledAt.toISOString(),
		abTesting: value.abTesting,
		subjectA: value.subjectA,
		subjectB: value.subjectB,
		splitRule: value.splitRule,
		winnerCriteria: value.winnerCriteria,
		winnerDelay: value.winnerDelay,
		sendAtBestTime: value.sendAtBestTime
	};
}
