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
 * Custom attributes for the report email.
 * @export
 * @interface SendReportEmail
 */
export interface SendReportEmail {
	/**
	 * Email addresses of the recipients
	 * @type {Array<string>}
	 * @memberof SendReportEmail
	 */
	to: Array<string>;
	/**
	 * Custom text message to be presented in the report email.
	 * @type {string}
	 * @memberof SendReportEmail
	 */
	body: string;
}

/**
 * Check if a given object implements the SendReportEmail interface.
 */
export function instanceOfSendReportEmail(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'to' in value;
	isInstance = isInstance && 'body' in value;

	return isInstance;
}

export function SendReportEmailFromJSON(json: any): SendReportEmail {
	return SendReportEmailFromJSONTyped(json, false);
}

export function SendReportEmailFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): SendReportEmail {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		to: json['to'],
		body: json['body']
	};
}

export function SendReportEmailToJSON(value?: SendReportEmail | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		to: value.to,
		body: value.body
	};
}