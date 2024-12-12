import LightningModal from 'lightning/modal';

export default class ContactMeModal extends LightningModal {

    handleClose() {
        this.close('closed');
    }
}