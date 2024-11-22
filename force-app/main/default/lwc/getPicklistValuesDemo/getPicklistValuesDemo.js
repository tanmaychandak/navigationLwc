import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'

export default class GetPicklistValuesDemo extends LightningElement {
    selectedIndustry = '';
    industryOptions = []

    selectedType = ''
    typeOptions = []

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error}){
        if(data){
            console.log(data);
            this.industryOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error);
        }
    }

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:TYPE_FIELD})
    industryPicklist({data,error}){
        if(data){
            console.log(data);
            this.typeOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error);
        }
    }

    generatePicklist(data){
        return data.values.map(item=>({ label: item.label, value: item.value }))
    }

    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
    handleChangeType(event) {
        this.selectedType = event.detail.value;
    }


    

}