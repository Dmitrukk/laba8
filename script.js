const arrayList = [];

function addNewItem(item) {
  let len=6;
  if (arrayList.length<=len){
  arrayList.push(item);
} else {
  arrayList.shift();
  console.log ("max lenght is 6 elements, we needed to delete the first")
  arrayList.push(item);
}
}

function removeLast() {
  arrayList.pop();
}

function removeFirst() {
  arrayList.shift();
}

function findSimilar() {
  let result = {};
  for (let i = 0; i < arrayList.length; ++i) {
    let a = arrayList[i];
    if (result[a] != undefined)
      ++result[a];
    else
      result[a] = 1;
  }
  for (let key in result)
    console.log('число ' + key + ' == ' + result[key] + ' раз(а)');
}

function reverseCollection() {
  let rev = arrayList.reverse();
}

function FindPodString() {
  let str = 'dg';
  let indexList = [];
  for (let i = 0; i < arrayList.length; i++) {
    if (match(arrayList[i], str)) {
      indexList[indexList.length] = i;
    }
  }
  console.log(indexList);
}
function match(str, sub) {
  str = "" + str;
  sub = "" + sub;
  if (sub.length > str.length) {
    return false;
  }

  let interval = str.length - sub.length + 1;
  for (let i = 0; i < interval; i++) {
    let match = 0;
    for (let u = 0; u < sub.length; u++) {
      if (str[i + u] !== sub[u]) {
        break;
      } else {
        match++;
      }
    }
    if (match === sub.length) {
      return true;
    }
  }
  return false;
}

function countLength() {
  let result = arrayList.map(item => item.length);
  console.log (result);
}

function main() {
  addNewItem("str");
  addNewItem("dgs");
  addNewItem("spardg");
  addNewItem("spa");
  addNewItem("spardg");
  addNewItem("adg");
  addNewItem("str");
  removeLast();
  removeFirst();
  console.log(arrayList);
  findSimilar();
  addNewItem("ghjdbkjsa");
  addNewItem("bfhs");
  addNewItem("bfhsj");
  reverseCollection();
  console.log(arrayList);
  FindPodString();
  countLength ();
}

main();
