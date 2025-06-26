import ClientPincodes from '@/components/ClientPincodes';
import {fetchPageData} from '@/Api/wp-api';

const PincodeDetail = async()=> {
  const response = await fetchPageData("pages/35")
  return <ClientPincodes pageData={response} />

}

export default PincodeDetail