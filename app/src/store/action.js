import { login } from "@/utils/axios";
const actions = {
    getUser({commit},paload){
        login(paload.name, paload.psw).then(res => {
            if (res.code == 0) {
              localStorage.setItem('token',res.token)
              localStorage.setItem('name',paload.name)
              commit('getUser',paload.name)
              paload.router.push("/home");
            } else {
                paload.open();
            }
          });
      
    }
}

export default actions