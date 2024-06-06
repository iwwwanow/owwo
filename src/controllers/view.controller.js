import { html } from "@stricjs/app/send";
import { SveltePageView } from "../views/svelte-page.view.js";

import { DataTestModel } from "../../test/test-models/data.test-model.js";

import HomePage from "../svelte/pages/home.page.svelte";
import AboutPage from "../svelte/pages/about.page.svelte";
import LoginPage from "../svelte/pages/login.page.svelte";
import SignupPage from "../svelte/pages/signup.page.svelte";
import ErrorPage from "../svelte/pages/error.page.svelte";

import NodePage from "../svelte/pages/node.page.svelte";

// import User from "../svelte/pages/User.page.svelte";
// import Page from "../svelte/pages/Page.page.svelte";
// import Element from "../svelte/pages/Element.page.svelte";

export class ViewController {
  static async responsePageHtml(componentName, props) {
    const pageView = new SveltePageView(componentName, props);
    const pageHtml = await pageView.getPageHtml();
    return html(pageHtml);
  }

  static async renderHomePage() {
    const users = await DataTestModel.getNodesData(32);
    const props = { users };
    return ViewController.responsePageHtml(HomePage, props);
  }

  static async renderAboutPage() {
    return ViewController.responsePageHtml(AboutPage);
  }

  static async renderLoginPage() {
    return ViewController.responsePageHtml(LoginPage);
  }

  static async renderSignupPage() {
    return ViewController.responsePageHtml(SignupPage);
  }

  static async renderNodePage() {
    const nodeData = await DataTestModel.getNodeData();
    nodeData.childs = [nodeData, nodeData];
    const props = { node: nodeData };
    return ViewController.responsePageHtml(NodePage, props);
  }

  // static async renderUserPage() {
  //   const user = await DataTestModel.getUserNodeData();
  //   const props = { user };
  //   return ViewController.responsePageHtml(User, props);
  // }
  //
  // static async renderPagePage() {
  //   const page = await DataTestModel.getPageNodeData();
  //   const props = { page };
  //   return ViewController.responsePageHtml(Page, props);
  // }
  //
  // static async renderElementPage() {
  //   const props = {
  //     element: testElementData,
  //     randomUserElements: DataTestModel.getElementNodesData(32),
  //     // TODO maybe make it bigger?
  //     randomOwwoElements: DataTestModel.getElementNodesData(128),
  //   };
  //   return ViewController.responsePageHtml(Element, props);
  // }

  static async renderErrorPage() {
    return ViewController.responsePageHtml(Error);
  }
}
