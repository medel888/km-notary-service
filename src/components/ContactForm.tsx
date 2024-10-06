import { type FormEvent } from "react";

export default function ContactForm() {
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const name = data.get("name");
    const lastname = data.get("lastname");
    const email = data.get("email").toString();
    const phone = data.get("phone");
    const message = data.get("message").toString();

    const formdata = new FormData();
    formdata.append("nombre", name);
    formdata.append("apellido", lastname);
    formdata.append("telefono", phone);
    formdata.append("correo", email);
    formdata.append("mensaje", message);

    fetch("https://4legaltax.com/api/mail.php",
      {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Mensaje enviado correctamente");
          (e.target as HTMLFormElement).reset();
        } else {
          alert("Mensaje no enviado" + response.body);
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Error al enviar el mensaje')
      });


  }

  return (
    <form onSubmit={submit} className="p-3 p-md-4 border rounded-3 bg-light" >
      <div className="mb-3">
        <input type="text" placeholder="Nombre" id="name" name="name" autoComplete="name" className="form-control" required />
      </div>
      <div className="mb-3">
        <input type="text" placeholder="Apellido" id="lastname" name="lastname" autoComplete="lastname" className="form-control" required />
      </div>
      <div className="mb-3">
        <input type="email" placeholder="Correo electrónico" id="email" name="email" autoComplete="email" className="form-control" required />
      </div>
      <div className="mb-3">
        <input type="phone" placeholder="Teléfono" id="phone" name="phone" autoComplete="phone" className="form-control" required />
      </div>
      <div className="mb-3">
        <textarea id="message" placeholder="Introduzca aquí su mensaje para nosotros. Nos comunicaremos con usted dentro de 2 días hábiles." name="message" autoComplete="off" rows={4} className="form-control" required />
      </div>
      <button className="w-100 btn btn-lg btn-first">Enviar</button>
    </form>
  );
}
