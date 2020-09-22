export function login() {
  let pResult = new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: (res) => {
        console.log('login success:', res)
        // return res;
        setTimeout(function() {
          resolve(res)
        }, 3000)
      },
      fail: (err) => {
        console.log('login fail:', err)
        reject(err)
        }
      })
    }).catch(res => {
    console.log(666, res)
  })
  return pResult
}
