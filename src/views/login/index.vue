<template>
  <body>
    <div class="container">
      <div class="login-wrapper">
        <div class="header">登录</div>
        <div class="form-wrapper">
          <input
            type="text"
            name="username"
            placeholder="用户名"
            class="input-item"
          />
          <input
            type="password"
            name="password"
            placeholder="密码"
            class="input-item"
          />
          <div class="btn">登录</div>
        </div>
        <div class="msg">
          Don't have account?
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #2c2f55, #a5abf8);
}
.login-wrapper {
  position: relative;
  top: 50%;
  left: 50%;
  width: 358px;
  height: 588px;
  padding: 0 50px;
  background-color: #fff;
  border-radius: 15px;
  transform: translate(-50%, -50%);
}
.header {
  font-weight: bold;
  font-size: 38px;
  line-height: 200px;
  text-align: center;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 15px;
  border: 0;
  border-bottom: 1px solid rgb(128, 125, 125);
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  width: 100%;
  margin-top: 40px;
  padding: 10px;
  color: #fff;
  text-align: center;
  background-image: linear-gradient(to right, #a5abf8, #2c2f55);
}
.msg {
  line-height: 88px;
  text-align: center;
}
a {
  color: #abc1ee;
  text-decoration-line: none;
}
</style>
