import Vue from 'vue';
// import './theme/index.scss';
import ElButton from '@/MyUi/components/button';
import ElButtonGroup from '@/MyUi/components/button/ButtonGroup';
import ElRow from '@/MyUi/components/row';
import ElCol from '@/MyUi/components/col';
import ElLink from '@/MyUi/components/link';
import ElUpload from '@/MyUi/components/upload';

// form
import ElRadio from '@/MyUi/components/radio';

Vue.component(ElButton.name, ElButton);
Vue.component(ElButtonGroup.name, ElButtonGroup);
Vue.component(ElRow.name, ElRow);
Vue.component(ElCol.name, ElCol);
Vue.component(ElLink.name, ElLink);
Vue.component(ElUpload.name, ElUpload);

// form 
Vue.component(ElRadio.name, ElRadio);

