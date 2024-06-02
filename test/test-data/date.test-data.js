const testLastDate = new Date(Date.now());
const testCreationDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);

export const DATE_TEST_DATA = {
  creation: testCreationDate,
  last: testLastDate,
};
