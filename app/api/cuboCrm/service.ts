/*
{
  "title": "string",
  "price": 0,
  "peopleName": "sdvsdvsd111121211",
  "peoplePhone": "string",
  "stageId": 305223,
  "pipeId": 301283,
  "organizationName": "Abc"
  "customfields": [
    {
      "customfieldId": 306055, // email
      "value": "f@gmail.com"
    }
    {
      "customfieldId": 307788, // preferencia de contato
      "value": "email"
    }
    
  ]
}
*/

import { Deal, DealPayload } from "./model";

const createDeal = async (dealData: DealPayload) => {

    const dealDataConverted = Deal.build(dealData);

    const response = await fetch('https://api.cubosuite.com.br/deals/external', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CUBOCRM_API_KEY}`,
      },
      body: JSON.stringify(dealDataConverted),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create deal in CuboCRM');
    }

    console.log('New deal created', dealDataConverted);
  
    const data = await response.json();
    return data;
  };

  export default createDeal;