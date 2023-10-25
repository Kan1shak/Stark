import jwt from "jsonwebtoken";
import { services } from "../models/services.js";
import { users } from "../models/users.js";

const getUsername = async (id)=>{
    let a = await users.findById(id);
    return a.username;
}

const getServicetype = async(id)=>{

    let a=await services.findById(id);
}

export const renderService = (req,res)=>{

    res.render("services");
}

// apis to get services with respect to cards-------------------------------------------------------------------------------------------------------------------------------------

export const services_get_ai = async (req,res)=>{
    let {token} = req.cookies
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    const servicetype = getServicetype(decoded._id);
    let servicesList;
    let usersList;
    await services.find().populate("user").then((a)=>{
        servicesList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['ai']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:servicesList,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}
export const services_get_logo = async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    const servicetype = getServicetype(decoded._id);
    let servicesList;
    let usersList;
    await services.find().populate("user").then((a)=>{
        servicesList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['logo']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:servicesList,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}

export const services_get_wp= async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    const servicetype = getServicetype(decoded._id);
    let servicesList;
    let usersList;
    await services.find().populate("user").then((a)=>{
        servicesList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['wordpress']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:servicesList,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}

export const services_get_vo = async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    const servicetype = getServicetype(decoded._id);
    let servicesList;
    let usersList;
    await services.find().populate("user").then((a)=>{
        servicesList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['voice over']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:servicesList,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}

export const services_get_ve = async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    const servicetype = getServicetype(decoded._id);
    let servicesList;
    let usersList;
    await services.find().populate("user").then((a)=>{
        servicesList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['video explainer']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:servicesList,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}

export const services_get_trans = async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    const servicetype = getServicetype(decoded._id);
    let servicesList;
    let usersList;
    await services.find().populate("user").then((a)=>{
        servicesList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['translator']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:servicesList,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}

export const services_get_DE = async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    const servicetype = getServicetype(decoded._id);
    let servicesList;
    let usersList;
    await services.find().populate("user").then((a)=>{
        servicesList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['data entry']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:servicesList,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}

export const services_get_sm = async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    const servicetype = getServicetype(decoded._id);
    let servicesList;
    let usersList;
    await services.find().populate("user").then((a)=>{
        servicesList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['social media']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:servicesList,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}

export const services_get = async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("services");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    let serviceslist;
    let usersList;
    await services.find().populate("user").then((a)=>{
        serviceslist = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    services.find({servicetype:['others']}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,servicesList:serviceslist,usersList:usersList,userName:userName});
    }).catch((err)=>{
        console.log(err);
    })
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const newService = async(req,res)=>{

    let {token}=req.cookies;
    if(!token)
    return res.render("index");
    let decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    res.render("newservice", {userName:userName});
}

export  const service_new_post = async (req,res)=>{
    let {token} = req.cookies;

    if(!token)
    return res.render("index");
    const decoded=jwt.verify(token,"arimeee");
    let a = {name:req.body.name,description:req.body.description,skills:req.body.skills,servicetype:req.body.ServiceType.split(","),user:decoded._id};
    services.create(a).then((response)=>{
        users.findById(decoded._id).then((b)=>{
            a.serviceId = response._id;
            b.services.push(a);
            b.save();
        }).catch((err)=>{
            console.log(err);
        });
        res.redirect("/afterhome/services");
    }).catch((err)=>{
        console.log(err);
    });
}

export const openform = (req,res)=>{
    {let {token} = req.cookies;
    if(!token)
    return res.render("login");

    res.render("form");
}
}
