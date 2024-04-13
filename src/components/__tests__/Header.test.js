import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("Should render Header Component With a login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  //   const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});
it("Should render Header Component With a cart Item 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("🛒");
  //   const loginButton = screen.getByText("Login");
  expect(cartItem).toBeInTheDocument();
});
it("Should change Login Button to LogOut on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logOutButton = screen.getByRole("button", { name: "Logout" });
  expect(logOutButton).toBeInTheDocument();
});
