import axios from "axios";

const BASE_URL =
  "https://react-native-course-5e3fc-default-rtdb.firebaseio.com";

export async function fetchApplications() {
  let userApplications = [];
  const response = await axios.get(BASE_URL + `/users.json`);

  for (const key in response.data) {
    if (response.data[key].applied) {
      userApplications.push(response.data[key]);
    }
  }

  return userApplications;
}

export function setTrack(uid, schemeName, track) {
  axios.patch(BASE_URL + `/users/${uid}/applied/${schemeName}.json`, track);
}
