import { html } from "@stricjs/app/send";
import { SveltePageView } from "../views/svelte-page.view.js";

import { NodeModel } from "../models/node.model.js";
import { DataTestModel } from "../../test/test-models/data.test-model.js";
import { getTextFileContentHelper } from "../helpers/get-text-file-content.helper.js";
import { convertMdHtmlHelper } from "../helpers/convert-md-html.helper.js";

import HomePage from "../svelte/pages/home.page.svelte";
import AboutPage from "../svelte/pages/about.page.svelte";
import LoginPage from "../svelte/pages/login.page.svelte";
import SignupPage from "../svelte/pages/signup.page.svelte";
import ErrorPage from "../svelte/pages/error.page.svelte";

import NodePage from "../svelte/pages/node.page.svelte";
import NodeExtendedPage from "../svelte/pages/node-extended.page.svelte";

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
    const users = await NodeModel.getNodes("user", 32);
    const props = { users };
    return ViewController.responsePageHtml(HomePage, props);
  }

  static async renderAboutPage() {
    const ABOUT_FILEPATH = "./README.md";
    const text = {};
    text.markdown = await getTextFileContentHelper(ABOUT_FILEPATH);
    text.html = await convertMdHtmlHelper(text.markdown);
    const props = { text };
    return ViewController.responsePageHtml(AboutPage, props);
  }

  static async renderLoginPage() {
    return ViewController.responsePageHtml(LoginPage);
  }

  static async renderSignupPage() {
    return ViewController.responsePageHtml(SignupPage);
  }

  static async renderNodePage({ params }) {
    const { nodeId } = params;
    const nodeData = await NodeModel.get(nodeId);
    const props = { node: nodeData };
    if (nodeData.meta.childs?.length) {
      return ViewController.responsePageHtml(NodePage, props);
    } else {
      return ViewController.responsePageHtml(NodeExtendedPage, props);
    }
  }

  // static async renderNodePage({ params }) {
  //   const { nodeId } = params;
  //   if (nodeId === "username") {
  //     const userNodeData = await DataTestModel.getUserNodeData();
  //     const pageNodeData = await DataTestModel.getPageNodeData();
  //
  //     // TODO change childs to page node
  //     userNodeData.childs = [pageNodeData, pageNodeData];
  //
  //     const props = { node: userNodeData };
  //     return ViewController.responsePageHtml(NodePage, props);
  //   } else if (nodeId === "page-id") {
  //     const pageNodeData = await DataTestModel.getPageNodeData();
  //
  //     // TODO change childs to page node
  //     pageNodeData.childs = [pageNodeData, pageNodeData];
  //
  //     const userNodeData = await DataTestModel.getUserNodeData();
  //     pageNodeData.authors = [userNodeData, userNodeData];
  //
  //     const props = { node: pageNodeData };
  //     return ViewController.responsePageHtml(NodePage, props);
  //   }
  // }

  // static async renderNodePage({ params }) {
  //   const { nodeId } = params;
  //   console.log(nodeId);
  //   const nodeData = await DataTestModel.getNodeData();
  //   nodeData.childs = [nodeData, nodeData];
  //   const props = { node: nodeData };
  //   return ViewController.responsePageHtml(NodePage, props);
  // }

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
