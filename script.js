// ==========================================
// ESTUDIA+
// ASISTENTE DE ESTUDIO PASO A PASO
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const preguntas = document.querySelectorAll(".pregunta");

    const botonSiguiente = document.getElementById("siguiente");
    const botonAnterior = document.getElementById("anterior");

    let preguntaActual = 0;


    // ==========================================
    // MOSTRAR PREGUNTA
    // ==========================================

    function mostrarPregunta(numero) {

        preguntas.forEach(function (pregunta, indice) {

            if (indice === numero) {
                pregunta.classList.add("activa");
            } else {
                pregunta.classList.remove("activa");
            }

        });


        // Botón anterior

        if (preguntaActual === 0) {

            botonAnterior.style.display = "none";

        } else {

            botonAnterior.style.display = "inline-flex";

        }


        // Texto del botón siguiente

        if (preguntaActual === preguntas.length - 1) {

            botonSiguiente.textContent = "✨ Encontrar mi técnica";

        } else {

            botonSiguiente.textContent = "Siguiente →";

        }

    }


    // ==========================================
    // COMPROBAR RESPUESTA
    // ==========================================

    function comprobarPregunta() {

        const pregunta = preguntas[preguntaActual];

        const campo = pregunta.querySelector(
            "input, select"
        );


        if (!campo) {
            return true;
        }


        if (campo.value.trim() === "") {

            alert(
                "📝 Responde esta pregunta antes de continuar."
            );

            campo.focus();

            return false;
        }


        return true;

    }


    // ==========================================
    // BOTÓN SIGUIENTE
    // ==========================================

    botonSiguiente.addEventListener(
        "click",
        function () {

            // Comprobar respuesta

            if (!comprobarPregunta()) {
                return;
            }


            // Si es la última pregunta

            if (
                preguntaActual ===
                preguntas.length - 1
            ) {

                crearPlan();

                return;

            }


            // Pasar a la siguiente

            preguntaActual++;

            mostrarPregunta(preguntaActual);

        }
    );


    // ==========================================
    // BOTÓN ANTERIOR
    // ==========================================

    botonAnterior.addEventListener(
        "click",
        function () {

            if (preguntaActual > 0) {

                preguntaActual--;

                mostrarPregunta(preguntaActual);

            }

        }
    );


    // ==========================================
    // CREAR PLAN PERSONALIZADO
    // ==========================================

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


        // ======================================
        // RECOMENDACIONES
        // ======================================

        let recomendaciones = [];


        // MATEMÁTICAS

        if (materia === "matematicas") {

            recomendaciones.push(
                "🧮 Práctica activa — resuelve ejercicios sin mirar primero la solución."
            );

            recomendaciones.push(
                "📝 Resolución paso a paso — divide cada problema en procedimientos pequeños."
            );

            recomendaciones.push(
                "🧠 Recuperación activa — intenta recordar fórmulas antes de consultar tus apuntes."
            );

        }


        // CIENCIAS

        else if (materia === "ciencias") {

            recomendaciones.push(
                "🧠 Mapas conceptuales — relaciona los conceptos principales."
            );

            recomendaciones.push(
                "💡 Método Feynman — explica el tema con palabras sencillas."
            );

            recomendaciones.push(
                "❓ Preguntas activas — conviértete tus apuntes en preguntas."
            );

        }


        // HISTORIA

        else if (materia === "historia") {

            recomendaciones.push(
                "📅 Línea de tiempo — organiza los acontecimientos cronológicamente."
            );

            recomendaciones.push(
                "🗺️ Mapa mental — relaciona fechas, personajes y acontecimientos."
            );

            recomendaciones.push(
                "🃏 Flashcards — practica fechas y conceptos importantes."
            );

        }


        // IDIOMAS

        else if (materia === "idiomas") {

            recomendaciones.push(
                "🔄 Repetición espaciada — repasa el vocabulario en diferentes momentos."
            );

            recomendaciones.push(
                "🃏 Flashcards — practica palabras y expresiones."
            );

            recomendaciones.push(
                "🗣️ Práctica activa — utiliza las palabras creando tus propias frases."
            );

        }


        // COMUNICACIÓN

        else if (materia === "comunicacion") {

            recomendaciones.push(
                "💡 Método Feynman — explica el contenido con tus propias palabras."
            );

            recomendaciones.push(
                "📝 Resumen activo — identifica las ideas principales."
            );

            recomendaciones.push(
                "❓ Preguntas de comprensión — comprueba cuánto recuerdas."
            );

        }


        // OTRA MATERIA

        else {

            recomendaciones.push(
                "🧠 Recuperación activa — intenta recordar la información sin mirar."
            );

            recomendaciones.push(
                "🍅 Pomodoro — divide el estudio en sesiones de concentración."
            );

            recomendaciones.push(
                "🔄 Repetición espaciada — repasa el contenido posteriormente."
            );

        }


        // ======================================
        // ADAPTAR SEGÚN OBJETIVO
        // ======================================

        if (objetivo === "examen") {

            recomendaciones.unshift(
                "📝 Preguntas de práctica — entrena con preguntas similares a las del examen."
            );

        }


        if (objetivo === "memorizar") {

            recomendaciones.unshift(
                "🃏 Flashcards — convierte los conceptos importantes en preguntas y respuestas."
            );

        }


        if (objetivo === "proyecto") {

            recomendaciones.unshift(
                "🗺️ Mapa mental — organiza las ideas antes de comenzar el proyecto."
            );

        }


        // ======================================
        // ADAPTAR SEGÚN DIFICULTAD
        // ======================================

        if (dificultad === "dificil") {

            recomendaciones.push(
                "💡 Método Feynman — explica el tema como si se lo enseñaras a alguien."
            );

        }


        // ======================================
        // ADAPTAR SEGÚN TIEMPO
        // ======================================

        let plan = [];


        if (tiempo === "20") {

            plan = [
                "🎯 3 min → prepara tus materiales",
                "🧠 10 min → estudia activamente",
                "📝 5 min → practica sin mirar",
                "🔄 2 min → repaso final"
            ];

        }


        else if (tiempo === "30") {

            plan = [
                "🎯 5 min → revisa los conceptos principales",
                "🧠 15 min → aplica la técnica recomendada",
                "📝 7 min → practica",
                "🔄 3 min → repaso final"
            ];

        }


        else if (tiempo === "60") {

            plan = [
                "🎯 5 min → organiza el contenido",
                "🧠 25 min → primera sesión",
                "☕ 5 min → descanso",
                "📝 20 min → práctica",
                "🔄 5 min → repaso"
            ];

        }


        else if (tiempo === "120") {

            plan = [
                "🎯 10 min → organiza los temas",
                "🧠 25 min → primera sesión",
                "☕ 5 min → descanso",
                "📝 25 min → práctica",
                "☕ 10 min → descanso",
                "🧠 25 min → segunda sesión",
                "🔄 20 min → repaso"
            ];

        }


        else {

            plan = [
                "🎯 Organiza primero los temas importantes",
                "🧠 Estudia en sesiones de 25 minutos",
                "☕ Descansa 5 minutos",
                "📝 Practica lo aprendido",
                "🔄 Termina con un repaso"
            ];

        }


        // ======================================
        // CREAR HTML DE TÉCNICAS
        // ======================================

        let tecnicasHTML = "";


        recomendaciones
            .slice(0, 4)
            .forEach(function (tecnica) {

                tecnicasHTML += `

                    <div style="
                        background:white;
                        padding:18px;
                        margin:12px 0;
                        border-radius:14px;
                        border:1px solid #e5e8ef;
                    ">

                        ${tecnica}

                    </div>

                `;

            });


        // ======================================
        // CREAR HTML DEL PLAN
        // ======================================

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


        // ======================================
        // MOSTRAR RESULTADO
        // ======================================

        const resultado =
            document.getElementById("resultado");

        const recomendacion =
            document.getElementById("recomendacion");


        recomendacion.innerHTML = `

            <h2>
                🎯 Tu plan personalizado
            </h2>

            <p>
                <strong>📚 Materia:</strong>
                ${obtenerNombreMateria(materia)}
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
                ${obtenerNombreObjetivo(objetivo)}
            </p>

            <p>
                <strong>📊 Dificultad:</strong>
                ${obtenerNombreDificultad(dificultad)}
            </p>

            <hr style="
                margin:25px 0;
                border:0;
                border-top:1px solid #ddd;
            ">


            <h3>
                🧠 Técnicas recomendadas
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
                margin-top:15px;
                border-radius:14px;
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
                border-radius:14px;
            ">

                <strong>
                    💡 Consejo de Estudia+
                </strong>

                <p style="
                    margin-top:8px;
                ">

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


    // ==========================================
    // NOMBRES
    // ==========================================

    function obtenerNombreMateria(materia) {

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


    function obtenerNombreObjetivo(objetivo) {

        const nombres = {

            examen: "Preparar un examen",
            memorizar: "Memorizar información",
            comprender: "Comprender un tema",
            tarea: "Hacer una tarea",
            proyecto: "Hacer un proyecto"

        };

        return nombres[objetivo] || objetivo;

    }


    function obtenerNombreDificultad(dificultad) {

        const nombres = {

            facil: "Fácil",
            medio: "Regular",
            dificil: "Difícil"

        };

        return nombres[dificultad] || dificultad;

    }


    // ==========================================
    // INICIAR
    // ==========================================

    mostrarPregunta(0);

});
