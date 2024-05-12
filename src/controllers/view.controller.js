import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

import { html } from "@stricjs/app/send";
import { SveltePageView } from "../views/svelte-page.view.js";

import Home from "../svelte/pages/Home.page.svelte";
import About from "../svelte/pages/About.page.svelte";
import Login from "../svelte/pages/Login.page.svelte";
import Signup from "../svelte/pages/Signup.page.svelte";
import User from "../svelte/pages/User.page.svelte";
import Page from "../svelte/pages/Page.page.svelte";
import Element from "../svelte/pages/Element.page.svelte";
import Error from "../svelte/pages/Error.page.svelte";

const testUserData = {
  username: "test-username",
  text: {
    markdown: "testPageMarkdownText",
    html: "testPageHtmlText",
  },
  avatar: {
    blob: "https://images.placeholders.dev/?width=32&height=32",
    w190: "https://images.placeholders.dev/?width=190&height=190",
    w190_2x: "https://images.placeholders.dev/?width=380&height=380",
  },
  date: {},
};

const testPageData = {
  pageId: "test-page-id",
  title: "testPageTitle",
  text: {
    markdown: "testPageMarkdownText",
    html: "testPageHtmlText",
  },
  cover: {
    original: "https://images.placeholders.dev/?width=1080&height=1080",
    w190: "https://images.placeholders.dev/?width=190&height=288",
    w190_2x: "https://images.placeholders.dev/?width=380&height=576",
  },
  date: {},
};

const testTextPath = "./test/text.test.md";
const testTextFile = Bun.file(testTextPath);
const testTextMdString = await testTextFile.text();
const testTextHtmlString = await marked.parse(testTextMdString);
const testTextHtmlCleanString = DOMPurify.sanitize(testTextHtmlString);

testUserData.text.markdown = testTextMdString;
testUserData.text.html = testTextHtmlCleanString;

testPageData.text.markdown = testTextMdString;
testPageData.text.html = testTextHtmlCleanString;

const testLastDate = new Date(Date.now());
const testCreationDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);

testUserData.date.last = testLastDate;
testUserData.date.creation = testCreationDate;

testPageData.date.last = testLastDate;
testPageData.date.creation = testCreationDate;

const makeTextPreview = (text) => {
  if (text.lenth < 320) return text;
  // TODO проверь итоговую длину строки? какбудто это неверно
  else {
    // const shortenString = text.slice(0, 240);
    const shortenString = text.slice(0, 240);
    const wordsArray = shortenString.split(" ");
    const outputString = wordsArray.slice(0, -1).join(" ") + "...";
    return outputString;
  }
};

testPageData.text.preview = makeTextPreview(testTextMdString);

export class ViewController {
  static async responsePageHtml(componentName, props) {
    const pageView = new SveltePageView(componentName, props);
    const pageHtml = await pageView.getPageHtml();
    return html(pageHtml);
  }

  static async renderHomePage() {
    // TODO UserModel.getTestUser

    const users = [];
    for (let i = 0; i < 32; i++) users.push(testUserData);

    const props = { users };
    return ViewController.responsePageHtml(Home, props);
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
    const props = {
      user: testUserData,
      pages: [testPageData, testPageData, testPageData],
    };

    return ViewController.responsePageHtml(User, props);
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
