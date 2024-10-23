import "./Inicio.css"

export function Inicio (){
    return(
        <>

            <section className="container margin-custom-top">
                <div className="col-12 col-md-10 offset-md-3">
                    <div className="col-12 col-md-8">

                        <h3 className="title1 text-center">Registro de Usuarios</h3>

                        <form className=" form p-5 ">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-person-circle"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Nombre"/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-cake2-fill"></i>
                                </span>
                                <input type="number" className="form-control" placeholder="Edad" min={0}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-telephone-fill"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Telefono"/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-envelope-fill"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Correo"/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-key-fill"></i>
                                </span>
                                <input type="password" className="form-control" placeholder="Contraseña"/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-calendar"></i>
                                </span>
                                <input type="date" className="form-control" placeholder="Fecha de Registro"/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-building"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Ciudad"/>
                            </div>

                            <button className="btn btn-outline-light w-100">Registrar</button>

                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}