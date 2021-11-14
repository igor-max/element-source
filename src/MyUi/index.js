import Vue from 'vue';
// import './theme/index.scss';
import ElButton from '@/MyUi/components/button';
import ElButtonGroup from '@/MyUi/components/button/ButtonGroup';
import ElRow from '@/MyUi/components/row';
import ElCol from '@/MyUi/components/col';
import ElLink from '@/MyUi/components/link';

// form
import ElRadio from '@/MyUi/components/radio';

Vue.component(ElButton.name, ElButton);
Vue.component(ElButtonGroup.name, ElButtonGroup);
Vue.component(ElRow.name, ElRow);
Vue.component(ElCol.name, ElCol);
Vue.component(ElLink.name, ElLink);

// form 
Vue.component(ElRadio.name, ElRadio);

