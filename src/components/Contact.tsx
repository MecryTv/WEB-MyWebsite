import React from "react";
import "../styles/Contact.scss";

const Contact: React.FC = () => {
    return (
        <div className="contact-section">
            <div className="contact-content">
                <h2 className="contact-title">Kontakt</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Dein Name"
                        />
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input
                            type="email"
                            placeholder="deine@email.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Nachricht</label>
                        <textarea
                            rows={5}
                            placeholder="Deine Nachricht..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Absenden
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;