// ======================================================
// ESTUDIA+
// MOTOR DE RECOMENDACIONES DE TÉCNICAS DE ESTUDIO
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const preguntas = document.querySelectorAll(".pregunta");
    const botonSiguiente = document.getElementById("siguiente");
    const botonAnterior = document.getElementById("anterior");

    let preguntaActual = 0;


    // ======================================================
    // BASE DE DATOS DE TÉCNICAS
    // ======================================================

    const tecnicas = {

        matematicas: [
           {
    nombre: "Práctica activa",
    icono: "🧮",

    descripcion:
        "Resuelve ejercicios sin mirar primero la solución.",

    comoHacerlo: [
        "Lee y comprende el problema.",
        "Intenta resolverlo sin mirar la respuesta.",
        "Comprueba tu procedimiento.",
        "Identifica tus errores.",
        "Vuelve a resolver el ejercicio."
    ],

    ideal: ["examen", "comprender", "tarea"],

    tiempo: "10–25 minutos",

    dificultad: "Media"
},
            {
    nombre: "Resolución paso a paso",
    icono: "📝",

    descripcion:
        "Divide cada problema en pasos pequeños y revisa cada procedimiento.",

    comoHacerlo: [
        "Lee cuidadosamente el problema.",
        "Identifica qué información tienes.",
        "Determina qué necesitas encontrar.",
        "Resuelve el problema paso a paso.",
        "Comprueba si tu respuesta tiene sentido."
    ],

    ideal: ["comprender", "tarea", "examen"],

    tiempo: "10–20 minutos",

    dificultad: "Media"
},
           {
    nombre: "Recuperación activa",
    icono: "🧠",

    descripcion:
        "Intenta recordar fórmulas, conceptos o procedimientos sin consultar tus apuntes.",

    comoHacerlo: [
        "Estudia el contenido durante unos minutos.",
        "Cierra tus apuntes o material.",
        "Escribe o explica todo lo que recuerdes.",
        "Compara tu respuesta con el material.",
        "Repasa únicamente lo que hayas olvidado."
    ],

    ideal: ["examen", "memorizar", "comprender"],

    tiempo: "10–20 minutos",
               
    dificultad: "Media"
},
            {
    nombre: "Práctica intercalada",
    icono: "🔀",

    descripcion:
        "Combina diferentes tipos de ejercicios para aprender a identificar qué método utilizar en cada problema.",

    comoHacerlo: [
        "Elige ejercicios de diferentes tipos.",
        "Mezcla los ejercicios en lugar de resolver siempre el mismo tipo.",
        "Antes de comenzar cada ejercicio, identifica qué método necesitas.",
        "Resuelve el problema sin mirar la solución.",
        "Revisa tus errores y descubre qué procedimiento era el adecuado."
    ],

    ideal: ["examen", "comprender"],

    tiempo: "15–30 minutos",

    dificultad: "Alta"
},

        ciencias: [
            {
                nombre: "Método Feynman",
                icono: "💡",
                descripcion: "Explica el concepto con palabras sencillas como si se lo enseñaras a otra persona.",
                ideal: ["comprender", "examen"]
            },
            {
                nombre: "Mapas conceptuales",
                icono: "🧠",
                descripcion: "Relaciona conceptos, procesos y causas para comprender cómo se conecta la información.",
                ideal: ["comprender", "memorizar"]
            },
            {
                nombre: "Preguntas activas",
                icono: "❓",
                descripcion: "Convierte tus apuntes en preguntas y trata de responderlas sin mirar.",
                ideal: ["examen", "memorizar"]
            },
            {
                nombre: "Práctica activa",
                icono: "🔬",
                descripcion: "Aplica los conceptos mediante ejercicios, ejemplos o problemas.",
                ideal: ["tarea", "comprender", "examen"]
            }
        ],


        historia: [
            {
                nombre: "Línea de tiempo",
                icono: "📅",
                descripcion: "Ordena acontecimientos para comprender cuándo y cómo ocurrieron.",
                ideal: ["comprender", "memorizar", "examen"]
            },
            {
                nombre: "Mapa mental",
                icono: "🗺️",
                descripcion: "Relaciona personajes, fechas, lugares, causas y consecuencias.",
                ideal: ["comprender", "memorizar"]
            },
            {
                nombre: "Flashcards",
                icono: "🃏",
                descripcion: "Practica fechas, personajes y conceptos mediante tarjetas.",
                ideal: ["memorizar", "examen"]
            },
            {
                nombre: "Recuperación activa",
                icono: "🧠",
                descripcion: "Intenta explicar los acontecimientos sin consultar tus apuntes.",
                ideal: ["examen", "memorizar"]
            }
        ],


        idiomas: [
            {
                nombre: "Repetición espaciada",
                icono: "🔄",
                descripcion: "Repasa vocabulario y conceptos en diferentes momentos para fortalecer la memoria.",
                ideal: ["memorizar", "examen"]
            },
            {
                nombre: "Flashcards",
                icono: "🃏",
                descripcion: "Practica vocabulario, expresiones y conceptos mediante tarjetas.",
                ideal: ["memorizar", "examen"]
            },
            {
                nombre: "Práctica activa",
                icono: "🗣️",
                descripcion: "Utiliza las palabras y estructuras creando tus propias frases.",
                ideal: ["comprender", "tarea", "examen"]
            },
            {
                nombre: "Inmersión",
                icono: "🌎",
                descripcion: "Escucha, lee o interactúa con contenido real en el idioma que estás aprendiendo.",
                ideal: ["comprender", "tarea"]
            }
        ],


        comunicacion: [
            {
                nombre: "Método Feynman",
                icono: "💡",
                descripcion: "Explica el contenido con tus propias palabras para comprobar si realmente lo entiendes.",
                ideal: ["comprender", "examen"]
            },
            {
                nombre: "Resumen activo",
                icono: "📝",
                descripcion: "Resume las ideas principales sin copiar literalmente el texto.",
                ideal: ["comprender", "memorizar"]
            },
            {
                nombre: "Preguntas de comprensión",
                icono: "❓",
                descripcion: "Crea preguntas sobre el contenido y respóndelas sin consultar el texto.",
                ideal: ["examen", "memorizar"]
            },
            {
                nombre: "Mapa conceptual",
                icono: "🗺️",
                descripcion: "Organiza las ideas y muestra cómo se relacionan entre sí.",
                ideal: ["comprender", "tarea"]
            }
        ],


        otra: [
            {
                nombre: "Recuperación activa",
                icono: "🧠",
                descripcion: "Intenta recordar la información sin mirar tus apuntes.",
                ideal: ["examen", "memorizar", "comprender"]
            },
            {
                nombre: "Pomodoro",
                icono: "🍅",
                descripcion: "Divide tu estudio en periodos de concentración y descansos.",
                ideal: ["examen", "tarea", "comprender"]
            },
            {
                nombre: "Método Feynman",
                icono: "💡",
                descripcion: "Explica el contenido con palabras sencillas para descubrir qué partes todavía no comprendes.",
                ideal: ["comprender", "examen"]
            },
            {
                nombre: "Repetición espaciada",
                icono: "🔄",
                descripcion: "Distribuye los repasos a lo largo del tiempo.",
                ideal: ["memorizar", "examen"]
            }
        ]

    };


    // ======================================================
    // MOSTRAR PREGUNTA
    // ======================================================

    function mostrarPregunta(numero) {

        preguntas.forEach(function (pregunta, indice) {

            if (indice === numero) {
                pregunta.classList.add("activa");
            } else {
                pregunta.classList.remove("activa");
            }

        });


        if (preguntaActual === 0) {
            botonAnterior.style.display = "none";
        } else {
            botonAnterior.style.display = "inline-flex";
        }


        if (preguntaActual === preguntas.length - 1) {
            botonSiguiente.textContent = "✨ Encontrar mi técnica";
        } else {
            botonSiguiente.textContent = "Siguiente →";
        }

    }


    // ======================================================
    // COMPROBAR PREGUNTA
    // ======================================================

    function comprobarPregunta() {

        const pregunta = preguntas[preguntaActual];

        const campo = pregunta.querySelector("input, select");

        if (!campo) {
            return true;
        }

        if (campo.value.trim() === "") {

            alert("📝 Responde esta pregunta antes de continuar.");

            campo.focus();

            return false;
        }

        return true;

    }


    // ======================================================
    // BOTÓN SIGUIENTE
    // ======================================================

    botonSiguiente.addEventListener("click", function () {

        if (!comprobarPregunta()) {
            return;
        }


        if (preguntaActual === preguntas.length - 1) {

            crearPlan();

            return;
        }


        preguntaActual++;

        mostrarPregunta(preguntaActual);

    });


    // ======================================================
    // BOTÓN ANTERIOR
    // ======================================================

    botonAnterior.addEventListener("click", function () {

        if (preguntaActual > 0) {

            preguntaActual--;

            mostrarPregunta(preguntaActual);

        }

    });


    // ======================================================
    // CREAR PLAN
    // ======================================================

    function crearPlan() {

        const materia =
            document.getElementById("materia").value;

        const tema =
            document.getElementById("tema").value.trim();

        const tiempo =
            document.getElementById("tiempo").value;

        const objetivo =
            document.getElementById("objetivo").value;

        const dificultad =
            document.getElementById("dificultad").value;

        const fecha =
            document.getElementById("fecha").value;


        // ==================================================
        // SELECCIONAR TÉCNICAS DE LA MATERIA
        // ==================================================

        let disponibles =
            tecnicas[materia] || tecnicas.otra;


        // ==================================================
        // PUNTUAR TÉCNICAS SEGÚN EL OBJETIVO
        // ==================================================

        let recomendadas = disponibles.map(function (tecnica) {

            let puntuacion = 0;

            if (tecnica.ideal.includes(objetivo)) {
                puntuacion += 5;
            }

            // Dificultad alta
            if (dificultad === "dificil") {

                if (
                    tecnica.nombre === "Método Feynman" ||
                    tecnica.nombre === "Recuperación activa" ||
                    tecnica.nombre === "Práctica activa"
                ) {
                    puntuacion += 3;
                }

            }


            // Poco tiempo
            if (tiempo === "20" || tiempo === "30") {

                if (
                    tecnica.nombre === "Recuperación activa" ||
                    tecnica.nombre === "Práctica activa" ||
                    tecnica.nombre === "Flashcards"
                ) {
                    puntuacion += 2;
                }

            }


            return {
                ...tecnica,
                puntuacion: puntuacion
            };

        });


        // Ordenar por relevancia

        recomendadas.sort(function (a, b) {

            return b.puntuacion - a.puntuacion;

        });


        // Seleccionar máximo 4

        recomendadas = recomendadas.slice(0, 4);


        // ==================================================
        // PLAN SEGÚN EL TIEMPO
        // ==================================================

        let plan = [];


        if (tiempo === "20") {

            plan = [
                "🎯 3 min → prepara tus materiales",
                "🧠 8 min → aplica la primera técnica",
                "📝 6 min → practica sin mirar tus apuntes",
                "🔄 3 min → repaso final"
            ];

        }


        else if (tiempo === "30") {

            plan = [
                "🎯 5 min → revisa los conceptos principales",
                "🧠 12 min → aplica la técnica principal",
                "📝 8 min → práctica activa",
                "🔄 5 min → repaso final"
            ];

        }


        else if (tiempo === "60") {

            plan = [
                "🎯 5 min → organiza el contenido",
                "🧠 20 min → primera sesión",
                "☕ 5 min → descanso",
                "📝 20 min → práctica",
                "🔄 10 min → repaso"
            ];

        }


        else if (tiempo === "120") {

            plan = [
                "🎯 10 min → organiza los temas",
                "🧠 25 min → primera sesión",
                "☕ 10 min → descanso",
                "📝 25 min → práctica",
                "☕ 10 min → descanso",
                "🧠 25 min → segunda sesión",
                "🔄 15 min → repaso"
            ];

        }


        else {

            plan = [
                "🎯 Organiza los temas prioritarios",
                "🧠 Realiza sesiones de 25 minutos",
                "☕ Descansa 5 minutos",
                "📝 Practica lo aprendido",
                "🔄 Termina con un repaso"
            ];

        }


        // ==================================================
        // MOSTRAR TÉCNICAS
        // ==================================================

        let tecnicasHTML = "";


        recomendadas.forEach(function (tecnica) {

            tecnicasHTML += `

                <div style="
                    background:white;
                    padding:20px;
                    margin:12px 0;
                    border-radius:16px;
                    border:1px solid #e5e8ef;
                ">

                    <div style="
                        font-size:30px;
                        margin-bottom:8px;
                    ">
                        ${tecnica.icono}
                    </div>

                    <h3>
                        ${tecnica.nombre}
                    </h3>

                    <p>
                        ${tecnica.descripcion}
                    </p>

                </div>

            `;

        });


        // ==================================================
        // MOSTRAR PLAN
        // ==================================================

        let planHTML = "";


        plan.forEach(function (paso) {

            planHTML += `

                <p style="
                    padding:8px 0;
                    margin:0;
                ">
                    ${paso}
                </p>

            `;

        });


        // ==================================================
        // RESULTADO
        // ==================================================

        const resultado =
            document.getElementById("resultado");

        const recomendacion =
            document.getElementById("recomendacion");


        recomendacion.innerHTML = `

            <h2>
                🎯 Tu estrategia personalizada
            </h2>

            <p>
                Hemos analizado tus respuestas para crear
                una estrategia adaptada a ti.
            </p>

            <div style="
                background:#f5f4ff;
                padding:18px;
                border-radius:16px;
                margin:20px 0;
            ">

                <p>
                    <strong>📚 Materia:</strong>
                    ${nombreMateria(materia)}
                </p>

                <p>
                    <strong>📖 Tema:</strong>
                    ${tema}
                </p>

                <p>
                    <strong>⏰ Tiempo:</strong>
                    ${tiempo} minutos
                </p>

                <p>
                    <strong>🎯 Objetivo:</strong>
                    ${nombreObjetivo(objetivo)}
                </p>

                <p>
                    <strong>📊 Dificultad:</strong>
                    ${nombreDificultad(dificultad)}
                </p>

            </div>


            <h3>
                🧠 Técnicas recomendadas para ti
            </h3>

            ${tecnicasHTML}


            <h3 style="
                margin-top:30px;
            ">
                ⏱️ Tu sesión de estudio
            </h3>

            <div style="
                background:white;
                padding:20px;
                border-radius:16px;
                margin-top:15px;
            ">

                ${planHTML}

            </div>


            ${
                fecha
                ?
                `
                <div style="
                    margin-top:20px;
                    padding:15px;
                    background:#f0efff;
                    border-radius:12px;
                ">

                    📅 Fecha objetivo:
                    ${fecha}

                </div>
                `
                :
                ""
            }


            <div style="
                margin-top:25px;
                padding:20px;
                background:#eceaff;
                border-radius:16px;
            ">

                <strong>
                    💡 Consejo de Estudia+
                </strong>

                <p>
                    No estudies solamente leyendo.
                    Intenta recordar, practicar y explicar
                    lo aprendido.
                </p>

            </div>

        `;


        resultado.classList.add("activo");


        resultado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    // ======================================================
    // NOMBRES
    // ======================================================

    function nombreMateria(materia) {

        const nombres = {

            matematicas: "Matemáticas",
            ciencias: "Ciencias",
            historia: "Historia",
            idiomas: "Idiomas",
            comunicacion: "Comunicación",
            otra: "Otra materia"

        };

        return nombres[materia] || materia;

    }


    function nombreObjetivo(objetivo) {

        const nombres = {

            examen: "Preparar un examen",
            memorizar: "Memorizar información",
            comprender: "Comprender un tema",
            tarea: "Hacer una tarea",
            proyecto: "Hacer un proyecto"

        };

        return nombres[objetivo] || objetivo;

    }


    function nombreDificultad(dificultad) {

        const nombres = {

            facil: "Fácil",
            medio: "Regular",
            dificil: "Difícil"

        };

        return nombres[dificultad] || dificultad;

    }


    // ======================================================
    // INICIAR
    // ======================================================

    mostrarPregunta(0);

});
