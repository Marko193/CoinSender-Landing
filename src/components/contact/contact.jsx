import { Checkbox } from "@mui/material";
import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CloseIcon from "../../assets/images/contact/close.svg";
import Image from "next/image";
import UseEmail from "@/helpers/emailSMTPHelper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1C1F32",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  border: "1px solid #36394C",
  borderRadius: "13px",
  boxShadow: 24,
  p: 9,
};

export const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const { sendEmail } = UseEmail(
    "https://public.herotofu.com/v1/bccd0f80-c667-11ed-b4ac-77574673b9e5"
  );

  const sendData = () => {
    sendEmail({
      From: userEmail,
      User_name: userName,
      Message: userMessage,
      Date: new Date().toISOString(),
    });
  };

  return (
    <section>
      <div className="container">
        <div className={styles.title}>Contact us</div>
        <div className={styles.form_container}>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="Jean Masad"
              onChange={() => setUserName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={() => setUserEmail(event.target.value)}
            />
            <textarea
              name=""
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
              onChange={() => setUserMessage(event.target.value)}
            ></textarea>
            <div className={styles.block_checkbox}>
              <Checkbox
                sx={{
                  width: "19px",
                  height: "19px",
                  background: "#252536",
                  borderRadius: "6px",
                  color: "#36394b",
                  //   "&.Mui-checked": {
                  //     color: "#36394b",
                  //   },
                }}
              />
              <div>
                By clicking the "Send Message" button, you confirm that you have
                read the
              </div>
            </div>
          </div>
          <button
            className={styles.fixed + " button"}
            onClick={() => {
              handleOpen();
              sendData();
            }}
          >
            Send
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={handleClose}
            src={CloseIcon}
          />
          <Typography
            className={styles.modal_title}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Thank you
          </Typography>
          <Typography
            className={styles.modal_text}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            We will contact you very soon!
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};
