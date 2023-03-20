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
import type { GetProcess } from './GetProcess';
import { GetProcessFromJSON, GetProcessFromJSONTyped, GetProcessToJSON } from './GetProcess';

/**
 *
 * @export
 * @interface GetProcesses
 */
export interface GetProcesses {
	/**
	 * List of processes available on your account
	 * @type {Array<GetProcess>}
	 * @memberof GetProcesses
	 */
	processes?: Array<GetProcess>;
	/**
	 * Number of processes available on your account
	 * @type {number}
	 * @memberof GetProcesses
	 */
	count: number;
}

/**
 * Check if a given object implements the GetProcesses interface.
 */
export function instanceOfGetProcesses(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'count' in value;

	return isInstance;
}

export function GetProcessesFromJSON(json: any): GetProcesses {
	return GetProcessesFromJSONTyped(json, false);
}

export function GetProcessesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProcesses {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		processes: !exists(json, 'processes')
			? undefined
			: (json['processes'] as Array<any>).map(GetProcessFromJSON),
		count: json['count']
	};
}

export function GetProcessesToJSON(value?: GetProcesses | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		processes:
			value.processes === undefined
				? undefined
				: (value.processes as Array<any>).map(GetProcessToJSON),
		count: value.count
	};
}
