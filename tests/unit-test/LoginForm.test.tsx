import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "@/components/forms/LoginForm";

describe("LoginForm", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  test("Renders form with email and password fields", () => {
    expect(screen.getByLabelText(/Email or Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test("Update email and password fields on change", () => {
    const emailInput = screen.getByLabelText(/Email or Phone Number/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    userEvent.type(emailInput, "test@test.com");
    userEvent.type(passwordInput, "testaccount1");

    expect(emailInput).toHaveValue("test@test.com");
    expect(passwordInput).toHaveValue("testaccount1");
  });

  test("Submit button is disables when fields are empty", () => {
    const SubmitButton = screen.getByRole("button", { name: /Log In/i });
    expect(SubmitButton).toBeDisabled();

    userEvent.type(
      screen.getByLabelText(/Email or Phone Number/i),
      "test@test.com"
    );
    expect(SubmitButton).toBeDisabled();

    userEvent.type(screen.getByLabelText(/Password/i), "testaccount1");
    expect(SubmitButton).toBeEnabled();
  });
});
