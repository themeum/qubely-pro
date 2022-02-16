/**
 * Internal dependencies
 */
import Edit from "./Edit";
import Save from "./Save";
import "./style.scss";
import { attributes, defaultFormItems } from "./attributes";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import classnames from "classnames";
const { RichText, InnerBlocks } = wp.blockEditor;
const {
	QubelyButtonSave,
	HelperFunction: { animationAttr, IsInteraction },
} = wp.qubelyComponents;

registerBlockType("qubely/form", {
	title: __("Form Builder"),
	category: "qubely",
	icon: <img src={qubely_pro_admin.plugin + "assets/img/blocks/block-form.svg"} alt={__("Form")} />,
	description: "Create functional Form using Qubely Form block.",
	keywords: [__("Form"), __("Form Builder"), __("Builder")],
	supports: {
		align: ["center", "wide", "full"],
		html: false,
	},
	example: {
		attributes: {
			formItems: defaultFormItems,
		},
		innerBlocks: [
			{
				name: "qubely/image",
				attributes: {
					image: { url: "http://qubely.io/wp-content/uploads/qubely-assets/demo/form-builder.png" },
				},
			},
		],
	},
	attributes,
	edit: Edit,
	save: Save,
	deprecated: [
		{
			attributes,
			save(props) {
				const {
					attributes: {
						uniqueId,
						inputSize,
						fieldErrorMessage,
						formSuccessMessage,
						formErrorMessage,
						reCaptcha,
						reCaptchaSiteKey,
						reCaptchaSecretKey,
						policyCheckbox,
						policyCheckboxText,
						emailReceiver,
						emailHeaders,
						emailFrom,
						emailSubject,
						emailBody,
						layout,
						buttonFillType,
						buttonSize,
						buttonText,
						buttonIconName,
						buttonIconPosition,
						buttonTag,
						animation,
						interaction,
						afterSubmitAction,
						mcListId,
						mcMappedFields,
					},
				} = props;

				const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";
				const formClassName = classnames("qubely-form", `is-${inputSize}`, {
					["mailchimp"]: afterSubmitAction === "mailchimp",
				});
				const _encrypt = (str) => {
					return str;
				};
				return (
					<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
						<div className={`qubely-block-form ${interactionClass} qubely-layout-${layout}`}>
							<form className={`qubely-form is-${inputSize}`}>
								<InnerBlocks.Content />

								{reCaptcha && reCaptchaSiteKey && reCaptchaSecretKey && (
									<div className="qubely-form qubely-google-recaptcha" />
								)}

								{policyCheckbox && (
									<div className={`qubely-form-policy-checkbox-wrapper`}>
										<input
											className="qubely-form-policy-checkbox"
											type="checkbox"
											name={`qubely-form-policy-${uniqueId}`}
											id={`qubely-form-policy-checkbox-${uniqueId}`}
											value="Yes"
											required
										/>
										<RichText.Content
											tagName="div"
											className={`qubely-form-policy-checkbox-message`}
											value={policyCheckboxText}
										/>
									</div>
								)}

								<div className="qubely-form-button">
									<QubelyButtonSave
										buttonFillType={buttonFillType}
										buttonSize={buttonSize}
										buttonText={buttonText}
										buttonIconName={buttonIconName}
										buttonIconPosition={buttonIconPosition}
										buttonTag={buttonTag}
									/>

									<input
										type="hidden"
										name="field-error-message"
										value={_encrypt(fieldErrorMessage)}
									/>
									<input
										type="hidden"
										name="form-success-message"
										value={_encrypt(formSuccessMessage)}
									/>
									<input
										type="hidden"
										name="form-error-message"
										value={_encrypt("Email sent failed, fill required field and try again!")}
									/>
									<input
										type="hidden"
										name="recaptcha"
										value={reCaptcha && reCaptchaSiteKey && reCaptchaSecretKey ? "true" : "false"}
									/>
									<input type="hidden" name="recaptcha-site-key" value={reCaptchaSiteKey} />
									<input type="hidden" name="recaptcha-secret-key" value={reCaptchaSecretKey} />
									<input type="hidden" name="email-receiver" value={_encrypt(emailReceiver)} />
									<input
										type="hidden"
										name="email-headers"
										value={_encrypt(
											"Reply-To: {{email}}\nReply-name: {{first-name}} {{last-name}}\nCc: {{email}}\nBcc: admin@yourcompany.com"
										)}
									/>
									<input
										type="hidden"
										name="email-from"
										value={_encrypt("Your Name: admin@example.com")}
									/>
									<input
										type="hidden"
										name="email-subject"
										value={_encrypt("{{subject}} | {{email}} | {{site-name}}")}
									/>
									<input
										type="hidden"
										name="email-body"
										value={_encrypt(
											"<p><strong>From:</strong> {{first-name}} {{last-name}}</p><strong>Email:</strong> {{email}}</p>\n<p><strong>Subject:</strong> {{subject}}</p>\n<p><strong>Message:</strong> {{message}}</p>"
										)}
									/>
								</div>

								<div className="qubely-form-message"></div>
							</form>
						</div>
					</div>
				);
			},
		},
		{
			attributes,
			save(props) {
				const {
					attributes: {
						uniqueId,
						inputSize,
						fieldErrorMessage,
						formSuccessMessage,
						formErrorMessage,
						reCaptcha,
						reCaptchaSiteKey,
						reCaptchaSecretKey,
						policyCheckbox,
						policyCheckboxText,
						emailReceiver,
						emailHeaders,
						emailFrom,
						emailSubject,
						emailBody,
						layout,
						buttonFillType,
						buttonSize,
						buttonText,
						buttonIconName,
						buttonIconPosition,
						buttonTag,
						animation,
						interaction,
						afterSubmitAction,
						mcListId,
						mcMappedFields,
					},
				} = props;

				const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";
				const formClassName = classnames("qubely-form", `is-${inputSize}`, {
					["mailchimp"]: afterSubmitAction === "mailchimp",
				});
				const _encrypt = (str) => {
					return window.btoa(unescape(encodeURIComponent(str)));
				};
				return (
					<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
						<div className={`qubely-block-form ${interactionClass} qubely-layout-${layout}`}>
							<form className={`qubely-form is-${inputSize}`}>
								<InnerBlocks.Content />

								{reCaptcha && reCaptchaSiteKey && reCaptchaSecretKey && (
									<div className="qubely-form qubely-google-recaptcha" />
								)}

								{policyCheckbox && (
									<div className={`qubely-form-policy-checkbox-wrapper`}>
										<input
											className="qubely-form-policy-checkbox"
											type="checkbox"
											name={`qubely-form-policy-${uniqueId}`}
											id={`qubely-form-policy-checkbox-${uniqueId}`}
											value="Yes"
											required
										/>
										<RichText.Content
											tagName="div"
											className={`qubely-form-policy-checkbox-message`}
											value={policyCheckboxText}
										/>
									</div>
								)}

								<div className="qubely-form-button">
									<QubelyButtonSave
										buttonFillType={buttonFillType}
										buttonSize={buttonSize}
										buttonText={buttonText}
										buttonIconName={buttonIconName}
										buttonIconPosition={buttonIconPosition}
										buttonTag={buttonTag}
									/>

									<input
										type="hidden"
										name="field-error-message"
										value={_encrypt(fieldErrorMessage)}
									/>
									<input
										type="hidden"
										name="form-success-message"
										value={_encrypt(formSuccessMessage)}
									/>
									<input
										type="hidden"
										name="form-error-message"
										value={_encrypt(
											"Email sending failed, something went wrong! Please try again."
										)}
									/>
									<input
										type="hidden"
										name="recaptcha"
										value={reCaptcha && reCaptchaSiteKey && reCaptchaSecretKey ? "true" : "false"}
									/>
									<input type="hidden" name="recaptcha-site-key" value={reCaptchaSiteKey} />
									<input type="hidden" name="recaptcha-secret-key" value={reCaptchaSecretKey} />
									<input type="hidden" name="email-receiver" value={_encrypt(emailReceiver)} />
									<input
										type="hidden"
										name="email-headers"
										value={_encrypt(
											"Reply-To: {{email}}\nReply-name: {{text-11}} {{text-12}}\nCc: {{email}}\nBcc: admin@yourcompany.com"
										)}
									/>
									<input
										type="hidden"
										name="email-from"
										value={_encrypt("Your Company Name: admin@qubely.io")}
									/>
									<input
										type="hidden"
										name="email-subject"
										value={_encrypt("{{text-31}} | {{email-21}} | {{site-name}}")}
									/>
									<input
										type="hidden"
										name="email-body"
										value={_encrypt(
											"<p><strong>From:</strong> {{text-11}} {{text-12}}</p><strong>Email:</strong> {{email-21}}</p>\n<p><strong>Subject:</strong> {{text-31}}</p>\n<p><strong>Message:</strong> {{textarea-41}}</p>"
										)}
									/>
								</div>

								<div className="qubely-form-message"></div>
							</form>
						</div>
					</div>
				);
			},
		},
		{
			attributes,
			save(props) {
				const {
					attributes: {
						uniqueId,
						inputSize,
						fieldErrorMessage,
						formSuccessMessage,
						formErrorMessage,
						reCaptcha,
						reCaptchaSiteKey,
						reCaptchaSecretKey,
						policyCheckbox,
						policyCheckboxText,
						emailReceiver,
						emailHeaders,
						emailFrom,
						emailSubject,
						emailBody,
						layout,
						buttonFillType,
						buttonSize,
						buttonText,
						buttonIconName,
						buttonIconPosition,
						buttonTag,
						animation,
						interaction,
						afterSubmitAction,
						mcListId,
						mcMappedFields,
					},
				} = props;

				const interactionClass = IsInteraction(interaction) ? "qubley-block-interaction" : "";
				const formClassName = classnames("qubely-form", `is-${inputSize}`, {
					["mailchimp"]: afterSubmitAction === "mailchimp",
				});
				const _encrypt = (str) => {
					return window.btoa(unescape(encodeURIComponent(str)));
				};
				return (
					<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
						<div className={`qubely-block-form ${interactionClass} qubely-layout-${layout}`}>
							<form className={`qubely-form is-${inputSize}`}>
								<InnerBlocks.Content />

								{reCaptcha && reCaptchaSiteKey && reCaptchaSecretKey && (
									<div className="qubely-form qubely-google-recaptcha" />
								)}

								{policyCheckbox && (
									<div className={`qubely-form-policy-checkbox-wrapper`}>
										<input
											className="qubely-form-policy-checkbox"
											type="checkbox"
											name={`qubely-form-policy-${uniqueId}`}
											id={`qubely-form-policy-checkbox-${uniqueId}`}
											value="Yes"
											required
										/>
										<RichText.Content
											tagName="div"
											className={`qubely-form-policy-checkbox-message`}
											value={policyCheckboxText}
										/>
									</div>
								)}

								<div className="qubely-form-button">
									<QubelyButtonSave
										buttonFillType={buttonFillType}
										buttonSize={buttonSize}
										buttonText={buttonText}
										buttonIconName={buttonIconName}
										buttonIconPosition={buttonIconPosition}
										buttonTag={buttonTag}
									/>

									<input
										type="hidden"
										name="field-error-message"
										value={_encrypt(fieldErrorMessage)}
									/>
									<input
										type="hidden"
										name="form-success-message"
										value={_encrypt(formSuccessMessage)}
									/>
									<input
										type="hidden"
										name="form-error-message"
										value={_encrypt(
											"Email sending failed, something went wrong! Please try again."
										)}
									/>
									<input
										type="hidden"
										name="recaptcha"
										value={reCaptcha && reCaptchaSiteKey && reCaptchaSecretKey ? "true" : "false"}
									/>
									<input type="hidden" name="recaptcha-site-key" value={reCaptchaSiteKey} />
									<input type="hidden" name="recaptcha-secret-key" value={reCaptchaSecretKey} />
									<input type="hidden" name="email-receiver" value={_encrypt(emailReceiver)} />
									<input
										type="hidden"
										name="email-headers"
										value={_encrypt(
											"Reply-To: {{email}}\nReply-name: {{text-11}} {{text-12}}\nCc: {{email}}\nBcc: admin@yourcompany.com"
										)}
									/>
									<input
										type="hidden"
										name="email-from"
										value={_encrypt("Your Company Name: admin@your_sitename.com")}
									/>
									<input
										type="hidden"
										name="email-subject"
										value={_encrypt("{{text-31}} | {{email-21}} | {{site-name}}")}
									/>
									<input
										type="hidden"
										name="email-body"
										value={_encrypt(
											"<p><strong>From:</strong> {{text-11}} {{text-12}}</p><strong>Email:</strong> {{email-21}}</p>\n<p><strong>Subject:</strong> {{text-31}}</p>\n<p><strong>Message:</strong> {{textarea-41}}</p>"
										)}
									/>
								</div>

								<div className="qubely-form-message"></div>
							</form>
						</div>
					</div>
				);
			},
		},
	],
});
