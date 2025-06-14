<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola desde JBoss</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #282A2C; /* Fondo oscuro, similar a tu propuesta Node.js */
            color: #F8F9FA; /* Texto claro */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #1B1C1D; /* Fondo más oscuro para el contenedor */
            padding: 50px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.4);
            text-align: center;
            border: 2px solid #00BCD4; /* Borde de color distintivo */
        }
        h1 {
            color: #00BCD4; /* Título que destaca, similar a tu color principal */
            font-size: 3em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            color: #E0E0E0; /* Gris claro para el texto */
            margin-bottom: 10px;
        }
        .date-time {
            font-size: 1em;
            color: #A9D5DD; /* Tono de azul claro para la fecha */
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hola desde JBoss</h1>
        <p>¡Mi primera aplicación web desplegada en WildFly (JBoss)!</p>
        <p>Esto demuestra mi habilidad para trabajar con entornos de servidores de aplicaciones Java.</p>
        <p class="date-time">Fecha y Hora del Servidor: <%= new java.util.Date() %></p>
    </div>
</body>
</html>