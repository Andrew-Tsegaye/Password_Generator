const generatePassword = require("./password_generator");

describe("Password Generator", () => {
  test("generated password should have a length of 10", () => {
    const password = generatePassword(10);
    expect(password.length).toBe(10);
  });

  test("generated password should contain at least one uppercase letter", () => {
    const password = generatePassword(10);
    const hasUppercase = /[A-Z]/.test(password);
    expect(hasUppercase).toBe(true);
  });

  test("generated password should contain at least one lowercase letter", () => {
    const password = generatePassword(10);
    const hasLowercase = /[a-z]/.test(password);
    expect(hasLowercase).toBe(true);
  });

  test("generated password should contain at least one number", () => {
    const password = generatePassword(10);
    const hasNumber = /\d/.test(password);
    expect(hasNumber).toBe(true);
  });

  test("generated password should contain at least one special character", () => {
    const password = generatePassword(10);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    expect(hasSpecialCharacter).toBe(true);
  });
});
