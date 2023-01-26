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
import type { CreateSmtpTemplateSender } from './CreateSmtpTemplateSender';
import {
	CreateSmtpTemplateSenderFromJSON,
	CreateSmtpTemplateSenderFromJSONTyped,
	CreateSmtpTemplateSenderToJSON
} from './CreateSmtpTemplateSender';

/**
 *
 * @export
 * @interface CreateSmtpTemplate
 */
export interface CreateSmtpTemplate {
	/**
	 * Tag of the template
	 * @type {string}
	 * @memberof CreateSmtpTemplate
	 */
	tag?: string;
	/**
	 *
	 * @type {CreateSmtpTemplateSender}
	 * @memberof CreateSmtpTemplate
	 */
	sender: CreateSmtpTemplateSender;
	/**
	 * Name of the template
	 * @type {string}
	 * @memberof CreateSmtpTemplate
	 */
	templateName: string;
	/**
	 * Body of the message (HTML version). The field must have more than 10 characters. REQUIRED if htmlUrl is empty
	 * @type {string}
	 * @memberof CreateSmtpTemplate
	 */
	htmlContent?: string;
	/**
	 * Url which contents the body of the email message. REQUIRED if htmlContent is empty
	 * @type {string}
	 * @memberof CreateSmtpTemplate
	 */
	htmlUrl?: string;
	/**
	 * Subject of the template
	 * @type {string}
	 * @memberof CreateSmtpTemplate
	 */
	subject: string;
	/**
	 * Email on which campaign recipients will be able to reply to
	 * @type {string}
	 * @memberof CreateSmtpTemplate
	 */
	replyTo?: string;
	/**
	 * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
	 * @type {string}
	 * @memberof CreateSmtpTemplate
	 */
	toField?: string;
	/**
	 * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
	 * @type {string}
	 * @memberof CreateSmtpTemplate
	 */
	attachmentUrl?: string;
	/**
	 * Status of template. isActive = true means template is active and isActive = false means template is inactive
	 * @type {boolean}
	 * @memberof CreateSmtpTemplate
	 */
	isActive?: boolean;
}

/**
 * Check if a given object implements the CreateSmtpTemplate interface.
 */
export function instanceOfCreateSmtpTemplate(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'sender' in value;
	isInstance = isInstance && 'templateName' in value;
	isInstance = isInstance && 'subject' in value;

	return isInstance;
}

export function CreateSmtpTemplateFromJSON(json: any): CreateSmtpTemplate {
	return CreateSmtpTemplateFromJSONTyped(json, false);
}

export function CreateSmtpTemplateFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): CreateSmtpTemplate {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		tag: !exists(json, 'tag') ? undefined : json['tag'],
		sender: CreateSmtpTemplateSenderFromJSON(json['sender']),
		templateName: json['templateName'],
		htmlContent: !exists(json, 'htmlContent') ? undefined : json['htmlContent'],
		htmlUrl: !exists(json, 'htmlUrl') ? undefined : json['htmlUrl'],
		subject: json['subject'],
		replyTo: !exists(json, 'replyTo') ? undefined : json['replyTo'],
		toField: !exists(json, 'toField') ? undefined : json['toField'],
		attachmentUrl: !exists(json, 'attachmentUrl') ? undefined : json['attachmentUrl'],
		isActive: !exists(json, 'isActive') ? undefined : json['isActive']
	};
}

export function CreateSmtpTemplateToJSON(value?: CreateSmtpTemplate | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		tag: value.tag,
		sender: CreateSmtpTemplateSenderToJSON(value.sender),
		templateName: value.templateName,
		htmlContent: value.htmlContent,
		htmlUrl: value.htmlUrl,
		subject: value.subject,
		replyTo: value.replyTo,
		toField: value.toField,
		attachmentUrl: value.attachmentUrl,
		isActive: value.isActive
	};
}
