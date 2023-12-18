const {default :axios}= require('axios');

const SendEmail = ()=>axios.post('/api/send');

export default{SendEmail};