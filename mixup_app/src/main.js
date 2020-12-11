import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
registerMicroApps(
    [
        {
            name: "sub-app-1",
            entry: "//localhost:8091",
            render,
            activeRule: genActiveRule("/app1"),
            props: msg
        },
        {
            name: "sub-app-2",
            entry: "//localhost:8092",
            render,
            activeRule: genActiveRule("/app2"),
        }
    ],
    {
        beforeLoad: [
            app => {
                console.log("before load", app);
            }
        ], // 挂载前回调
        beforeMount: [
            app => {
                console.log("before mount", app);
            }
        ], // 挂载后回调
        afterUnmount: [
            app => {
                console.log("after unload", app);
            }
        ] // 卸载后回调
    }
);