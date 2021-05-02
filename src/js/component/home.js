import React, { useState } from "react";

export function Home() {
	const [datos, setDatos] = useState({
		nombre: "",
		apellido: ""
	});
	const handleInputChange = event => {
		console.log(event.target.value);

		/* Sabe en que lugar del objet posicionarla entre nombre o apellido por el name */
		setDatos({
			/* agregamos ...datos, para no sobre escribir, y que guarde lo que va tenienedo al momento. */
			...datos,
			/*Nombre_O_Apellido  : Martin_O_coimbra */
			[event.target.name]: event.target.value
		});
	};

	const enviarDatos = event => {
		event.preventDefault();
		console.log(
			datos.nombre + "-" + datos.apellido + "-" + datos.tercerName
		);
	};
	return (
		<form onSubmit={enviarDatos} className="text-center mt-5">
			<h1>Formulario</h1>
			<div className="row justify-content-center">
				<div className="col-3 text-right">
					<input
						type="text"
						placeholder="Nombre:"
						name="nombre"
						onChange={handleInputChange}
					/>
				</div>
				<div className="col-3">
					<input
						type="text"
						placeholder="Apellido:"
						name="apellido"
						onChange={handleInputChange}
					/>
				</div>
				<div className="col-3">
					<input
						type="text"
						placeholder="tercerName:"
						name="tercerName"
						onChange={handleInputChange}
					/>
				</div>
				<div className="col-3 text-left">
					<button className="btn btn-primary" type="submit">
						Enviar
					</button>
				</div>
			</div>
			{/* Imprimimos lo que va escribiendo al momento */}
			<h1>
				{datos.nombre}-{datos.apellido}-{datos.tercerName}
			</h1>
		</form>
	);
}
