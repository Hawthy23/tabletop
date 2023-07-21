import './assets/shipsheet.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faA, faD } from '@fortawesome/free-solid-svg-icons'
import { faDiceD20, faRocket, faHammer, faCartFlatbedSuitcase, faUsers, faNoteSticky, faFistRaised } from '@fortawesome/free-solid-svg-icons'


library.add(faA,faD)
library.add(faDiceD20, faRocket, faHammer, faCartFlatbedSuitcase, faUsers, faNoteSticky, faFistRaised)



const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
