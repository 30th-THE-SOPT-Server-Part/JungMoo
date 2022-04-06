// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기

const OB = "ob";
const YB = "yb";

interface Member {
  name: string;
  group: string;
}

interface Dinner {
  member: Array<Member>;
  shuffle: Function;
  organize: Function;
}

const dinner: Dinner = {
  member: [
    {
      name: "채정아",
      group: OB,
    },
    {
      name: "김동재",
      group: YB,
    },
    {
      name: "강민재",
      group: YB,
    },
    {
      name: "김루희",
      group: OB,
    },
    {
      name: "박진수",
      group: OB,
    },
  ],
  shuffle(array: Array<Member>) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array: Array<Member>) {
    console.log("organize");
    this.shuffle(array);

    let ob: Member;
    let yb: Member;

    for (let member of array) {
      if (member.group == OB) {
        ob = member;
        break;
      }
    }

    for (let member of array) {
      if (member.group == YB) {
        yb = member;
        break;
      }
    }

    console.log(`오늘의 저녁 식사 멤버는 ${ob.name}, ${yb.name}`);
  },
};

dinner.organize(dinner.member);
