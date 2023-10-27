import jwt from "jsonwebtoken";
import { services } from "../models/services.js";
import { users } from "../models/users.js";
import { responses } from "../models/services.js";

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
    services.find({}).then((docs)=>{
    res.render("servicedetail",{docsList:docs,usersList:usersList,userName:userName});
    console.log(docs)
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
    let a ={};
    users.findById(decoded._id).then((b)=>{
    a = {name:req.body.name,username:b.username,description:req.body.description,skills:req.body.skills.split(","),servicetype:req.body.ServiceType,user:decoded._id};

    services.create(a).then((response)=>{
        users.findById(decoded._id).then((b)=>{
            response.username = b.username; 
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
    )}

    export  const services_user_one_get = async (req,res)=>{
        let {token} = req.cookies;
        const decoded=jwt.verify(token,"arimeee");
        const userName = await getUsername(decoded._id);
        users.findById(req.params.id).populate("projects").then((user)=>{
            if (user) {
        let name = user.name;
        let email = user.email;
        let phone = user.phone;
        let username = user.username;
        let job = user.job;
        let description = user.description;
        let sd = user.sd;
        let ad2= user.ad2;
        let ad1=user.ad1;
        let state = user.state;
        let country = user.country;
        let pc=user.pc;
        let area= user.area;
        let edu = user.edu;
        let skills = user.skills;
        let git = user.git;
        let link = user.link;
        let gender = user.gender;
        let dob = user.dob;
            res.render("profileotherservices",{name,email,username,job,sd,description,phone,git,link,skills,gender,dob,ad1,ad2,country,state});
            } else {
                res.redirect("/services");
            }
        }).catch((err)=>{
            console.log(err);
            res.redirect("/services");
        });
    }

export const openform = (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("login");
    res.locals.id = req.params.id;
    res.render("form");
}
export const openformpost = async (req, res) => {
    let { token } = req.cookies;
    if (!token) return res.render("login");
  
    const newResponse = {
      name: req.body.name,
      description: req.body.description,
      yourskills: req.body.yourskill,
      emailId: req.body.email,
      phone: req.body.phone,
      links: req.body.link,
      projectId:req.params.id,
    };
  
    try {
      const response = await responses.create(newResponse);
  
      const service = await services.findById(req.params.id);
  
      if (!service) {
        return res.status(404).send("Service not found");
      }
       // Initialize responses array if it is undefined
    if (!service.responses) {
        service.responses = [];
      }

      service.responses.push(newResponse);
  
      await service.save();
  
      res.redirect("/services");
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    }
  };
    
