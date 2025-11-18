import React from "react";
import "../styles/PrivacyPolicy.scss";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="privacy-section">
            <div className="privacy-content">
                <h1 className="privacy-title">Privacy Policy</h1>

                <div className="privacy-block">
                    <h2>1. Data Protection at a Glance</h2>
                    <h3>General Information</h3>
                    <p>
                        The following information provides a simple overview of what happens to your
                        personal data when you visit this website. Personal data is any data that can
                        be used to identify you personally.
                    </p>
                </div>

                <div className="privacy-block">
                    <h2>2. Data Collection on This Website</h2>
                    <h3>Who is responsible for data collection on this website?</h3>
                    <p>
                        Data processing on this website is carried out by the website operator. You
                        can find their contact details in the imprint of this website.
                    </p>

                    <h3>How do we collect your data?</h3>
                    <p>
                        Your data is collected when you provide it to us. This may be data that you
                        enter in a contact form, for example.
                    </p>
                    <p>
                        Other data is collected automatically or with your consent when you visit the
                        website through our IT systems. This is mainly technical data (e.g., internet
                        browser, operating system, or time of page access). This data is collected
                        automatically as soon as you enter this website.
                    </p>

                    <h3>What do we use your data for?</h3>
                    <p>
                        Some of the data is collected to ensure error-free provision of the website.
                        Other data may be used to analyze your user behavior.
                    </p>
                </div>

                <div className="privacy-block">
                    <h2>3. General Information and Mandatory Information</h2>
                    <h3>Data Protection</h3>
                    <p>
                        The operators of these pages take the protection of your personal data very
                        seriously. We treat your personal data confidentially and in accordance with
                        statutory data protection regulations and this privacy policy.
                    </p>
                    <p>
                        When you use this website, various personal data is collected. Personal data
                        is data with which you can be personally identified. This privacy policy explains
                        what data we collect and what we use it for. It also explains how and for what
                        purpose this is done.
                    </p>
                </div>

                <div className="privacy-block">
                    <h2>4. Data Collection on This Website</h2>
                    <h3>Contact Form</h3>
                    <p>
                        If you send us inquiries via the contact form, your details from the inquiry
                        form, including the contact data you provided there, will be stored by us for
                        the purpose of processing the inquiry and in case of follow-up questions. We
                        will not pass on this data without your consent.
                    </p>
                    <p>
                        The processing of this data is based on Art. 6 (1) lit. b GDPR, if your request
                        is related to the fulfillment of a contract or is necessary for the implementation
                        of pre-contractual measures. In all other cases, the processing is based on our
                        legitimate interest in the effective processing of the requests addressed to us
                        (Art. 6 (1) lit. f GDPR) or on your consent (Art. 6 (1) lit. a GDPR) if this
                        was requested.
                    </p>
                    <p>
                        The data you enter in the contact form will remain with us until you request us
                        to delete it, revoke your consent to storage, or the purpose for data storage no
                        longer applies (e.g., after your request has been processed). Mandatory statutory
                        provisions - especially retention periods - remain unaffected.
                    </p>
                </div>

                <div className="privacy-block">
                    <h2>5. Your Rights</h2>
                    <h3>Right to Information</h3>
                    <p>
                        You have the right to receive free information about your stored personal data,
                        its origin and recipients, and the purpose of data processing at any time, as well
                        as a right to correction or deletion of this data.
                    </p>

                    <h3>Right to Restriction of Processing</h3>
                    <p>
                        You have the right to request the restriction of the processing of your personal
                        data. You can contact us at any time at the address given in the imprint.
                    </p>

                    <h3>Right to Data Portability</h3>
                    <p>
                        You have the right to have data that we process automatically on the basis of
                        your consent or in fulfillment of a contract handed over to you or to a third
                        party in a common, machine-readable format.
                    </p>
                </div>

                <div className="privacy-block">
                    <h2>6. Analysis Tools and Third-Party Tools</h2>
                    <p>
                        This website does not currently use any analysis tools or third-party tools that
                        collect personal data. Should this change, we will update this privacy policy
                        accordingly.
                    </p>
                </div>

                <div className="privacy-block">
                    <h2>7. SSL or TLS Encryption</h2>
                    <p>
                        For security reasons and to protect the transmission of confidential content, such
                        as orders or inquiries that you send to us as the site operator, this site uses
                        SSL or TLS encryption. You can recognize an encrypted connection by the fact that
                        the address line of the browser changes from "http://" to "https://" and by the
                        lock symbol in your browser line.
                    </p>
                    <p>
                        If SSL or TLS encryption is activated, the data you transmit to us cannot be read
                        by third parties.
                    </p>
                </div>

                <div className="privacy-block">
                    <h2>8. Contact</h2>
                    <p>
                        If you have questions about data protection, please contact us at:{" "}
                        <a
                            href="mailto:Contact@mecrytv.de"
                            className="privacy-link"
                        >
                            Contact@mecrytv.de
                        </a>
                    </p>
                </div>

                <div className="privacy-footer">
                    <p>Source: Created with the privacy policy generator from eRecht24.</p>
                    <p>Last updated: November 2025</p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;