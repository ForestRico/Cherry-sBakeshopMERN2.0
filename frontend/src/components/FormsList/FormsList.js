import React, { useEffect, useState } from "react";
import classes from "./formslist.module.css";
import { deleteOne, getAll } from "../../services/formsService";
import { useNavigate } from "react-router-dom";

const FormsList = () => {
  const [formsData, setFormsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const getformsData = async () => {
      const forms = await getAll();
      console.log(forms);
      setFormsData(forms);
    };
    getformsData();
  }, [loading]);

  const deleteForm = async (form) => {
    setLoading(true);
    const deletedForm = await deleteOne(form._id);
    navigate('/admin')
    setLoading(false)
  }
  

  return (
    <div className={classes.formslist}>
      {formsData.map((form) => (
        <div className={classes.formsListBox}>
            <div className={classes.formsListBoxSub}>
                <p><b>Email</b>: {form.email ? form.email : "empty"}</p>
                <p><b>address</b>: {form.address ? form.address : "empty"}</p>
                <p><b>occasion</b>: {form.occasion ? form.occasion : "empty"}</p>
                <p><b>first_name</b>: {form.first_name ? form.first_name : "empty"}</p>
                <p><b>last_name</b>: {form.last_name ? form.last_name : "empty"}</p>
                <p><b>message</b>: {form.message ? form.message : "empty"}</p>
                <p><b>pickup_date</b>: {form.pickup_date ? form.pickup_date : "empty"}</p>
                <p><b>pickup_time</b>: {form.pickup_time ? form.pickup_time : "empty"}</p>
                <p><b>phone_number</b>: {form.phone_number ? form.phone_number : "empty"}</p>
            </div>
            <div className={classes.formsListBoxButtons}>
                <button>Update</button>
                <button onClick={() => {deleteForm(form)}}>Delete</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default FormsList;
