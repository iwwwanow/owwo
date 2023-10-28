export default function Body(formdata) {
  const formDataObj = {};
  formdata.forEach((value, key) => {
    if (typeof value === "string") value = value.replace("'", "`");
    formDataObj[key] = value;
  });
  return formDataObj;
}
