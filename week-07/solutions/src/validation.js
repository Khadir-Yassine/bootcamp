export function validate(values) {
  const phone = values.phone || "";
  return {
    firstName: values.firstName?.trim() ? "" : "First name is required.",
    lastName: values.lastName?.trim() ? "" : "Last name is required.",
    phone:
      /^\+?[\d ()-]+$/.test(phone) &&
      phone.replace(/\D/g, "").length >= 7 &&
      phone.replace(/\D/g, "").length <= 15
        ? ""
        : "Enter a valid phone number.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || "")
      ? ""
      : "Enter a valid email.",
  };
}
