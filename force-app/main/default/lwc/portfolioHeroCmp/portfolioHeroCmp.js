import { LightningElement } from 'lwc';
import ContactMeModal from 'c/contactMeModal';
import HERO_IMG from '@salesforce/resourceUrl/PortfolioHero';

export default class PortfolioHeroCmp extends LightningElement {

    heroImg = HERO_IMG;

    async handleContactMe () {
        this.contactMe = true;
        console.log('::: handleContactMe Called')
            
        try {
            const result = await ContactMeModal.open({
                size: 'medium',
                description: 'Contact form modal'
            });
            console.log('::: contactMeModal result: ', result);
        } catch (error) {
            console.error('Error opening modal:', error);
        }
    }
}