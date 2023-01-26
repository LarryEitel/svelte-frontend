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
 * @interface GetProcess
 */
export interface GetProcess {
	/**
	 * Id of the process
	 * @type {number}
	 * @memberof GetProcess
	 */
	id: number;
	/**
	 * Status of the process
	 * @type {string}
	 * @memberof GetProcess
	 */
	status: GetProcessStatusEnum;
	/**
	 * Process name
	 * @type {string}
	 * @memberof GetProcess
	 */
	name: string;
	/**
	 * URL on which send export the of contacts once the process is completed
	 * @type {string}
	 * @memberof GetProcess
	 */
	exportUrl?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum GetProcessStatusEnum {
	Queued = 'queued',
	InProcess = 'in_process',
	Completed = 'completed'
}

/**
 * Check if a given object implements the GetProcess interface.
 */
export function instanceOfGetProcess(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'id' in value;
	isInstance = isInstance && 'status' in value;
	isInstance = isInstance && 'name' in value;

	return isInstance;
}

export function GetProcessFromJSON(json: any): GetProcess {
	return GetProcessFromJSONTyped(json, false);
}

export function GetProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProcess {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json['id'],
		status: json['status'],
		name: json['name'],
		exportUrl: !exists(json, 'export_url') ? undefined : json['export_url']
	};
}

export function GetProcessToJSON(value?: GetProcess | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		id: value.id,
		status: value.status,
		name: value.name,
		export_url: value.exportUrl
	};
}
