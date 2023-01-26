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
import type { CreateEmailCampaignRecipients } from './CreateEmailCampaignRecipients';
import {
	CreateEmailCampaignRecipientsFromJSON,
	CreateEmailCampaignRecipientsFromJSONTyped,
	CreateEmailCampaignRecipientsToJSON
} from './CreateEmailCampaignRecipients';
import type { CreateEmailCampaignSender } from './CreateEmailCampaignSender';
import {
	CreateEmailCampaignSenderFromJSON,
	CreateEmailCampaignSenderFromJSONTyped,
	CreateEmailCampaignSenderToJSON
} from './CreateEmailCampaignSender';

/**
 *
 * @export
 * @interface CreateEmailCampaign
 */
export interface CreateEmailCampaign {
	/**
	 * Tag of the campaign
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	tag?: string;
	/**
	 *
	 * @type {CreateEmailCampaignSender}
	 * @memberof CreateEmailCampaign
	 */
	sender: CreateEmailCampaignSender;
	/**
	 * Name of the campaign
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	name: string;
	/**
	 * Mandatory if htmlUrl and templateId are empty. Body of the message (HTML)
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	htmlContent?: string;
	/**
	 * Mandatory if htmlContent and templateId are empty. Url to the message (HTML)
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	htmlUrl?: string;
	/**
	 * Mandatory if htmlContent and htmlUrl are empty. Id of the transactional email template with status 'active'. Used to copy only its content fetched from htmlContent/htmlUrl to an email campaign for RSS feature.
	 * @type {number}
	 * @memberof CreateEmailCampaign
	 */
	templateId?: number;
	/**
	 * Sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part).
	 * @type {Date}
	 * @memberof CreateEmailCampaign
	 */
	scheduledAt?: Date;
	/**
	 * Subject of the campaign. Mandatory if abTesting is false. Ignored if abTesting is true.
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	subject?: string;
	/**
	 * Email on which the campaign recipients will be able to reply to
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	replyTo?: string;
	/**
	 * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	toField?: string;
	/**
	 *
	 * @type {CreateEmailCampaignRecipients}
	 * @memberof CreateEmailCampaign
	 */
	recipients?: CreateEmailCampaignRecipients;
	/**
	 * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	attachmentUrl?: string;
	/**
	 * Use true to embedded the images in your email. Final size of the email should be less than 4MB. Campaigns with embedded images can not be sent to more than 5000 contacts
	 * @type {boolean}
	 * @memberof CreateEmailCampaign
	 */
	inlineImageActivation?: boolean;
	/**
	 * Use true to enable the mirror link
	 * @type {boolean}
	 * @memberof CreateEmailCampaign
	 */
	mirrorActive?: boolean;
	/**
	 * Footer of the email campaign
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	footer?: string;
	/**
	 * Header of the email campaign
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	header?: string;
	/**
	 * Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	utmCampaign?: string;
	/**
	 * Pass the set of attributes to customize the type classic campaign. For example, {"FNAME":"Joe", "LNAME":"Doe"}. Only available if 'type' is 'classic'. It's considered only if campaign is in New Template Language format. The New Template Language is dependent on the values of 'subject', 'htmlContent/htmlUrl', 'sender.name' & 'toField'
	 * @type {object}
	 * @memberof CreateEmailCampaign
	 */
	params?: object;
	/**
	 * Set this to true if you want to send your campaign at best time.
	 * @type {boolean}
	 * @memberof CreateEmailCampaign
	 */
	sendAtBestTime?: boolean;
	/**
	 * Status of A/B Test. abTesting = false means it is disabled, & abTesting = true means it is enabled. 'subjectA', 'subjectB', 'splitRule', 'winnerCriteria' & 'winnerDelay' will be considered when abTesting is set to true. 'subjectA' & 'subjectB' are mandatory together & 'subject' if passed is ignored. Can be set to true only if 'sendAtBestTime' is 'false'. You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B
	 * @type {boolean}
	 * @memberof CreateEmailCampaign
	 */
	abTesting?: boolean;
	/**
	 * Subject A of the campaign. Mandatory if abTesting = true. subjectA & subjectB should have unique value
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	subjectA?: string;
	/**
	 * Subject B of the campaign. Mandatory if abTesting = true. subjectA & subjectB should have unique value
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	subjectB?: string;
	/**
	 * Add the size of your test groups. Mandatory if abTesting = true & 'recipients' is passed. We'll send version A and B to a random sample of recipients, and then the winning version to everyone else
	 * @type {number}
	 * @memberof CreateEmailCampaign
	 */
	splitRule?: number;
	/**
	 * Choose the metrics that will determinate the winning version. Mandatory if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerCriteria' is ignored if passed
	 * @type {string}
	 * @memberof CreateEmailCampaign
	 */
	winnerCriteria?: CreateEmailCampaignWinnerCriteriaEnum;
	/**
	 * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. Mandatory if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerDelay' is ignored if passed
	 * @type {number}
	 * @memberof CreateEmailCampaign
	 */
	winnerDelay?: number;
	/**
	 * Available for dedicated ip clients. Set this to true if you wish to warm up your ip.
	 * @type {boolean}
	 * @memberof CreateEmailCampaign
	 */
	ipWarmupEnable?: boolean;
	/**
	 * Mandatory if ipWarmupEnable is set to true. Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000.
	 * @type {number}
	 * @memberof CreateEmailCampaign
	 */
	initialQuota?: number;
	/**
	 * Mandatory if ipWarmupEnable is set to true. Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%.
	 * @type {number}
	 * @memberof CreateEmailCampaign
	 */
	increaseRate?: number;
}

/**
 * @export
 * @enum {string}
 */
export enum CreateEmailCampaignWinnerCriteriaEnum {
	Open = 'open',
	Click = 'click'
}

/**
 * Check if a given object implements the CreateEmailCampaign interface.
 */
export function instanceOfCreateEmailCampaign(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'sender' in value;
	isInstance = isInstance && 'name' in value;

	return isInstance;
}

export function CreateEmailCampaignFromJSON(json: any): CreateEmailCampaign {
	return CreateEmailCampaignFromJSONTyped(json, false);
}

export function CreateEmailCampaignFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): CreateEmailCampaign {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		tag: !exists(json, 'tag') ? undefined : json['tag'],
		sender: CreateEmailCampaignSenderFromJSON(json['sender']),
		name: json['name'],
		htmlContent: !exists(json, 'htmlContent') ? undefined : json['htmlContent'],
		htmlUrl: !exists(json, 'htmlUrl') ? undefined : json['htmlUrl'],
		templateId: !exists(json, 'templateId') ? undefined : json['templateId'],
		scheduledAt: !exists(json, 'scheduledAt') ? undefined : new Date(json['scheduledAt']),
		subject: !exists(json, 'subject') ? undefined : json['subject'],
		replyTo: !exists(json, 'replyTo') ? undefined : json['replyTo'],
		toField: !exists(json, 'toField') ? undefined : json['toField'],
		recipients: !exists(json, 'recipients')
			? undefined
			: CreateEmailCampaignRecipientsFromJSON(json['recipients']),
		attachmentUrl: !exists(json, 'attachmentUrl') ? undefined : json['attachmentUrl'],
		inlineImageActivation: !exists(json, 'inlineImageActivation')
			? undefined
			: json['inlineImageActivation'],
		mirrorActive: !exists(json, 'mirrorActive') ? undefined : json['mirrorActive'],
		footer: !exists(json, 'footer') ? undefined : json['footer'],
		header: !exists(json, 'header') ? undefined : json['header'],
		utmCampaign: !exists(json, 'utmCampaign') ? undefined : json['utmCampaign'],
		params: !exists(json, 'params') ? undefined : json['params'],
		sendAtBestTime: !exists(json, 'sendAtBestTime') ? undefined : json['sendAtBestTime'],
		abTesting: !exists(json, 'abTesting') ? undefined : json['abTesting'],
		subjectA: !exists(json, 'subjectA') ? undefined : json['subjectA'],
		subjectB: !exists(json, 'subjectB') ? undefined : json['subjectB'],
		splitRule: !exists(json, 'splitRule') ? undefined : json['splitRule'],
		winnerCriteria: !exists(json, 'winnerCriteria') ? undefined : json['winnerCriteria'],
		winnerDelay: !exists(json, 'winnerDelay') ? undefined : json['winnerDelay'],
		ipWarmupEnable: !exists(json, 'ipWarmupEnable') ? undefined : json['ipWarmupEnable'],
		initialQuota: !exists(json, 'initialQuota') ? undefined : json['initialQuota'],
		increaseRate: !exists(json, 'increaseRate') ? undefined : json['increaseRate']
	};
}

export function CreateEmailCampaignToJSON(value?: CreateEmailCampaign | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		tag: value.tag,
		sender: CreateEmailCampaignSenderToJSON(value.sender),
		name: value.name,
		htmlContent: value.htmlContent,
		htmlUrl: value.htmlUrl,
		templateId: value.templateId,
		scheduledAt: value.scheduledAt === undefined ? undefined : value.scheduledAt.toISOString(),
		subject: value.subject,
		replyTo: value.replyTo,
		toField: value.toField,
		recipients: CreateEmailCampaignRecipientsToJSON(value.recipients),
		attachmentUrl: value.attachmentUrl,
		inlineImageActivation: value.inlineImageActivation,
		mirrorActive: value.mirrorActive,
		footer: value.footer,
		header: value.header,
		utmCampaign: value.utmCampaign,
		params: value.params,
		sendAtBestTime: value.sendAtBestTime,
		abTesting: value.abTesting,
		subjectA: value.subjectA,
		subjectB: value.subjectB,
		splitRule: value.splitRule,
		winnerCriteria: value.winnerCriteria,
		winnerDelay: value.winnerDelay,
		ipWarmupEnable: value.ipWarmupEnable,
		initialQuota: value.initialQuota,
		increaseRate: value.increaseRate
	};
}
