import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./lock.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface IForm {
  txt: string;
}

const Lock = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmitHandler: SubmitHandler<IForm> = () => {
    const value = getValues("txt");
    value === "DeepDive"
      ? navigate("/home")
      : setError("txt", {
          type: "custom",
          message: "Please Enter 'DeepDive' Correctly",
        });
  };

  return (
    <motion.section
      initial={{ x: 1920, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1920, opacity: 0 }}
    >
      <div className={styles.lockScreen}>
        <div className={styles.lock}>
          <img src="" alt="img" />
          <span className={styles.name}>Banjae's portfolio</span>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <input
              type="text"
              {...register("txt", {
                required: true,
              })}
              placeholder="Please Enter 'DeepDive'"
            />
          </form>
          {errors.txt && (
            <span className={styles.error}>{errors.txt.message}</span>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Lock;
