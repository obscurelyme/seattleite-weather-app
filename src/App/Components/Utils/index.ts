export async function asyncFn(promise: Promise<any>): Promise<any> {
  try {
    return await promise;
  } catch (e) {
    return [undefined, e];
  }
}

export async function httpFetchJson(url: string): Promise<any> {
  const [rData, rError] = await asyncFn(fetch(url));
  if (!rError) {
    const [jData, jError] = await asyncFn(rData.json());
    return [jData, jError];
  }
  return [rData, rError];
}

export async function httpFetchJson2(url: string): Promise<any> {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return [json, undefined];
  } catch (e) {
    console.log(e);
  }
}

function _getFromLocalStorage(key: string) {
  return new Promise((resolve) => {
    chrome.storage.local.get(key, (data) => {
      return resolve(data[key]);
    });
  });
}

export async function getFromLocalStorage(key: string): Promise<any> {
  const [data, error] = await asyncFn(_getFromLocalStorage(key));
  return [data, error];
}

export function setToLocalStorage(key: string, data: Record<string, unknown>): void {
  chrome.storage.local.set({ [key]: data });
}

export async function getGeolocation(): Promise<number[]> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return resolve([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        return resolve([-1, -1]);
      }
    );
  });
}
