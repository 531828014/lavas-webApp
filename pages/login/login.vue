<!--  -->
<template>
    <div>
        <van-nav-bar
            title="登录/注册"
            left-text="主页"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="login">
            <van-cell-group>
            <van-field
                v-model="form.number"
                required
                clearable
                label="账号"
                placeholder="请输入用户名"
            />
            <van-field
                v-model="form.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
            </van-cell-group>
            <div class="btn">
                <van-button type="primary" size="small" @click="login">登录</van-button>
                <van-button type="info" size="small" @click="addUser">注册</van-button>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import LoginApi from '../../api/main/login/index'
import {initUser} from '../../api/model/user'
export default {
    data() {
        return {
            form: initUser(),
        };
    },
    methods: {
        login() {
            LoginApi.Login(this.form).then(data => {
                this.$store.state.userInfo = data.list[0]
                this.$router.push({
                    path: '/home',
                })
            })
        },
        addUser() {
            LoginApi.AddUser(this.form).then(data => {
                this.$store.state.userInfo = data
                this.$notify({
                    message: data.Msg,
                    duration: 1000,
                    background: '#72ed18'
                });
                this.$router.push({
                    path: '/home',
                })
            })
        },
        onClickLeft() {
            this.$router.push({
                path: '/home',
            })
        },
    }
}

</script>
<style lang='scss' scoped>
.login{
    padding: 50px 10px;
    .btn{
        padding: 20px 0px;
    }
}
</style>