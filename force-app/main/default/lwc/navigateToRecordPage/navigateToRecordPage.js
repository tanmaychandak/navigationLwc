import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'003HE000009WMRpYAO',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }

    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'003HE000009WMRpYAO',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}