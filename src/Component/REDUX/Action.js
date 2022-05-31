

export const Myactions=(mail)=>{
    return(
        {
            type:'userEmail',
            payload:mail
        }
    )
}
export const Myamt=(amount)=>{
    return(
        {
            type:'amt',
            payload:amount
        }
    )
}

export const MyIds=(id)=>{
    return(
        {
            type:'ids',
            payload:id
        }
    )
}