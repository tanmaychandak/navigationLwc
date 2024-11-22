import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    closeModal(){
        this.dispatchEvent(new CustomEvent('close'))
    }
}