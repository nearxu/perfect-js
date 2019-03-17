// query {id:1,name:'tom'}
const getRouteQuery = () => {
  const query = this.router;
  return Object.keys(query).reduce(
    (pre, cur) => {
      const item = query[cur];
      if (/^\d+$/.test(item)) {
        pre[cur] = parseInt(item, 10);
      } else {
        pre[cur] = item;
      }
      return pre;
    }, {}
  )
}