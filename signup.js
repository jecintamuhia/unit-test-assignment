const validateEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const submitForm = async(email,passwrd)=>{
    if(validateEmail(email)){
        throw new error("inavalid email format");
    }
    const response = await fetch("/api/signup",{
        method:"POST",
        body:JSON.stringify({email,passwrd}),
    });
    if(!response.ok){
        throw new Error("signup Failed")
        
    }
    return response.json();
};


module.exports ={validateEmail,submitForm};
