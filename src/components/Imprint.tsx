import React from "react";
import "../styles/Imprint.scss";

const Imprint: React.FC = () => {
    return (
        <div className="imprint-section">
            <div className="imprint-content">
                <h1 className="imprint-title">Imprint</h1>

                <div className="imprint-block">
                    <h2>Information according to § 5 TMG</h2>
                    <p>
                        mecrytv - Joe Jobst<br />
                        c/o Online-Impressum.de #4931<br />
                        Europaring 90<br />
                        53757 Sankt Augustin<br />
                        Germany
                    </p>
                </div>

                <div className="imprint-block">
                    <h2>Contact</h2>
                    <p>
                        E-Mail:
                        <a
                            href="mailto:Contact@mecrytv.de"
                            className="imprint-link"
                        >
                            {" "}Contact@mecrytv.de
                        </a>
                    </p>
                </div>

                <div className="imprint-block">
                    <h2>Editorially Responsible</h2>
                    <p>
                        Joe Jobst<br />
                        c/o Online-Impressum.de #4931<br />
                        Europaring 90<br />
                        53757 Sankt Augustin
                    </p>
                </div>

                <div className="imprint-block">
                    <h2>Complete Legal Information</h2>
                    <p>
                        For complete legal information and further details, please visit our{" "}
                        <a
                            href="https://mein.online-impressum.de/mecrytv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="imprint-link"
                            title="https://mein.online-impressum.de/mecrytv/"
                        >
                            full imprint page
                        </a>.
                    </p>
                </div>

                <div className="imprint-block">
                    <h2>EU Dispute Resolution</h2>
                    <p>
                        The European Commission provides a platform for online dispute resolution (ODR):{" "}
                        <a
                            href="https://ec.europa.eu/consumers/odr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="imprint-link"
                            title="https://ec.europa.eu/consumers/odr/"
                        >
                            ec.europa.eu/consumers/odr
                        </a>
                    </p>
                    <p>
                        You can find our email address in the imprint above.
                    </p>
                </div>

                <div className="imprint-block">
                    <h2>Consumer Dispute Resolution / Universal Arbitration Board</h2>
                    <p>
                        We are not willing or obliged to participate in dispute resolution proceedings before
                        a consumer arbitration board.
                    </p>
                </div>

                <div className="imprint-block">
                    <h2>Liability for Content</h2>
                    <p>
                        As a service provider, we are responsible for our own content on these pages in
                        accordance with § 7 paragraph 1 TMG under general law. According to §§ 8 to 10 TMG,
                        however, we are not obligated as a service provider to monitor transmitted or stored
                        third-party information or to investigate circumstances that indicate illegal activity.
                    </p>
                    <p>
                        Obligations to remove or block the use of information under general law remain
                        unaffected. However, liability in this regard is only possible from the point in time
                        at which knowledge of a specific infringement of the law is obtained. Upon becoming
                        aware of corresponding legal violations, we will remove this content immediately.
                    </p>
                </div>

                <div className="imprint-block">
                    <h2>Liability for Links</h2>
                    <p>
                        Our website contains links to external websites of third parties, over whose content
                        we have no influence. Therefore, we cannot accept any liability for this external
                        content. The respective provider or operator of the pages is always responsible for
                        the content of the linked pages. The linked pages were checked for possible legal
                        violations at the time of linking. Illegal content was not recognizable at the time
                        of linking.
                    </p>
                    <p>
                        However, permanent monitoring of the content of linked pages is not reasonable without
                        concrete evidence of a legal violation. Upon becoming aware of legal violations, we
                        will remove such links immediately.
                    </p>
                </div>

                <div className="imprint-block">
                    <h2>Copyright</h2>
                    <p>
                        The content and works created by the site operators on these pages are subject to
                        German copyright law. The duplication, processing, distribution and any kind of
                        exploitation outside the limits of copyright law require the written consent of the
                        respective author or creator. Downloads and copies of this site are only permitted
                        for private, non-commercial use.
                    </p>
                    <p>
                        Insofar as the content on this site was not created by the operator, the copyrights
                        of third parties are respected. In particular, third-party content is marked as such.
                        Should you nevertheless become aware of a copyright infringement, please inform us
                        accordingly. Upon becoming aware of legal violations, we will remove such content
                        immediately.
                    </p>
                </div>

                <div className="imprint-footer">
                    <p>Source: Created with the imprint generator from eRecht24.</p>
                </div>
            </div>
        </div>
    );
}

export default Imprint;