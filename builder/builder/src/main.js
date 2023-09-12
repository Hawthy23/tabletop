

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import shipData from './script/shipData.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faA, faD } from '@fortawesome/free-solid-svg-icons' //adv/disadvantage

//firing arcs
import { faCircleChevronRight,faCircleChevronLeft,faCircleChevronUp,faCircleChevronDown, faCircleDot, faCircle} from '@fortawesome/free-solid-svg-icons' //forward, aft, port, starboard 
//damage types
import {faVial,faIcicles,faPowerOff,faFire,faJedi,faSun,faDumbbell,faBolt,faRadiation,faSkullCrossbones,faSkull,faEarListen,faStar } from '@fortawesome/free-solid-svg-icons'
//sheet type selects
import { faDiceD20, faRocket, faHammer, faCartFlatbedSuitcase, faUsers, faNoteSticky, faFistRaised, faShieldHeart} from '@fortawesome/free-solid-svg-icons'



library.add(faA,faD)
library.add(faVial,faIcicles,faPowerOff,faFire,faJedi,faSun,faDumbbell,faBolt,faRadiation,faSkullCrossbones,faSkull,faEarListen,faStar)
library.add(faCircleChevronRight,faCircleChevronLeft,faCircleChevronUp,faCircleChevronDown,faCircleDot, faCircle)
library.add(faDiceD20, faRocket, faHammer, faCartFlatbedSuitcase, faUsers, faNoteSticky, faFistRaised, faShieldHeart)



const app = createApp(App)


app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
