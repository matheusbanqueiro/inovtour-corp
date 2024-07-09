export interface CustomField {
    customfieldId: number;
    value: string;
}

export class Deal {
    constructor(
        public title: string,
        public price: number,
        public peopleName: string,
        public peoplePhone: string,
        public stageId: number,
        public pipeId: number,
        public customfields: CustomField[],
        public organizationName: string = ""
    ) { }

    static build(dealData: DealPayload) {
        const title = dealData.subject;
        const price = 0;
        const peopleName = dealData.peopleName;
        const peoplePhone = dealData.peoplePhone;
        const stageId = 305223;
        const pipeId = 301283;
        const organizationName = dealData.organization;
        const customfields: CustomField[] = [
            {
                customfieldId: 306055,
                value: dealData.email,
            },
            {
                customfieldId: 307788,
                value: dealData.contactPreference,
            },
            {
                customfieldId: 307789,
                value: dealData.details,
            },
        ];

        return new Deal(
            title,
            price,
            peopleName,
            peoplePhone,
            stageId,
            pipeId,
            customfields,
            organizationName
        );
    }
}

export enum ContactPreference {
    EMAIL = 'email',
    PHONE = 'phone',
    WHATSAPP = 'whatsapp'
}

export class DealPayload {
    constructor(
        public subject: string = "",
        public peopleName: string = "",
        public peoplePhone: string = "",
        public email: string = "",
        public contactPreference: ContactPreference = ContactPreference.EMAIL,
        public organization: string = "",
        public details: string = ""
    ) { }

}