export interface CustomField {
    customfieldId: string; // Alterado para string
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
        const stageId = parseInt(process.env.NEXT_PUBLIC_STAGE_ID as string, 10);
        const pipeId = parseInt(process.env.NEXT_PUBLIC_PIPE_ID as string, 10);
        const organizationName = dealData.organization;

        // Logs para verificar as variáveis de ambiente
        console.log('Environment Variables:');
        console.log('NEXT_PUBLIC_STAGE_ID:', process.env.NEXT_PUBLIC_STAGE_ID);
        console.log('NEXT_PUBLIC_PIPE_ID:', process.env.NEXT_PUBLIC_PIPE_ID);
        console.log('NEXT_PUBLIC_CRM_FIELD_EMAIL:', process.env.NEXT_PUBLIC_CRM_FIELD_EMAIL);
        console.log('NEXT_PUBLIC_CRM_FIELD_CONTACT_PREF:', process.env.NEXT_PUBLIC_CRM_FIELD_CONTACT_PREF);
        console.log('NEXT_PUBLIC_CRM_FIELD_DETAILS:', process.env.NEXT_PUBLIC_CRM_FIELD_DETAILS);

        const customfields: CustomField[] = [
            {
                customfieldId: process.env.NEXT_PUBLIC_CRM_FIELD_EMAIL as string,
                value: dealData.email,
            },
            {
                customfieldId: process.env.NEXT_PUBLIC_CRM_FIELD_CONTACT_PREF as string,
                value: dealData.contactPreference,
            },
            {
                customfieldId: process.env.NEXT_PUBLIC_CRM_FIELD_DETAILS as string,
                value: dealData.details,
            },
        ];

        // Verificar se algum campo customfieldId é vazio ou undefined
        customfields.forEach((field, index) => {
            if (!field.customfieldId) {
                throw new Error(`Invalid customfieldId at index ${index}: ${field.customfieldId}`);
            }
        });

        console.log('Custom Fields:', customfields);

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
