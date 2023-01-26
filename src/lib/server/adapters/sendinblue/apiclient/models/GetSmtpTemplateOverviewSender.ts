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
 * @interface GetSmtpTemplateOverviewSender
 */
export interface GetSmtpTemplateOverviewSender {
	/**
	 * From email for the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverviewSender
	 */
	name?: string;
	/**
	 * From email for the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverviewSender
	 */
	email?: string;
	/**
	 * Sender id of the template
	 * @type {string}
	 * @memberof GetSmtpTemplateOverviewSender
	 */
	id?: string;
}

/**
 * Check if a given object implements the GetSmtpTemplateOverviewSender interface.
 */
export function instanceOfGetSmtpTemplateOverviewSender(value: object): boolean {
	let isInstance = true;

	return isInstance;
}

export function GetSmtpTemplateOverviewSenderFromJSON(json: any): GetSmtpTemplateOverviewSender {
	return GetSmtpTemplateOverviewSenderFromJSONTyped(json, false);
}

export function GetSmtpTemplateOverviewSenderFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): GetSmtpTemplateOverviewSender {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		name: !exists(json, 'name') ? undefined : json['name'],
		email: !exists(json, 'email') ? undefined : json['email'],
		id: !exists(json, 'id') ? undefined : json['id']
	};
}

export function GetSmtpTemplateOverviewSenderToJSON(
	value?: GetSmtpTemplateOverviewSender | null
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		name: value.name,
		email: value.email,
		id: value.id
	};
}