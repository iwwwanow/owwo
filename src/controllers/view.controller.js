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
  // 24px only
  username: "test-username",
  avatar: {
    blob: "https://images.placeholders.dev/?width=32&height=32",
    w16: "https://images.placeholders.dev/?width=16&height=16",
    w16_2x: "https://images.placeholders.dev/?width=32&height=32",
    w32: "https://images.placeholders.dev/?width=32&height=32",
    w32_2x: "https://images.placeholders.dev/?width=64&height=64",
    w1080: "https://images.placeholders.dev/?width=1080&height=1080",
    w190: "https://images.placeholders.dev/?width=190&height=190",
    w190_2x: "https://images.placeholders.dev/?width=380&height=380",
  },
};

const testCoverData = {
  blob: "blob",
  // TODO it may be smaller or bigger than HD
  original: "https://images.placeholders.dev/?width=1080&height=1080",
  // SIMILAR:
  w22: "https://images.placeholders.dev/?width=22&height=32",
  w22_2x: "https://images.placeholders.dev/?width=42&height=64",
  w10: "https://images.placeholders.dev/?width=10&height=16",
  // SIMILAR:
  w10_2x: "https://images.placeholders.dev/?width=22&height=32",
  w190: "https://images.placeholders.dev/?width=190&height=288",
  w190_2x: "https://images.placeholders.dev/?width=380&height=576",
  w1080: "https://images.placeholders.dev/?width=1080&height=1080",
};

const testPageData = {
  pageId: "test-page-id",
  title: "testPageTitle",
  // open closed invite archived trashCan
  pageType: "open",
  // TODO sord users by type
  users: [
    {
      ...testUserData,
      // username: "EFFECTIVNAYARABOTA1",
      username: "ChannelOfTheCultOfTheGoddessOfFlowersgg",
      // username: "IIChannelOfTheCultOfTheGoddessOfFlowers",
      type: "owner",
    },
    {
      ...testUserData,
      type: "editor",
    },
    {
      ...testUserData,
      type: "pusher",
    },
    {
      ...testUserData,
      // only on closed page
      type: "viewer",
    },
  ],
  cover: testCoverData,
};

const testElementData = {
  elementId: "test-element-id",
  title: "testElementTitle",
  // content?
  cover: testCoverData,
};

const testLastDate = new Date(Date.now());
const testCreationDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);

const testDateData = {
  creation: testCreationDate,
  last: testLastDate,
};

const testTextPath = "./test/text.test.md";
const testTextFile = Bun.file(testTextPath);
const testTextMdString = await testTextFile.text();
const testTextHtmlString = await marked.parse(testTextMdString);
const testTextHtmlCleanString = DOMPurify.sanitize(testTextHtmlString);

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

const testTextData = {
  markdown: testTextMdString,
  html: testTextHtmlCleanString,
  preview: makeTextPreview(testTextMdString),
};

testUserData.date = testDateData;
testUserData.text = testTextData;

testPageData.date = testDateData;
testPageData.text = testTextData;

testElementData.user = testUserData;
testElementData.date = testDateData;
testElementData.text = testTextData;
// TODO если не могу найти следующий элемент, предлагать следующую страницу
// ИЛИ возвращение в профиль
testElementData.navigationElements = {
  prevElement: testElementData,
  nextElement: testElementData,
};

const randomUserElements = [];
const randomOwwoElements = [];

for (let index = 0; index < 32; index++) {
  randomUserElements.push(testElementData);
}

for (let index = 0; index < 128; index++) {
  randomOwwoElements.push(testElementData);
}

// TODO pages and elements
testElementData.randomUserElements = randomUserElements;
testElementData.randomOwwoElements = randomOwwoElements;

testUserData.pages = [testPageData, testPageData, testPageData];
testPageData.elements = [testElementData, testElementData, testElementData];
testElementData.pages = [testPageData, testPageData, testPageData];

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
    };

    return ViewController.responsePageHtml(User, props);
  }

  static async renderPagePage() {
    const props = {
      page: testPageData,
    };

    return ViewController.responsePageHtml(Page, props);
  }

  static async renderElementPage() {
    const props = {
      element: testElementData,
    };
    return ViewController.responsePageHtml(Element, props);
  }

  static async renderErrorPage() {
    return ViewController.responsePageHtml(Error);
  }
}
