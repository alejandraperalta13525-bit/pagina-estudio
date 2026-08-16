// ==========================================
// ESTUDIA+
// ASISTENTE PERSONALIZADO DE ESTUDIO
// ==========================================


// ==========================================
// BASE DE DATOS DE TÉCNICAS
// ==========================================

const tecnicas = {

    matematicas: [
        {
            nombre: "Práctica activa",
            icono: "🧮",
            descripcion: "Resuelve ejercicios sin mirar primero la solución."
        },
        {
            nombre: "Resolución paso a paso",
            icono: "📝",
            descripcion: "Divide cada problema en pasos pequeños y comprueba cada procedimiento."
        },
        {
            nombre: "Recuperación activa",
            icono: "🧠",
            descripcion: "Intenta recordar fórmulas y procedimientos antes de consultar tus apuntes."
        }
    ],

    ciencias: [
        {
            nombre: "Mapas conceptuales",
            icono: "🧠",
            descripcion: "Relaciona conceptos para comprender cómo se conecta la información."
        },
        {
            nombre: "Método Feynman",
            icono: "💡",
            descripcion: "Explica el concepto con palabras sencillas como si enseñaras a otra persona."
        },
        {
            nombre: "Preguntas activas",
            icono: "❓",
            descripcion: "Convierte el contenido en preguntas y responde sin mirar tus apuntes."
        }
    ],

    historia: [
        {
            nombre: "Línea de tiempo",
            icono: "📅",
            descripcion: "Ordena acontecimientos para comprender cuándo y cómo ocurrieron."
        },
        {
            nombre: "Mapas mentales",
            icono: "🗺️",
            descripcion: "Relaciona personajes, fechas, causas y consecuencias."
        },
        {
            nombre: "Flashcards",
            icono: "🃏",
            descripcion: "Practica fechas, nombres y conceptos mediante tarjetas."
        }
    ],

    idiomas: [
        {
            nombre: "Repetición espaciada",
            icono: "🔄",
            descripcion: "Repasa vocabulario en diferentes momentos para mejorar la memoria."
        },
        {
            nombre: "Flashcards",
            icono: "🃏",
            descripcion: "Practica palabras y expresiones mediante tarjetas."
        },
        {
            nombre: "Práctica activa",
            icono: "🗣️",
            descripcion: "Utiliza el vocabulario creando tus propias frases."
        }
    ],

    comunicacion: [
        {
            nombre: "Método Feynman",
            icono: "💡",
            descripcion: "Explica el contenido con tus propias palabras."
        },
        {
            nombre: "Resumen activo",
            icono: "📝",
            descripcion: "Resume las ideas principales sin copiar literalmente el texto."
        },
        {
            nombre: "Preguntas de comprensión",
            icono: "❓",
            descripcion: "Crea preguntas sobre el texto y responde sin consultarlo."
        }
    ],

    general: [
        {
            nombre: "Recuperación activa",
            icono: "🧠",
            descripcion: "Intenta recordar la información antes de volver a leerla."
        },
        {
            nombre: "Pomodoro",
            icono: "🍅",
            descripcion: "Divide el estudio en periodos de concentración y descansos."
        },
        {
            nombre: "Repetición espaciada",
            icono: "🔄",
            descripcion: "Distribuye los repasos a lo largo del tiempo."
        }
    ]

};


// ==========================================
// OBTENER TÉCNICAS SEGÚN LA MATERIA
// ==========================================

function obtenerTecnicasMateria(materia) {

    if (materia === "matematicas") {
        return tecnicas.matematicas;
    }

    if (materia === "ciencias") {
        return tecnicas.ciencias;
    }

    if (materia === "historia") {
        return tecnicas.historia;
    }

    if (materia === "idiomas") {
        return tecnicas.idiomas;
    }

    if (materia === "comunicacion") {
        return tecnicas.comunicacion;
    }

    return tecnicas.general;
}


// ==========================================
// ANALIZAR LAS RESPUESTAS
// ==========================================

function analizarRespuestas() {

    const materia = document.getElementById("materia").value;
    const tema = document.getElementById("tema").value.trim();
    const objetivo = document.getElementById("objetivo").value;
    const tiempo = document.getElementById("tiempo").value;
    const dificultad = document.getElementById("dificultad").value;

    // Comprobar información

    if (
        materia === "" ||
        tema === "" ||
        objetivo === "" ||
        tiempo === "" ||
        dificultad === ""
    ) {

        alert(
            "📝 Completa todas las preguntas para que Estudia+ pueda crear tu estrategia."
        );

        return;
    }


    // Obtener técnicas

    let recomendaciones = obtenerTecnicasMateria(materia);


    // ==========================================
    // ADAPTAR SEGÚN EL OBJETIVO
    // ==========================================

    if (objetivo === "examen") {

        recomendaciones = [
            {
                nombre: "Preguntas de práctica",
                icono: "📝",
                descripcion:
                    "Practica preguntas similares a las que podrías encontrar en tu examen."
            },
            ...recomendaciones
        ];
    }


    if (objetivo === "memorizar") {

        recomendaciones = [
            {
                nombre: "Repetición espaciada",
                icono: "🔄",
                descripcion:
                    "Programa varios repasos para fortalecer la memoria."
            },
            {
                nombre: "Flashcards",
                icono: "🃏",
                descripcion:
                    "Convierte los conceptos importantes en preguntas y respuestas."
            },
            ...recomendaciones
        ];
    }


    if (objetivo === "proyecto") {

        recomendaciones = [
            {
                nombre: "Mapa mental",
                icono: "🗺️",
                descripcion:
                    "Organiza las ideas principales antes de comenzar tu proyecto."
            },
            ...recomendaciones
        ];
    }


    // ==========================================
    // ADAPTAR SEGÚN DIFICULTAD
    // ==========================================

    if (dificultad === "dificil") {

        recomendaciones.push({
            nombre: "Método Feynman",
            icono: "💡",
            descripcion:
                "Explica el tema con palabras sencillas para descubrir qué partes todavía no comprendes."
        });
    }


    // ==========================================
    // ELIMINAR REPETIDOS
    // ==========================================

    recomendaciones = recomendaciones.filter(
        (tecnica, index, self) =>
            index === self.findIndex(
                t => t.nombre === tecnica.nombre
            )
    );


    // ==========================================
    // CREAR PLAN SEGÚN EL TIEMPO
    // ==========================================

    let plan = [];


    if (tiempo === "20") {

        plan = [
            "🎯 3 minutos → preparar el material",
            "🧠 10 minutos → estudiar activamente",
            "📝 5 minutos → comprobar lo aprendido",
            "🔄 2 minutos → repaso final"
        ];

    }


    else if (tiempo === "30") {

        plan = [
            "🎯 5 minutos → revisar conceptos principales",
            "🧠 15 minutos → aplicar la técnica recomendada",
            "📝 7 minutos → practicar sin mirar apuntes",
            "🔄 3 minutos → repaso final"
        ];

    }


    else if (tiempo === "60") {

        plan = [
            "🎯 5 minutos → preparar el estudio",
            "🧠 25 minutos → primera sesión",
            "☕ 5 minutos → descanso",
            "📝 20 minutos → práctica",
            "🔄 5 minutos → repaso"
        ];

    }


    else if (tiempo === "120") {

        plan = [
            "🎯 10 minutos → organizar el contenido",
            "🧠 25 minutos → primera sesión",
            "☕ 5 minutos → descanso",
            "📝 25 minutos → práctica",
            "☕ 10 minutos → descanso",
            "🧠 25 minutos → segunda sesión",
            "🔄 20 minutos → repaso"
        ];

    }


    else {

        plan = [
            "🎯 Organiza primero los temas prioritarios",
            "🧠 Realiza sesiones de 25 minutos",
            "☕ Descansa 5 minutos entre sesiones",
            "📝 Realiza ejercicios o preguntas",
            "🔄 Termina con un repaso"
        ];

    }


    // ==========================================
    // MOSTRAR RESULTADO
    // ==========================================

    mostrarResultado(
        materia,
        tema,
        objetivo,
        tiempo,
        dificultad,
        recomendaciones,
        plan
    );
}


// ==========================================
// MOSTRAR RESULTADO
// ==========================================

function mostrarResultado(
    materia,
    tema,
    objetivo,
    tiempo,
    dificultad,
    recomendaciones,
    plan
) {

    const resultado = document.getElementById("resultado");
    const recomendacion = document.getElementById("recomendacion");


    if (!resultado || !recomendacion) {

        console.error(
            "No se encontró el área de resultados."
        );

        return;
    }


    // ==========================================
    // NOMBRE DE MATERIA
    // ==========================================

    const nombresMaterias = {

        matematicas: "Matemáticas",
        ciencias: "Ciencias",
        historia: "Historia",
        idiomas: "Idiomas",
        comunicacion: "Comunicación",
        otra: "Otra materia"

    };


    const nombreMateria =
        nombresMaterias[materia] || materia;


    // ==========================================
    // CREAR TARJETAS DE TÉCNICAS
    // ==========================================

    let tecnicasHTML = "";


    recomendaciones.slice(0, 4).forEach(
        function(tecnica) {

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
        }
    );


    // ==========================================
    // CREAR PLAN
    // ==========================================

    let planHTML = "";


    plan.forEach(
        function(paso) {

            planHTML += `

                <div style="
                    padding:10px 0;
                ">
                    ${paso}
                </div>

            `;

        }
    );


    // ==========================================
    // RESULTADO FINAL
    // ==========================================

    recomendacion.innerHTML = `

        <div>

            <p>
                <strong>📚 Materia:</strong>
                ${nombreMateria}
            </p>

            <p>
                <strong>📖 Tema:</strong>
                ${tema}
            </p>

            <p>
                <strong>⏰ Tiempo disponible:</strong>
                ${tiempo} minutos
            </p>

            <p>
                <strong>🎯 Objetivo:</strong>
                ${objetivo}
            </p>

            <p>
                <strong>📊 Dificultad:</strong>
                ${dificultad}
            </p>


            <hr style="
                margin:25px 0;
                border:0;
                border-top:1px solid #ddd;
            ">


            <h3>
                🧠 Técnicas recomendadas para ti
            </h3>

            ${tecnicasHTML}


            <h3 style="
                margin-top:30px;
            ">
                ⏱️ Tu plan de estudio
            </h3>

            <div style="
                background:white;
                padding:20px;
                margin-top:15px;
                border-radius:16px;
            ">

                ${planHTML}

            </div>


            <div style="
                margin-top:25px;
                padding:20px;
                background:#eceaff;
                border-radius:16px;
            ">

                <strong>
                    💡 Consejo de Estudia+
                </strong>

                <p style="
                    margin-top:8px;
                ">

                    No intentes estudiar todo de memoria.
                    Comprende primero, practica después
                    y finalmente comprueba cuánto recuerdas.

                </p>

            </div>

        </div>

    `;


    resultado.classList.add("activo");


    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ==========================================
// INICIAR ESTUDIA+
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const boton =
            document.querySelector(
                ".boton-generar"
            );


        if (boton) {

            boton.addEventListener(
                "click",
                function(evento) {

                    evento.preventDefault();

                    analizarRespuestas();

                }
            );

        }

    }
);
