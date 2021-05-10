export default function sortReposByLastUpdate(arr) {
  arr.sort((a, b) => {
    const date1 = new Date(a.pushed_at);
    const date2 = new Date(b.pushed_at);
    return date2.getTime() - date1.getTime();
  });

  return arr;
}
