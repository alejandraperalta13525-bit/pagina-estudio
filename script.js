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
        descripcion: "Resuelve ejercicios intentando hacerlo por ti mismo antes de consultar la solución.",
        comoHacerlo: [
            "Lee el problema con atención.",
            "Intenta resolverlo sin mirar la respuesta.",
            "Comprueba tu procedimiento.",
            "Identifica tus errores.",
            "Vuelve a resolver el ejercicio."
        ],
        ideal: ["tarea", "examen", "comprender"],
        tiempos: ["20", "30", "60", "120"],
        dificultad: ["facil", "medio", "dificil"]
    },

    {
        nombre: "Resolución paso a paso",
        icono: "📝",
        descripcion: "Divide los problemas en pasos pequeños para comprender el procedimiento.",
        comoHacerlo: [
            "Identifica los datos del problema.",
            "Determina qué necesitas encontrar.",
            "Elige la fórmula o procedimiento.",
            "Resuelve paso a paso.",
            "Comprueba el resultado."
        ],
        ideal: ["tarea", "comprender", "examen"],
        tiempos: ["30", "60", "120"],
        dificultad: ["medio", "dificil"]
    },

    {
        nombre: "Recuperación activa",
        icono: "🧠",
        descripcion: "Intenta recordar fórmulas y procedimientos sin consultar tus apuntes.",
        comoHacerlo: [
            "Estudia una fórmula o procedimiento.",
            "Cierra tus apuntes.",
            "Escribe lo que recuerdes.",
            "Comprueba tu respuesta.",
            "Repasa lo que hayas olvidado."
        ],
        ideal: ["examen", "memorizar", "comprender"],
        tiempos: ["20", "30", "60"],
        dificultad: ["facil", "medio", "dificil"]
    },

    {
        nombre: "Práctica intercalada",
        icono: "🔀",
        descripcion: "Combina diferentes tipos de problemas para aprender cuándo utilizar cada procedimiento.",
        comoHacerlo: [
            "Elige ejercicios de diferentes tipos.",
            "Mézclalos en lugar de hacer todos iguales.",
            "Identifica qué procedimiento necesitas antes de comenzar.",
            "Resuelve cada problema.",
            "Revisa tus errores."
        ],
        ideal: ["examen", "comprender"],
        tiempos: ["60", "120"],
        dificultad: ["medio", "dificil"]
    },

    {
        nombre: "Explicación Feynman",
        icono: "💡",
        descripcion: "Explica un concepto matemático con palabras sencillas para comprobar si realmente lo comprendes.",
        comoHacerlo: [
            "Elige un concepto.",
            "Explícalo sin mirar tus apuntes.",
            "Utiliza palabras sencillas.",
            "Detecta las partes que no puedes explicar.",
            "Repasa esas partes y vuelve a explicarlas."
        ],
        ideal: ["comprender", "examen"],
        tiempos: ["30", "60", "120"],
        dificultad: ["medio", "dificil"]
    },

    {
        nombre: "Flashcards",
        icono: "🃏",
        descripcion: "Utiliza tarjetas para repasar fórmulas, conceptos y procedimientos importantes.",
        comoHacerlo: [
            "Escribe una fórmula o concepto en una tarjeta.",
            "Escribe la respuesta en el reverso.",
            "Intenta recordar la respuesta sin mirar.",
            "Comprueba si tu respuesta es correcta.",
            "Repite las tarjetas que hayas olvidado."
        ],
        ideal: ["examen", "memorizar", "comprender"],
        tiempos: ["20", "30", "60"],
        dificultad: ["facil", "medio"]
    }
],     
  
        
        ciencias: [
            {
                nombre: "Explicación Feynman",
                icono: "💡",
                descripcion: "Explica el concepto con palabras sencillas como si se lo enseñaras a otra persona.",
               comoHacerlo: [
    "Elige un concepto.",
    "Explícalo con palabras sencillas.",
    "Imagina que se lo enseñas a otra persona.",
    "Identifica las partes que no puedes explicar.",
    "Repasa esas partes y vuelve a explicarlas."
],
                ideal: ["comprender", "examen"]
            },
            {
                nombre: "Mapas conceptuales",
                icono: "🧠",
                descripcion: "Relaciona conceptos, procesos y causas para comprender cómo se conecta la información.",
                comoHacerlo: [
    "Escribe el tema principal.",
    "Identifica los conceptos más importantes.",
    "Organiza los conceptos de lo general a lo específico.",
    "Une los conceptos con líneas y palabras clave.",
    "Revisa si el mapa representa correctamente el tema."
],
                ideal: ["comprender", "memorizar"]
            },
            {
                nombre: "Preguntas activas",
                icono: "❓",
                descripcion: "Convierte tus apuntes en preguntas y trata de responderlas sin mirar.",
               comoHacerlo: [
    "Convierte tus apuntes en preguntas.",
    "Intenta responderlas sin mirar.",
    "Comprueba tus respuestas.",
    "Marca las preguntas que hayas respondido mal.",
    "Repasa y vuelve a responderlas."
],
                ideal: ["examen", "memorizar"]
            },
            {
                nombre: "Práctica activa",
                icono: "🔬",
                descripcion: "Aplica los conceptos mediante ejercicios, ejemplos o problemas.",
               comoHacerlo: [
    "Elige ejercicios o problemas relacionados con el tema.",
    "Intenta resolverlos sin mirar la solución.",
    "Explica por qué elegiste cada respuesta.",
    "Comprueba tus resultados.",
    "Corrige tus errores y vuelve a intentarlo."
],
                ideal: ["tarea", "comprender", "examen"]
            },
                {
        nombre: "Recuperación activa",
        icono: "🧠",
        descripcion: "Intenta recordar conceptos, procesos y explicaciones sin consultar tus apuntes.",
        comoHacerlo: [
            "Lee y comprende el concepto.",
            "Cierra tus apuntes.",
            "Escribe o explica lo que recuerdes.",
            "Comprueba qué partes olvidaste.",
            "Repasa y vuelve a intentarlo."
        ],
        ideal: ["examen", "memorizar", "comprender"]
    },
                {
        nombre: "Flashcards",
        icono: "🃏",
        descripcion: "Utiliza tarjetas para repasar conceptos, términos, procesos y definiciones importantes.",
        comoHacerlo: [
            "Escribe una pregunta o concepto en una tarjeta.",
            "Coloca la respuesta en el reverso.",
            "Intenta responder sin mirar.",
            "Comprueba tu respuesta.",
            "Repite las tarjetas que hayas olvidado."
        ],
        ideal: ["examen", "memorizar", "comprender"]
    }
            ],

        
        historia: [
            {
                nombre: "Línea de tiempo",
                icono: "📅",
                descripcion: "Ordena acontecimientos para comprender cuándo y cómo ocurrieron.",
               comoHacerlo: [
    "Identifica los acontecimientos principales del tema.",
    "Anota las fechas correspondientes.",
    "Ordena los acontecimientos cronológicamente.",
    "Agrega una breve explicación de cada acontecimiento.",
    "Revisa la secuencia y las relaciones entre los hechos."
        ],
                ideal: ["comprender", "memorizar", "examen"]
            },
            {
                nombre: "Mapa mental",
                icono: "🗺️",
                descripcion: "Relaciona personajes, fechas, lugares, causas y consecuencias.",
                comoHacerlo: [
    "Escribe el tema principal en el centro.",
    "Identifica las ideas más importantes.",
    "Coloca las ideas principales alrededor del tema.",
    "Agrega palabras clave, ejemplos o imágenes.",
    "Revisa que las ideas estén conectadas correctamente."
],
                ideal: ["comprender", "memorizar"]
            },
            {
                nombre: "Flashcards",
                icono: "🃏",
                descripcion: "Practica fechas, personajes y conceptos mediante tarjetas.",
               comoHacerlo: [
    "Escribe una pregunta o concepto histórico en una tarjeta.",
    "Coloca la respuesta en el reverso.",
    "Intenta responder sin mirar.",
    "Comprueba tu respuesta.",
    "Repite las tarjetas que hayas olvidado."
],
                ideal: ["memorizar", "examen"]
            },
            {
                nombre: "Recuperación activa",
                icono: "🧠",
                descripcion: "Intenta explicar los acontecimientos sin consultar tus apuntes.",
               comoHacerlo: [
    "Lee y comprende el tema.",
    "Cierra tus apuntes.",
    "Escribe o explica lo que recuerdes.",
    "Comprueba qué información olvidaste.",
    "Repasa y vuelve a intentarlo."
],
                ideal: ["examen", "memorizar"]
            },
                {
        nombre: "Comparación histórica",
        icono: "🔗",
        descripcion: "Compara personajes, acontecimientos, épocas o procesos históricos para identificar semejanzas y diferencias.",
        comoHacerlo: [
            "Elige los dos temas que vas a comparar.",
            "Anota las características principales de cada uno.",
            "Identifica sus semejanzas.",
            "Identifica sus diferencias.",
            "Escribe una conclusión sobre lo aprendido."
        ],
        ideal: ["comprender", "tarea", "examen"],
        tiempos: ["20", "30", "60"],
        dificultad: ["medio", "dificil"]
    },
                {
        nombre: "Preguntas de análisis",
        icono: "❓",
        descripcion: "Analiza las causas, consecuencias y relaciones entre acontecimientos históricos.",
        comoHacerlo: [
            "Elige un acontecimiento histórico.",
            "Pregúntate por qué ocurrió.",
            "Identifica sus principales consecuencias.",
            "Relaciona el acontecimiento con otros hechos.",
            "Responde con tus propias palabras."
        ],
        ideal: ["comprender", "examen", "tarea"],
        tiempos: ["20", "30", "60"],
        dificultad: ["medio", "dificil"]
    }
            ],


        idiomas: [
            {
                nombre: "Repetición espaciada",
                icono: "🔄",
                descripcion: "Repasa vocabulario y conceptos en diferentes momentos para fortalecer la memoria.",
               comoHacerlo: [
    "Selecciona las palabras o expresiones que necesitas aprender.",
    "Repásalas después de unos minutos.",
    "Vuelve a repasarlas más tarde el mismo día.",
    "Repásalas nuevamente al día siguiente.",
    "Aumenta poco a poco el tiempo entre cada repaso."
],
                ideal: ["memorizar", "examen"]
            },
            {
                nombre: "Flashcards",
                icono: "🃏",
                descripcion: "Practica vocabulario, expresiones y conceptos mediante tarjetas.",
               comoHacerlo: [
    "Escribe una palabra o expresión en el frente de la tarjeta.",
    "Escribe su significado o traducción en el reverso.",
    "Intenta recordar la respuesta antes de voltear la tarjeta.",
    "Separa las palabras que recuerdas de las que te cuestan.",
    "Repite con mayor frecuencia las tarjetas que hayas olvidado."
],
                ideal: ["memorizar", "examen"]
            },
            {
                nombre: "Práctica activa",
                icono: "🗣️",
                descripcion: "Utiliza las palabras y estructuras creando tus propias frases.",
                comoHacerlo: [
    "Elige vocabulario o estructuras que quieras practicar.",
    "Escribe o pronuncia frases utilizando lo aprendido.",
    "Intenta comunicar una idea sin traducir palabra por palabra.",
    "Comprueba tus errores.",
    "Repite las frases intentando mejorar."
],
                ideal: ["comprender", "tarea", "examen"]
            },
            {
                nombre: "Inmersión",
                icono: "🌎",
                descripcion: "Escucha, lee o interactúa con contenido real en el idioma que estás aprendiendo.",
                comoHacerlo: [
    "Elige contenido relacionado con el idioma que estudias.",
    "Escucha o lee el contenido en el idioma original.",
    "Intenta comprender el significado por el contexto.",
    "Anota palabras o expresiones nuevas.",
    "Vuelve a utilizar las expresiones aprendidas."
],
                ideal: ["comprender", "tarea"]
            },
            {
    nombre: "Escucha activa",
    icono: "🎧",
    descripcion: "Escucha contenido en el idioma que estudias para reconocer palabras, expresiones y pronunciación en contexto.",
    comoHacerlo: [
        "Elige un audio, canción, video o conversación en el idioma.",
        "Escucha una primera vez para comprender la idea general.",
        "Vuelve a escuchar e identifica palabras y expresiones conocidas.",
        "Anota las palabras que no reconociste.",
        "Escucha nuevamente intentando comprender sin mirar la traducción."
    ],
    ideal: ["comprender", "tarea", "examen"],
    tiempos: ["20", "30", "60"],
    dificultad: ["facil", "medio"]
},
            {
    nombre: "Conversación guiada",
    icono: "💬",
    descripcion: "Practica conversaciones utilizando vocabulario y expresiones relacionadas con el tema que estás estudiando.",
    comoHacerlo: [
        "Elige un tema para conversar.",
        "Prepara algunas palabras y expresiones útiles.",
        "Formula preguntas y responde en el idioma.",
        "Intenta mantener la conversación sin traducir todo.",
        "Anota tus errores y practica nuevamente."
    ],
    ideal: ["comprender", "tarea", "examen"],
    tiempos: ["20", "30", "60"],
    dificultad: ["medio", "dificil"]
}
            ],


        comunicacion: [
            {
                nombre: "Explicación Feynman",
                icono: "💡",
                descripcion: "Explica el contenido con tus propias palabras para comprobar si realmente lo entiendes.",
               comoHacerlo: [
    "Elige el concepto o tema que quieres comprender.",
    "Explícalo con palabras sencillas, como si se lo enseñaras a otra persona.",
    "Identifica las partes que no puedes explicar con claridad.",
    "Vuelve a estudiar esas partes.",
    "Explica nuevamente el tema hasta poder hacerlo con claridad."
],
                ideal: ["comprender", "examen"]
            },
            {
                nombre: "Resumen activo",
                icono: "📝",
                descripcion: "Resume las ideas principales sin copiar literalmente el texto.",
               comoHacerlo: [
    "Lee el texto con atención.",
    "Identifica las ideas principales.",
    "Cierra el texto e intenta recordar lo más importante.",
    "Escribe un resumen utilizando tus propias palabras.",
    "Compara tu resumen con el texto y corrige lo necesario."
],
                ideal: ["comprender", "memorizar"]
            },
            {
                nombre: "Preguntas de comprensión",
                icono: "❓",
                descripcion: "Crea preguntas sobre el contenido y respóndelas sin consultar el texto.",
                comoHacerlo: [
    "Lee el texto o contenido que estás estudiando.",
    "Formula preguntas sobre las ideas principales.",
    "Intenta responderlas sin mirar el texto.",
    "Comprueba tus respuestas.",
    "Repasa las preguntas que hayas respondido incorrectamente."
],
                ideal: ["examen", "memorizar"]
            },
            {
                nombre: "Mapa conceptual",
                icono: "🗺️",
                descripcion: "Organiza las ideas y muestra cómo se relacionan entre sí.",
                comoHacerlo: [
    "Escribe el tema principal.",
    "Identifica los conceptos más importantes.",
    "Organiza los conceptos desde los más generales hasta los más específicos.",
    "Conecta los conceptos con líneas y palabras clave.",
    "Revisa que las conexiones representen correctamente el tema."
],
                ideal: ["comprender", "tarea"]
            },
            {
    nombre: "Lectura activa",
    icono: "📖",
    descripcion: "Analiza un texto mientras lees para identificar ideas principales, información importante y relaciones entre conceptos.",
    comoHacerlo: [
        "Lee el texto buscando primero la idea general.",
        "Subraya o identifica las ideas principales.",
        "Anota palabras o conceptos importantes.",
        "Hazte preguntas mientras avanzas en la lectura.",
        "Explica con tus propias palabras lo que entendiste."
    ],
    ideal: ["comprender", "tarea", "examen"],
    tiempos: ["20", "30", "60"],
    dificultad: ["facil", "medio"]
},
            {
    nombre: "Análisis de textos",
    icono: "🔍",
    descripcion: "Examina un texto para identificar su propósito, ideas principales, argumentos y recursos utilizados por el autor.",
    comoHacerlo: [
        "Lee el texto completo para conocer su contenido.",
        "Identifica el propósito del autor.",
        "Busca las ideas y argumentos principales.",
        "Analiza cómo se relacionan las diferentes partes del texto.",
        "Escribe una conclusión con lo que comprendiste."
    ],
    ideal: ["comprender", "examen", "tarea"],
    tiempos: ["20", "30", "60"],
    dificultad: ["medio", "dificil"]
}
        ],


        otra: [
            {
                nombre: "Recuperación activa",
                icono: "🧠",
                descripcion: "Intenta recordar la información sin mirar tus apuntes.",
               comoHacerlo: [
    "Estudia el contenido con atención.",
    "Cierra tus apuntes o materiales.",
    "Intenta explicar o escribir todo lo que recuerdes.",
    "Comprueba qué información olvidaste o confundiste.",
    "Repasa esos puntos y vuelve a intentarlo."
],
                ideal: ["examen", "memorizar", "comprender"]
            },
            {
                nombre: "Pomodoro",
                icono: "🍅",
                descripcion: "Divide tu estudio en periodos de concentración y descansos.",
                comoHacerlo: [
    "Elige la tarea o tema que vas a estudiar.",
    "Estudia durante 25 minutos sin distracciones.",
    "Descansa durante 5 minutos.",
    "Repite el ciclo de estudio y descanso.",
    "Después de cuatro ciclos, realiza un descanso más largo."
],
                ideal: ["examen", "tarea", "comprender"]
            },
            {
                nombre: "Explicación Feynman",
                icono: "💡",
                descripcion: "Explica el contenido con palabras sencillas para descubrir qué partes todavía no comprendes.",
                comoHacerlo: [
    "Elige el concepto que quieres aprender.",
    "Explícalo con palabras sencillas, como si se lo enseñaras a otra persona.",
    "Identifica las partes que no puedes explicar bien.",
    "Vuelve a estudiar esas partes.",
    "Explica nuevamente el concepto hasta comprenderlo con claridad."
],
                ideal: ["comprender", "examen"]
            },
            {
                nombre: "Repetición espaciada",
                icono: "🔄",
                descripcion: "Distribuye los repasos a lo largo del tiempo.",
               comoHacerlo: [
    "Selecciona la información que necesitas aprender.",
    "Repásala poco después de estudiarla.",
    "Vuelve a repasarla más tarde.",
    "Aumenta progresivamente el tiempo entre repasos.",
    "Continúa repasando hasta poder recordarla con facilidad."
],
                ideal: ["memorizar", "examen"]
            },
            {
    nombre: "Resumen activo",
    icono: "📝",
    descripcion: "Organiza la información más importante utilizando tus propias palabras para comprobar qué has comprendido.",
    comoHacerlo: [
        "Lee y comprende el contenido.",
        "Identifica las ideas principales.",
        "Cierra tus apuntes.",
        "Escribe un resumen utilizando tus propias palabras.",
        "Compara tu resumen con el contenido original y corrige lo necesario."
    ],
    ideal: ["comprender", "tarea", "examen"],
    tiempos: ["20", "30", "60"],
    dificultad: ["facil", "medio"]
},
            {
    nombre: "Organización por bloques",
    icono: "🗂️",
    descripcion: "Divide un tema amplio en pequeños bloques de información para estudiarlos de manera organizada.",
    comoHacerlo: [
        "Divide el tema en partes pequeñas.",
        "Ordena los bloques desde lo más importante hasta lo menos importante.",
        "Estudia un bloque a la vez.",
        "Haz una pausa breve entre bloques.",
        "Al terminar, relaciona todos los bloques para comprender el tema completo."
    ],
    ideal: ["comprender", "tarea", "proyecto"],
    tiempos: ["30", "60", "120"],
    dificultad: ["facil", "medio"]
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
                    tecnica.nombre === "Explicación Feynman" ||
                    tecnica.nombre === "Recuperación activa" ||
                    tecnica.nombre === "Práctica activa"
                ) {
                    puntuacion += 3;
                }

            }


           // Adaptar las técnicas según el tiempo disponible

if (tiempo === "20" || tiempo === "30") {

    // Para sesiones cortas: técnicas rápidas y directas
    if (
        tecnica.nombre === "Recuperación activa" ||
        tecnica.nombre === "Práctica activa" ||
        tecnica.nombre === "Flashcards"
    ) {
        puntuacion += 4;
    }

    if (
        tecnica.nombre === "Explicación Feynman" ||
        tecnica.nombre === "Práctica intercalada"
    ) {
        puntuacion -= 1;
    }

}

if (tiempo === "60") {

    // Para una hora: equilibrio entre práctica y comprensión
    if (
        tecnica.nombre === "Recuperación activa" ||
        tecnica.nombre === "Práctica activa" ||
        tecnica.nombre === "Explicación Feynman" ||
        tecnica.nombre === "Mapas conceptuales"
    ) {
        puntuacion += 3;
    }

}

if (tiempo === "120") {

    // Para sesiones largas: técnicas que permiten profundizar
    if (
        tecnica.nombre === "Explicación Feynman" ||
        tecnica.nombre === "Mapas conceptuales" ||
        tecnica.nombre === "Práctica intercalada"
    ) {
        puntuacion += 5;
    }

    if (
        tecnica.nombre === "Recuperación activa" ||
        tecnica.nombre === "Práctica activa"
    ) {
        puntuacion += 2;
    }

}
            return {
                ...tecnica,
                puntuacion: puntuacion
            };

        });


    // Ordenar por relevancia y objetivo

let prioridadesObjetivo = {
    examen: [
        "Recuperación activa",
        "Práctica activa",
        "Preguntas activas",
        "Preguntas de comprensión",
        "Flashcards",
        "Práctica intercalada"
    ],

    tarea: [
        "Resolución paso a paso",
        "Práctica activa",
        "Preguntas de análisis",
        "Resumen activo",
        "Explicación Feynman"
    ],

    comprender: [
        "Explicación Feynman",
        "Resolución paso a paso",
        "Mapa conceptual",
        "Mapas conceptuales",
        "Preguntas de comprensión",
        "Análisis de textos",
        "Lectura activa"
    ],

    memorizar: [
        "Recuperación activa",
        "Flashcards",
        "Repetición espaciada",
        "Práctica activa"
    ],

    proyecto: [
        "Organización por bloques",
        "Práctica activa",
        "Explicación Feynman",
        "Mapa conceptual",
        "Mapas conceptuales",
        "Resumen activo"
    ]
};


if (prioridadesObjetivo[objetivo]) {

    recomendadas.sort(function (a, b) {

        let prioridadA = prioridadesObjetivo[objetivo].indexOf(a.nombre);
        let prioridadB = prioridadesObjetivo[objetivo].indexOf(b.nombre);

        if (prioridadA === -1) prioridadA = 999;
        if (prioridadB === -1) prioridadB = 999;

        // Primero se respeta el objetivo,
        // y luego la puntuación calculada anteriormente.
        if (prioridadA !== prioridadB) {
            return prioridadA - prioridadB;
        }

        return b.puntuacion - a.puntuacion;
    });

} else {

    recomendadas.sort(function (a, b) {
        return b.puntuacion - a.puntuacion;
    });

}


// PRIORIDAD SEGÚN EL OBJETIVO

let prioridades = {
    examen: [
        "Recuperación activa",
        "Práctica activa",
        "Preguntas activas",
        "Flashcards",
        "Práctica intercalada"
    ],

    tarea: [
        "Resolución paso a paso",
        "Práctica activa",
        "Preguntas de análisis",
        "Resumen activo",
        "Explicación Feynman"
    ],

    comprender: [
        "Explicación Feynman",
        "Resolución paso a paso",
        "Mapa conceptual",
        "Mapas conceptuales",
        "Preguntas de comprensión",
        "Análisis de textos",
        "Lectura activa"
    ],

    memorizar: [
        "Recuperación activa",
        "Flashcards",
        "Repetición espaciada",
        "Práctica activa"
    ],

    proyecto: [
        "Práctica activa",
        "Explicación Feynman",
        "Mapa conceptual",
        "Mapas conceptuales",
        "Resumen activo",
        "Organización por bloques"
    ]
};


// Ordenar las técnicas según el objetivo elegido

if (prioridades[objetivo]) {

    recomendadas.sort(function (a, b) {

        let prioridadA = prioridades[objetivo].indexOf(a.nombre);
        let prioridadB = prioridades[objetivo].indexOf(b.nombre);

        // Las técnicas que no estén en la lista quedan al final
        if (prioridadA === -1) prioridadA = 999;
        if (prioridadB === -1) prioridadB = 999;

        return prioridadA - prioridadB;
    });
}


// Seleccionar cantidad según el tiempo

if (tiempo === "20") {
    recomendadas = recomendadas.slice(0, 2);
}

else if (tiempo === "30") {
    recomendadas = recomendadas.slice(0, 3);
}

else if (tiempo === "60") {
    recomendadas = recomendadas.slice(0, 3);
}

else if (tiempo === "120") {
    recomendadas = recomendadas.slice(0, 4);
}

else {
    recomendadas = recomendadas.slice(0, 3);
}

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
            medio: "Medio",
            dificil: "Difícil"

        };

        return nombres[dificultad] || dificultad;

    }


    // ======================================================
    // INICIAR
    // ======================================================

    mostrarPregunta(0);

});
