import React, { useState } from "react";
import axios from "axios";

const Post = () => {
    //Function to handle answer submission
    const handleAnswer = async() => {
        if (post?._id && answer !== "") {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const body = {
            answer: answer,
            questionId: post?._id,
            user: user,
          };
          await axios
            .post("/api/answers", body, config)
            .then((res) => {
              console.log(res.data);
              alert.success("Answer added successfully.");
              setIsModalOpen(false);
              window.location.href = "/";
            })
            .catch((e) => {
              alert.error("Error submitting answer. Please try again.");
            });
        }
      }
}