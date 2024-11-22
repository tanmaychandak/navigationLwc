import { LightningElement,wire } from 'lwc';
import filterAccountType from '@salesforce/apex/AccountController.filterAccountType'

export default class WireApexWithParams extends LightningElement {
    selectedType=''
    
    @wire(filterAccountType,{type:'$selectedType'})
    accounts

    get typeOptions(){
        return [
            {label:"Customer - Direct",value:"Customer - Direct"},
            {label:"Customer - Channel",value:"Customer - Channel"}
        ]
    }

    typeHandle(event){
        this.selectedType = event.target.value
    }
}