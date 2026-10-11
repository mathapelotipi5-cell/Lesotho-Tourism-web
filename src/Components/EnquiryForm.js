import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  visitors: "",
  date: "",
  message: "",
};

function formatLocalDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function EnquiryForm({ attractions = [] }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let sanitizedValue = value;

    if (name === "phone") {
      sanitizedValue = value.replace(/[^0-9+\-()\s]/g, "");
    } else if (name === "email") {
      sanitizedValue = value.replace(/\s+/g, "").toLowerCase();
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));

    setErrors((prev) => {
      const nextErrors = { ...prev };
      delete nextErrors[name];
      return nextErrors;
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    const nameVal = formData.name.trim();
    const emailVal = formData.email.trim();
    const phoneVal = formData.phone.trim();
    const messageVal = formData.message.trim();

    if (!nameVal) {
      newErrors.name = "Please enter your full name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(emailVal)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const digitsOnly = phoneVal.replace(/\D/g, "");
    if (!phoneVal) {
      newErrors.phone = "Please enter your phone number.";
    } else if (digitsOnly.length < 8) {
      newErrors.phone = "Phone number must contain at least 8 digits.";
    }

    if (!formData.destination) {
      newErrors.destination = "Please select a destination.";
    }

    const visitorCount = Number(formData.visitors);
    if (!Number.isInteger(visitorCount) || visitorCount < 1) {
      newErrors.visitors = "Please enter at least 1 visitor.";
    }

    const todayFormatted = formatLocalDate(new Date());
    if (!formData.date) {
      newErrors.date = "Please select your preferred visit date.";
    } else if (formData.date < todayFormatted) {
      newErrors.date = "Please choose today or a future date.";
    }

    if (!messageVal) {
      newErrors.message = "Please add a short message for our team.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialForm);
    }
  };

  const renderError = (fieldName) => {
    if (!errors[fieldName]) return null;
    return (
      <span className="field-error" id={`${fieldName}-error`} role="alert">
        {errors[fieldName]}
      </span>
    );
  };

  const todayFormatted = formatLocalDate(new Date());

  return (
    <div className="enquiry-form">
      {submitted && (
        <p className="success-message" role="status">
          ✓ Thank you! Your enquiry has been received. Our team will contact you shortly.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              autoComplete="name"
              required
              placeholder="e.g. Thabo Mokoena"
            />
            {renderError("name")}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
            {renderError("email")}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "input-error" : ""}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              autoComplete="tel"
              required
              placeholder="+266 5XXX XXXX"
            />
            {renderError("phone")}
          </div>

          <div className="form-field">
            <label htmlFor="destination">Destination</label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className={errors.destination ? "input-error" : ""}
              aria-invalid={Boolean(errors.destination)}
              aria-describedby={errors.destination ? "destination-error" : undefined}
              required
            >
              <option value="">Choose a place</option>
              {attractions.map((attraction) => (
                <option key={attraction.id || attraction.name} value={attraction.name}>
                  {attraction.name}
                </option>
              ))}
            </select>
            {renderError("destination")}
          </div>

          <div className="form-field">
            <label htmlFor="visitors">Number of visitors</label>
            <input
              id="visitors"
              name="visitors"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              value={formData.visitors}
              onChange={handleChange}
              className={errors.visitors ? "input-error" : ""}
              aria-invalid={Boolean(errors.visitors)}
              aria-describedby={errors.visitors ? "visitors-error" : undefined}
              required
              placeholder="2"
            />
            {renderError("visitors")}
          </div>

          <div className="form-field">
            <label htmlFor="date">Preferred visit date</label>
            <input
              id="date"
              name="date"
              type="date"
              min={todayFormatted}
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? "input-error" : ""}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? "date-error" : undefined}
              required
            />
            {renderError("date")}
          </div>

          <div className="form-field form-full">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "input-error" : ""}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              required
              placeholder="What would you like to know?"
            />
            {renderError("message")}
          </div>
        </div>

        <button className="button button-dark submit-button" type="submit">
          Send your enquiry <span aria-hidden="true">↗</span>
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;