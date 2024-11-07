/*
 * @Author: QD
 * @Date: 2024-10-29 14:58:04
 * @Description:
 */

/**
 * @description: 将一个数组旋转K 步
 * @return {*}
 */
//
/* 
[1,2,3,4,5,6]

k=3 旋转3步

*/
const roateArray1 = (arr: number[], k: number): number[] => {
  const length = arr.length;
  console.log("init1", arr);
  if (!length || !k) {
    return arr;
  }

  const loop: number = Math.abs(k % length);

  for (let i = 0; i < loop; i++) {
    const popNumber = arr.pop();
    if (popNumber != null) {
      arr.unshift(popNumber);
    }
  }

  console.log("arr1--", arr);
  return arr;
};

const roateArray2 = (arr: number[], k: number): number[] => {
  const length = arr.length;
  console.log("init2", arr);
  if (!length || !k) {
    return arr;
  }

  const loop: number = Math.abs(k % length);

  const sliceArr = arr.slice(-loop);
  const restArr = arr.slice(0, length - loop);
  const arr2 = sliceArr.concat(restArr);
  console.log("arr2--", arr2);
  return arr2;
};

/*-------------*/

/**
 * @description:  判断字符串是否括号匹配;
 * @return {*}
 */

/* ------------------- */
/**
 * @description:  队列 栈实现队列
 * @return {*}
 */
class stackQueen {
  private stack1: number[] = [];
  private stack2: number[] = [];

  add(num: number) {
    this.stack1.push(num);
  }

  delete() {
    const stack1 = this.stack1;
    const stack2 = this.stack2;
    while (stack1.length) {
      const pop1 = stack1.pop();
      if (pop1 != null) {
        stack2.push(pop1);
      }
    }

    const deletePop = stack2.pop();
    while (stack2.length) {
      const pop2 = stack2.pop();
      if (pop2 != null) {
        stack1.push(pop2);
      }
    }
    console.log("stacl", this.stack1, stack2);
    return deletePop;
  }

  get length(): number {
    return this.stack1.length;
  }
}

/**
 * @description: 链表
 * 链表 查询慢，新增和删除快 o(1)
 * 数组 查询快，新增和删除慢 o(n)
 * @return {*}
 */

interface ILinkNode {
  value: number;
  next?: ILinkNode;
}

// 创建单向链表
const createLinkNode = (arr: number[]): ILinkNode => {
  const length = arr.length;
  if (!length) {
    throw new Error("");
  }
  let currentNode: ILinkNode = {
    value: arr[length - 1],
  };
  if (length === 1) {
    return currentNode;
  }
  for (let i = length - 2; i >= 0; i--) {
    currentNode = {
      value: arr[i],
      next: currentNode,
    };
  }
  return currentNode;
};
// 反转链表

const testFunc = () => {
  //   roateArray1([1, 3, 4, 5, 6, 7], 2);
  //   roateArray2([1, 3, 4, 5, 6, 7], 2);
  //   const queen = new stackQueen();
  //   queen.add(10);
  //   queen.add(11);
  //   queen.add(112);
  //   queen.add(13);
  //   queen.delete();
  //   console.log(createLinkNode([12, 3, 4, 52, 1]));
};

export default testFunc;
