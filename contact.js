class contact{
    constructor(form)
    {
        this.name=form.elements['name'].value;
        this.mail=form.elements['mail'].value;
        this.msg=form.elements['msg'].value;
    }
    fullName="";
    email="";
    msg="";
    
    
    display()
    {
        console.info(this.send());
        document.getElementById("details").innerHTML=("Not sending mails yet...")
    }

    send()
    {
        return
            `To:${this.name}
            Email:${this.mail}
            Message:${this.msg}`;
    }
};

const det=document.getElementById("details");
det.addEventListener("submit",function(event){
    event.preventDefault();
    const get=new contact(det);
    get.display()
})