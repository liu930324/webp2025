export const fetchEventData = async () => {
  const response = await fetch(
    "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"
  );
  const data = await response.json();
  return data;
};