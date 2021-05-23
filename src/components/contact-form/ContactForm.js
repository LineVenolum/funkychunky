import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./ContactForm.module.scss";
import { MainButton } from "../../components/buttons/MainButton";

let schema = yup.object().shape({
  name: yup
    .string()
    .required("Vennligst skriv navnet ditt")
    .min(2, "Navnet må være minst 2 bokstver langt"),
  phone: yup.number().positive().integer(),
  email: yup
    .string()
    .required("Vennligst skriv inn en epost")
    .email("Eposten er ikke gyldig"),
  message: yup
    .string()
    .required("Vennligst skriv en melding")
    .min(10, "Meldingen må minst være 10 tegn"),
});

export const ContactForm = ({ children, onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <div className={styles.contactForm} onClick={onClick}>
      {children}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>KONTAKT OSS</h2>
        {errors.name ? (
          <span className={styles.error}>{errors.name.message}</span>
        ) : errors.email ? (
          <span className={styles.error}>{errors.email.message}</span>
        ) : errors.message ? (
          <span className={styles.error}>{errors.message.message}</span>
        ) : (
          <span className={styles.noError} />
        )}
        <div className={styles.fields}>
          <section className={styles.field}>
            <label className={styles.label} htmlFor="Cardholder name">
              Navn*{" "}
            </label>
            <input
              className={styles.input}
              type="text"
              name="name"
              {...register("name")}
            />
          </section>

          <section className={styles.field}>
            <label className={styles.label} htmlFor="phone">
              Telefonnummer{" "}
            </label>
            <input
              className={styles.input}
              type="number"
              name="cardnumber"
              {...register("phone")}
            />
          </section>

          <section className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Epost*{" "}
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              {...register("email")}
            />
          </section>

          <section className={styles.field}>
            <label className={styles.label} htmlFor="message">
              Melding*{" "}
            </label>
            <input
              className={styles.message}
              type="text"
              name="message"
              {...register("message")}
            />
          </section>
          <div className={styles.buttondiv}>
            <MainButton
              className={styles.button}
              type="submit"
              children={<p className={styles.text}>SEND</p>}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
