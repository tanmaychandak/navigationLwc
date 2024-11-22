import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecordDemo extends LightningElement {
    recordId
    changeHandler(event){
        this.recordId = event.target.value
    }

    deleteHandler(){
        deleteRecord(this.recordId).then((result)=>{
            console.log("delete successfully");
            this.showToast('Success!!',"Deleted Successfully",'success')
        }).catch(error=>{
            console.error(error);
            this.showToast('Error!!', "Error Occured!!",'error')
        })
    }

    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant || 'success'
        }))
    }
}