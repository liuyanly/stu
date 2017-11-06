<style scoped>
    .layout{
        height: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 210px;
        background: #464c5b;
    }
    .layout-header{
        padding-left: 210px;
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
        text-align: center;
        line-height: 30px;
        color: #fff;
    }
    .layout-content-right{
        padding-left: 210px;
    }
</style>
<template>
    <div class="layout">
            <div class="layout-menu-left">
                <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left">Reboot自动化运维平台</div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="android-people"></Icon>
                            用户管理
                        </template>
                        <MenuItem name="1-1">
                            <router-link to="/userInfo">个人用户信息</router-link>
                        </MenuItem>
                        <MenuItem name="1-2">
                            <router-link to="/allUserInfo">所有用户信息</router-link>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            资产管理
                        </template>
                        <MenuItem name="2-1">服务器管理</MenuItem>
                        <MenuItem name="2-2">机柜管理</MenuItem>
                        <MenuItem name="2-2">机房管理</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-bell"></Icon>
                            值班系统
                        </template>
                        <MenuItem name="3-1">当前值班人</MenuItem>
                        <MenuItem name="3-2">值班列表</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="compose"></Icon>
                            工单管理
                        </template>
                        <MenuItem name="4-1">工单申请</MenuItem>
                        <MenuItem name="4-2">工单申请列表</MenuItem>
                        <MenuItem name="4-2">工单历史列表</MenuItem>
                    </Submenu>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="archive"></Icon>
                            代码更新
                        </template>
                        <MenuItem name="5-1">更新信息</MenuItem>
                        <MenuItem name="5-2">更新历史</MenuItem>
                    </Submenu>
                    <MenuItem name="6">
                        <Icon type="gear-a"></Icon>
                        设置
                    </MenuItem>
                </Menu>
            </div>
            <div class="layout-header"></div>
            <div class="layout-content-right">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">Home</BreadcrumbItem>
                        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
                        <BreadcrumbItem>iView</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </div>
    </div>
</template>
<script>
    export default {
    }
</script>