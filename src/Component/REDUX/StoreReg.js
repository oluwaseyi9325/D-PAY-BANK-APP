
const mailUser={
  email:'...',
  amtTransfer:0,
  idsTransfer:0,
  
}

const Mystore=(state=mailUser,action)=>{
  if (action.type=='userEmail') {
    return {email:action.payload}  
}else if (action.type=='amt') {
  return {amtTransfer:action.payload}
}else if (action.type=='ids') {
  return {idsTransfer:action.payload}
}else{
return state;}
}

export default Mystore;