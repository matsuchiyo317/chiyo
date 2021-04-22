console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));

let say = "Hello";
console.log(say);
say = "Good bye";
console.log(say);

const add = 6 + 2;
const sub = 6 - 2;
const mul = 6 * 2;
const div = 6 / 2;

const per = 5 % 2;
console.log(per);

let inc = 2;
inc++;
console.log(inc);
let dic = 2;
dic--;
console.log(dic);

const price = 1800;

if (price < 1000) {
  console.log("安い");
} else if (price > 2000) {
  console.log("高い");
} else {
  console.log("丁度いい");
}

const person = 3;

switch (person) {
  case 1:
    console.log("太郎さん");
    break;
  case 2:
    console.log("次郎さん");
    break;
  case 3:
    console.log("三郎さん");
    break;
  case 4:
    console.log("四郎さん");
    break;
  case 5:
    console.log("五郎さん");
    break;
}

const price1 = 1000;
const tax = 0.1;
console.log(price1 * tax);

const a = (80 + 90 + 60 + 85 + 100);
const b = (40 + 30 + 50 + 25 + 60);

console.log(a);
console.log(b);

if (a >= 300 && b >= 300) {
  console.log("素晴らしい")
} else if (a >= 300 || b >= 300) {
  console.log("普通");
} else if (300 > a && 300 > b) {
  console.log("頑張ろう");
}

const message = "大吉"

switch (message) {
  case "大吉":
    console.log("大吉です！");
    break;
  case "中吉":
    console.log("中吉です！");
    break;
  case "小吉":
    console.log("小吉です！");
    break;
  case "吉":
    console.log("吉です！");
    break;
  case "末吉":
    console.log("末吉です！");
    break;
  case "凶":
    console.log("凶です！");
    break;
  case "大凶":
    console.log("大凶です！");
    break;
}

const array = ["太郎", "次郎", "三郎", "四郎", "五郎"];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

array[1] = "二郎";

console.log(array[1]);

console.log(array.length);

array.push("六郎");
array.unshift("一郎");
console.log(array);

array.pop();
array.shift();
console.log(array);

array.splice(1, 3);
console.log(array);

const lists = ["太郎", "次郎", "三郎", "四郎", "五郎"];

for (let i = 0; i < lists.length; i++) {
  console.log(lists[i]);
}

let c = 0;

while (c < 10) {
  c = c + 1;
  console.log(c);
}

const test = ["国語", "数学", "英語"];

console.log(test);

test.push("理科", "社会");
console.log(test);
console.log(test.length);

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let water = 1000;
const drink = 180;

while (water > 0) {
  console.log(water);
  water = water - drink;
}
console.log("水を飲み干した");

let items = [
  { name: 'じゃがいも', price: 50, count: 3 },
  { name: 'にんじん', price: 60, count: 1 },
  { name: '豚肉', price: 200, count: 1 },
  { name: '玉ねぎ', price: 50, count: 2 }
];

// targetPriceより小計の高額な商品を出力
function higherPrice (targetPrice) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].price * items[i].count > targetPrice) {
      console.log(items[i].name);
    }
  }
}

higherPrice(120);


function man(names,point) {
  if (point >= 70 && 100 >= point) {
    return `${names}君良くできました`;
  } else if (point < 30 && point >=0) {
    return `${names}君もう少し頑張りましょう`;
  } else if (point >= 30 && point < 70) {
    return `${names}君普通です`;
  } else {
    return `正しい数字を入力してください`;
  }
}

console.log(man("A", 80));
console.log(man("B", 15));
console.log(man("C", 55));

const mans = {
  namae: ["AA", "BB", "CC"],
  points: [80, 65, 25],
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num = numbers.map((ii) => {
  if (ii % 2 == 0) {
    return ii * 2;
  } else {
    return ii;
  }
});
console.log(num);

const school = {
  name: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
  createSentense() {
    let data;
    school.skills.forEach(function (skill, index) {
      if (index == 0) {
        data = skill;
      } else {
        data = `${data}と${skill}`;
      }
    });
    return `${school.name}は${school.month}ヶ月で${data}を学ぶことができます`;
  },
};

console.log(school.createSentense());