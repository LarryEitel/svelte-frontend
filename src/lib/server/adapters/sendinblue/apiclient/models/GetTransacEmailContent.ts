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
import type { GetTransacEmailContentEventsInner } from './GetTransacEmailContentEventsInner';
import {
	GetTransacEmailContentEventsInnerFromJSON,
	GetTransacEmailContentEventsInnerFromJSONTyped,
	GetTransacEmailContentEventsInnerToJSON
} from './GetTransacEmailContentEventsInner';

/**
 *
 * @export
 * @interface GetTransacEmailContent
 */
export interface GetTransacEmailContent {
	/**
	 * Email address to which transactional email has been sent
	 * @type {string}
	 * @memberof GetTransacEmailContent
	 */
	email: string;
	/**
	 * Subject of the sent email
	 * @type {string}
	 * @memberof GetTransacEmailContent
	 */
	subject: string;
	/**
	 * Id of the template
	 * @type {number}
	 * @memberof GetTransacEmailContent
	 */
	templateId?: number;
	/**
	 * Date on which transactional email was sent
	 * @type {Date}
	 * @memberof GetTransacEmailContent
	 */
	date: Date;
	/**
	 * Series of events which occurred on the transactional email
	 * @type {Array<GetTransacEmailContentEventsInner>}
	 * @memberof GetTransacEmailContent
	 */
	events: Array<GetTransacEmailContentEventsInner>;
	/**
	 * Actual content of the transactional email that has been sent
	 * @type {string}
	 * @memberof GetTransacEmailContent
	 */
	body: string;
	/**
	 * Count of the attachments that were sent in the email
	 * @type {number}
	 * @memberof GetTransacEmailContent
	 */
	attachmentCount: number;
}

/**
 * Check if a given object implements the GetTransacEmailContent interface.
 */
export function instanceOfGetTransacEmailContent(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'email' in value;
	isInstance = isInstance && 'subject' in value;
	isInstance = isInstance && 'date' in value;
	isInstance = isInstance && 'events' in value;
	isInstance = isInstance && 'body' in value;
	isInstance = isInstance && 'attachmentCount' in value;

	return isInstance;
}

export function GetTransacEmailContentFromJSON(json: any): GetTransacEmailContent {
	return GetTransacEmailContentFromJSONTyped(json, false);
}

export function GetTransacEmailContentFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetTransacEmailContent {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		email: json['email'],
		subject: json['subject'],
		templateId: !exists(json, 'templateId') ? undefined : json['templateId'],
		date: new Date(json['date']),
		events: (json['events'] as Array<any>).map(GetTransacEmailContentEventsInnerFromJSON),
		body: json['body'],
		attachmentCount: json['attachmentCount']
	};
}

export function GetTransacEmailContentToJSON(value?: GetTransacEmailContent | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		email: value.email,
		subject: value.subject,
		templateId: value.templateId,
		date: value.date.toISOString(),
		events: (value.events as Array<any>).map(GetTransacEmailContentEventsInnerToJSON),
		body: value.body,
		attachmentCount: value.attachmentCount
	};
}
