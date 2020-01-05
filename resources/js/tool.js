import {Tabs, Tab} from 'vue-tabs-component'

Nova.booting((Vue, router, store) => {
	Vue.component('tabs', Tabs);
    Vue.component('tab', Tab);
  router.addRoutes([
    {
      name: 'invoicer',
      path: '/invoicer',
      component: require('./components/Tool'),
    },
  ])
})
