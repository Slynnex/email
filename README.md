Ejecute el comando npm install para intalar todas las depedencias
NOTA: Es importante tener habilitado seguridad en dos pasos para obtener poder utilizar el servicio de contraseña de aplicaciones (solo funcion en gmail)



Agregue un archivo .env en la raiz e ingrese sus crendeciales de la siguiente manera:
    USER = ejemplo.@gmail.com
    PASSWORD = 123456789

Para inicializar el servicio con el comando npm run dev

Mande las solicitudes a la url
    http://localhost:4000/api/v1/sendEmail


con los siguiente parametros en formato JSON
{
    "from": "gaitan138@gmail.com", //Nombre del correo que aparece como remitente
    "to": "kevin.paes1010@gmail.com", //Correo del destinatario
    "subject": "Hello ✔", //El asunto del correo
    "html": "<b>Prueba</b>" //Cuerpo del correo, debe estar en formato html
}