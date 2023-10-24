import express from "express";

export const renderService = (req,res)=>{

    res.render("services");
}

export const services_get = (req,res)=>{

    res.render("servicedetail");
}