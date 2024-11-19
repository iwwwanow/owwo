import { AboutPage } from "@site-ui/about-page";
import { ErrorPage } from "@site-ui/error-page";
import { HomePage } from "@site-ui/home-page";
import { LoginPage } from "@site-ui/login-page";
import { NodeExtendedPage } from "@site-ui/node-extended-page";
import { NodePage } from "@site-ui/node-page";
import { SignupPage } from "@site-ui/signup-page";
import { getAboutPageContent } from "@site/getters";
import { NodeTestModel } from "@site/models";
import { MockModel } from "@site/models";
import { ClientModel } from "@site/models";

import type { GetHomePageProps } from "./view.interfaces";
import type { GetErrorPageProps } from "./view.interfaces";

class ViewController {
  static async getHomePage({ successMessage }: GetHomePageProps) {
    const TEST_USERS_QUANTITY = 128;
    const nodeData = await MockModel.getUserNodeData();
    const users = Array(TEST_USERS_QUANTITY).fill(nodeData);

    const clientData = { successMessage };

    const props = { clientData, users };

    return HomePage(props);
  }

  static async getAboutPage() {
    const client = new ClientModel();

    const aboutPageContent = await getAboutPageContent();
    const props = { client, aboutPageContent };

    return AboutPage(props);
  }

  static async getLoginPage() {
    const client = new ClientModel();
    const props = { client };

    return LoginPage(props);
  }

  static async getSignupPage() {
    const client = new ClientModel();
    const props = { client };

    return SignupPage(props);
  }

  static async getNodePage(nodeId: string) {
    const isDevelopement = process.env.NODE_ENV === "developement";

    const client = new ClientModel({
      isEditor: isDevelopement ? true : false,
    });

    const node = new NodeTestModel(nodeId);
    const nodeData = await node.getData();

    //   // client.type = 'creator'
    //   // client.type = 'author'
    //   // client.type = 'pusher'
    //   // client.type = 'viewer'

    const props = { client, nodeData };

    if (!nodeData?.meta.childs?.length) {
      return NodeExtendedPage(props);
    }

    return NodePage(props);
  }

  static async getErrorPage(errorProps: GetErrorPageProps) {
    const client = new ClientModel();
    const props = { client, ...errorProps };

    return ErrorPage(props);
  }
}

export { ViewController };
