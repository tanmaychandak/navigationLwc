import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigateToLwc extends NavigationMixin(LightningElement) {

    navigateToLwc(){
        var defination={
            componentDef:'c:navigationLwcTarget',
            attributes:{
                recordId:'789797989465'
            }
        }

        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }
}