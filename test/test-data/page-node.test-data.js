import { IMAGE_TEST_DATA_COVER } from "./image.test-data";

export const PAGE_NODE_TEST_DATA = {
  id: "test-page-id",
  title: "testPageTitle",
  descriptoin: "test description 240 symbols",
  // open closed invite archived trashCan
  pageType: "open",
  // TODO sort users by type on db query
  authors: [
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
  cover: IMAGE_TEST_DATA_COVER,
};
