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
 * Sender details including id or email and name (optional). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example `{"name":"xyz", "email":"example@abc.com"}` , `{"name":"xyz", "id":123}`
 * @export
 * @interface CreateEmailCampaignSender
 */
export interface CreateEmailCampaignSender {
	/**
	 * Sender Name
	 * @type {string}
	 * @memberof CreateEmailCampaignSender
	 */
	name?: string;
	/**
	 * Sender email
	 * @type {string}
	 * @memberof CreateEmailCampaignSender
	 */
	email?: string;
	/**
	 * Select the sender for the campaign on the basis of sender id. In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email).
	 * @type {number}
	 * @memberof CreateEmailCampaignSender
	 */
	id?: number;
}

/**
 * Check if a given object implements the CreateEmailCampaignSender interface.
 */
export function instanceOfCreateEmailCampaignSender(value: object): boolean {
	let isInstance = true;

	return isInstance;
}

export function CreateEmailCampaignSenderFromJSON(json: any): CreateEmailCampaignSender {
	return CreateEmailCampaignSenderFromJSONTyped(json, false);
}

export function CreateEmailCampaignSenderFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): CreateEmailCampaignSender {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		name: !exists(json, 'name') ? undefined : json['name'],
		email: !exists(json, 'email') ? undefined : json['email'],
		id: !exists(json, 'id') ? undefined : json['id']
	};
}

export function CreateEmailCampaignSenderToJSON(value?: CreateEmailCampaignSender | null): any {
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
