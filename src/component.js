import {
    bBack,
    bBaseButton,
    bCancel,
    bCreate,
    bDelete,
    bEdit,
    bIconDelete,
    bIconEdit,
    bPrint,
    bReset,
    bSave,
    bIconView
} from './components/base/button/index'
import bCard from './components/base/card/card'
import Icon from './components/base/icon/icon'

const buttons = [
    { name: 'b-save', component: bSave },
    { name: 'b-cancel', component: bCancel },
    { name: 'b-back', component: bBack },
    { name: 'b-print', component: bPrint },
    { name: 'b-delete', component: bDelete },
    { name: 'b-reset', component: bReset },
    { name: 'b-create', component: bCreate },
    { name: 'b-edit', component: bEdit },
    { name: 'b-btn', component: bBaseButton },
    { name: 'b-icon-delete', component: bIconDelete },
    { name: 'b-icon-edit', component: bIconEdit },
    { name: 'b-icon-view', component: bIconView },
]

const card = {
    name: 'b-card', component: bCard
}
const icon = {
    name: 'icon', component: Icon
}

export default {
    buttons,
    card,
    icon
}