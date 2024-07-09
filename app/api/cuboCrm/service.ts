import { Deal, DealPayload } from "./model";

const createDeal = async (dealData: DealPayload) => {

    const dealDataConverted = Deal.build(dealData);
    const json = JSON.stringify(dealDataConverted)
    const response = await fetch('https://api.cubosuite.com.br/deals/external', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${process.env.CUBOCRM_API_KEY}`,
      },
      body: json
    });
    
    console.log("Request body", json);
    console.log("Response", response);
  
    if (!response.ok) {
      throw new Error('Failed to create deal in CuboCRM');
    }

    console.log('New deal created', dealDataConverted);
  
    const data = await response.json();
    return data;
  };

  export default createDeal;