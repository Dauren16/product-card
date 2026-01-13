export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }

  getValue() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }
}