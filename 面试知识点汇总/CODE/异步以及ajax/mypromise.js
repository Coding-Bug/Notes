class Promise {
  constructor(excutor) {
    this.promiseState = "pending";
    this.promiseResult = null;

    this.callback = [];
    const self = this;

    function resolve(data) {
      if (self.promiseState != "pending") {
        return;
      }
      self.promiseState = "fullfied";
      self.promiseResult = data;
      self.callback.forEach((item) => {
        setTimeout(() => {
          item.onResolved(data);
        });
      });
    }

    // 构造函数内部方法,用完就没了
    function reject(data) {
      if (self.promiseState != "pending") {
        return;
      }
      self.promiseState = "rejected";
      self.promiseResult = data;

      self.callback.forEach((item) => {
        setTimeout(() => {
          item.onRejected(data);
        });
      });
    }

    try {
      excutor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  // then方法
  then(onResolved, onRejected) {
    const self = this;
    if (typeof onRejected !== "function") {
      onRejected = (reason) => {
        throw reason;
      };
    }

    // 第一个函数也不传
    if (typeof onResolved !== "function") {
      onResolved = (value) => value;
    }

    // 返回一个promise
    return new Promise((resolve, reject) => {
      // 封装函数
      function callback(type) {
        try {
          let result = type(self.promiseResult);
          if (result instanceof Promise) {
            result.then(
              (v) => {
                resolve(v);
              },
              (r) => {
                reject(r);
              }
            );
          } else {
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      }

      if (self.promiseState === "fulfilled") {
        setTimeout(() => {
          callback(onResolved);
        });
      } else if (self.promiseState === "rejected") {
        setTimeout(() => {
          callback(onRejected);
        });
      } else {
        self.callback.push({
          onResolved: function () {
            setTimeout(()=>{
                callback(onResolved)
            })
          },
          onRejected:function(){
              setTimeout(()=>{
                  callback(onRejected)
              })
          }
        });
      }
    });
  }
}

let p = new Promise((resolve, reject) => {
  resolve(111);
});
console.log(p);
