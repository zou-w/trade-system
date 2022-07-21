//list 是已有的数据，search 是模糊搜索的关键字
export function fuzzySearch(list, search) {
  let data = [];
  if (list.length != 0 && search) {
    let str = `\S*${search}\S*`;
    let reg = new RegExp(str);
    list.map((item) => {
      if (reg.test(item.productName)) {
        data.push(item);
      }
    });
  }
  return data;
}
