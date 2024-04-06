import { html } from "@stricjs/app/send";
import { SveltePageView } from "../views/svelte-page.view.js";

import Home from "../components/Home.svelte";
import About from "../components/About.svelte";
import Login from "../components/Login.svelte";
import Signup from "../components/Signup.svelte";
import User from "../components/User.svelte";
import Page from "../components/Page.svelte";
import Element from "../components/Element.svelte";
import Error from "../components/Error.svelte";

export class ViewController {
  static async responsePageHtml(componentName) {
    const pageView = new SveltePageView(componentName);
    const pageHtml = await pageView.getPageHtml();
    return html(pageHtml);
  }

  static async renderHomePage() {
    return ViewController.responsePageHtml(Home);
  }

  static async renderAboutPage() {
    return ViewController.responsePageHtml(About);
  }

  static async renderLoginPage() {
    return ViewController.responsePageHtml(Login);
  }

  static async renderSignupPage() {
    return ViewController.responsePageHtml(Signup);
  }

  static async renderUserPage() {
    return ViewController.responsePageHtml(User);
  }

  static async renderPagePage() {
    return ViewController.responsePageHtml(Page);
  }

  static async renderElementPage() {
    return ViewController.responsePageHtml(Element);
  }

  static async renderErrorPage() {
    return ViewController.responsePageHtml(Error);
  }
}
