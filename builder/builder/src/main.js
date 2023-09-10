//import './assets/shipsheet.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import shipData from './script/shipData.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faA, faD } from '@fortawesome/free-solid-svg-icons'
import { faDiceD20, faRocket, faHammer, faCartFlatbedSuitcase, faUsers, faNoteSticky, faFistRaised, faShieldHeart} from '@fortawesome/free-solid-svg-icons'


library.add(faA,faD)
library.add(faDiceD20, faRocket, faHammer, faCartFlatbedSuitcase, faUsers, faNoteSticky, faFistRaised, faShieldHeart)



const app = createApp(App,{data: shipData})


app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
