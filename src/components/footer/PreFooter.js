import axios from "axios";
import React, { useEffect, useState } from "react";

const PreFooter = () => {

    const [nameMessage, setNameMessage] = useState(null)
    const [emailMessage, setEmailMessage] = useState(null)
    const [dataForm, setDataForm] = useState({
        name: '',
        email: ''
    })

    let validateName = false
    let validateEmail = false

    const validationName = () => {
        if (dataForm.name === "") {
            setNameMessage("Nombre no valido")
            validateName = false

        } else {
            setNameMessage("")
            validateName = true
        }

    }

    const validationEmail = () => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if (dataForm.email.match(pattern)) {
            setEmailMessage("")
            validateEmail = true
        } else {
            setEmailMessage("Email no valido")
            validateEmail = false
        }
    }

    const handleName = (e) => {
        setDataForm(prevState => ({
            ...prevState, name: e.target.value
        })

        )
    }

    const handleEmail = (e) => {
        setDataForm(prevState => ({
            ...prevState, email: e.target.value
        })

        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validationName()
        validationEmail()
        if (validateName && validateEmail) {
            axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', dataForm)
                .then((data) => {
                    console.log(data)
                }).catch((err) => {
                    console.log(err)
                })
        } else {
        }
    }

    return (
        <div className="pre-footer">
            <div className="container newsletter-container">
                <div className="col">
                    <div className="row label-newsletter">
                        <h1 className="label-newsletter-h1">¡Únete a nuestras novedades y promociones!</h1>
                    </div>
                    <form className="row form-newsletter" onSubmit={handleSubmit}>
                        <input placeholder="Ingresa tu nombre" className="input-pre-footer" onChange={handleName} />
                        <input placeholder="Ingresa tu mail" className="input-pre-footer" onChange={handleEmail} />
                        <input type='submit' className="submit-pre-footer" value="Suscribirme" />
                        <div className="error-div">{nameMessage} {emailMessage}</div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default PreFooter;