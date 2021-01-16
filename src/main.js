import './css/pyrite.css'
import App from './App.vue'
import { createApp } from 'vue'
import FieldCheckbox from './components/ui/fields/FieldCheckbox.vue'
import FieldSelect from './components/ui/fields/FieldSelect.vue'
import FieldSlider from './components/ui/fields/FieldSlider.vue'
import FieldText from './components/ui/fields/FieldText.vue'
import Icon from './components/ui/icons/Icon.vue'
import Pyrite from './js/app.js'
import router from './js/router.js'

globalThis.app = new Pyrite(router)
globalThis.vm = createApp(App)

globalThis.vm.component('Icon', Icon)
globalThis.vm.component('FieldText', FieldText)
globalThis.vm.component('FieldSelect', FieldSelect)
globalThis.vm.component('FieldCheckbox', FieldCheckbox)
globalThis.vm.component('FieldSlider', FieldSlider)

globalThis.vm.directive('click-outside', {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function(event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el)
            }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
})


globalThis.vm
    .use(router)
    .mount('#app')

