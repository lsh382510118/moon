import qs from "qs";

const getQueryFromSearch = (search: string) => {
  const str = search?.replace(/^\?/, '')
  if (str) {
    return qs.parse(str)
  }
  return {}
}

export default getQueryFromSearch
