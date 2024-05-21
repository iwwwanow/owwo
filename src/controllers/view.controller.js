import {marked} from "marked";
import DOMPurify from "isomorphic-dompurify";

import {html} from "@stricjs/app/send";
import {SveltePageView} from "../views/svelte-page.view.js";

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
		w1080: "https://images.placeholders.dev/?width=1080&height=1080",
		w190: "https://images.placeholders.dev/?width=190&height=190",
		w190_2x: "https://images.placeholders.dev/?width=380&height=380",
	},
};

const testPageData = {
	pageId: "test-page-id",
	title: "testPageTitle",
	// open closed invite archived trashCan
	pageType: "open",
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
	cover: {
		blob: "blob",
		w1080: "https://images.placeholders.dev/?width=1080&height=1080",
		w190: "https://images.placeholders.dev/?width=190&height=288",
		w190_2x: "https://images.placeholders.dev/?width=380&height=576",
	},
};

const testElementData = {
	elementId: "test-element-id",
	title: "testElementTitle",
	user: "test-username",
	cover: {
		blob: "blob",
		w1080: "https://images.placeholders.dev/?width=1080&height=1080",
		w190: "https://images.placeholders.dev/?width=190&height=288",
		w190_2x: "https://images.placeholders.dev/?width=380&height=576",
	},
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

testElementData.date = testDateData;
testElementData.text = testTextData;

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

		const props = {users};
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
		const props = {
			page: testPageData,
			elements: [testElementData, testElementData, testElementData],
		};

		return ViewController.responsePageHtml(Page, props);
	}

	static async renderElementPage() {
		return ViewController.responsePageHtml(Element);
	}

	static async renderErrorPage() {
		return ViewController.responsePageHtml(Error);
	}
}
