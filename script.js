// ==========================================
// ESTUDIA+ | ASISTENTE INTELIGENTE
// ==========================================

// Técnicas disponibles
const tecnicas = {
    matematicas: [
        {
            nombre: "Práctica activa",
            icono: "🧮",
            descripcion: "Resuelve ejercicios en lugar de limitarte a leer la teoría."
        },
        {
            nombre: "Repetición espaciada",
            icono: "🔄",
            descripcion: "Repasa las fórmulas y procedimientos en diferentes momentos."
        },
        {
            nombre: "Método Feynman",
            icono: "💡",
            descripcion: "Explica el problema con tus propias palabras para detectar qué no entiendes."
        }
    ],

    ciencias: [
        {
            nombre: "Mapas conceptuales",
            icono: "🧠",
            descripcion: "Relaciona conceptos para comprender mejor los temas."
        },
        {
            nombre: "Método Feynman",
            icono: "💡",
            descripcion: "Explica el tema como si se lo enseñaras a otra persona."
        },
        {
            nombre: "Preguntas activas",
            icono: "❓",
            descripcion: "Convierte el contenido en preguntas y trata de responderlas sin mirar tus apuntes."
        }
    ],

    historia: [
        {
            nombre: "Línea de tiempo",
            icono: "📅",
            descripcion: "Organiza acontecimientos cronológicamente para comprender la evolución de los hechos."
        },
        {
            nombre: "Mapas mentales",
            icono: "🧠",
            descripcion: "Relaciona fechas, personajes, acontecimientos y conceptos."
        },
        {
            nombre: "Flashcards",
            icono: "🃏",
            descripcion: "Utiliza tarjetas para recordar fechas, personajes y acontecimientos importantes."
        }
    ],

    idiomas: [
        {
            nombre: "Repetición espaciada",
            icono: "🔄",
            descripcion: "Repasa vocabulario nuevo en intervalos cada vez mayores."
        },
        {
            nombre: "Flashcards",
            icono: "🃏",
            descripcion: "Crea tarjetas con palabras, traducciones y ejemplos."
        },
        {
            nombre: "Práctica activa",
            icono: "🗣️",
            descripcion: "Utiliza las palabras y estructuras nuevas en frases propias."
        }
    ],

    lectura: [
        {
            nombre: "SQ3R",
            icono: "📖",
            descripcion: "Explora, pregunta, lee, recuerda y revisa el contenido."
        },
        {
            nombre: "Método Feynman",
            icono: "💡",
            descripcion: "Explica lo leído con palabras sencillas para comprobar tu comprensión."
        },
        {
            nombre: "Subrayado inteligente",
            icono: "✏️",
            descripcion: "Identifica únicamente las ideas realmente importantes."
        }
    ],

    general: [
        {
            nombre: "Pomodoro",
            icono: "🍅",
            descripcion: "Estudia durante periodos de concentración y realiza descansos cortos."
        },
        {
            nombre: "Repetición espaciada",
            icono: "🔄",
            descripcion: "Distribuye los repasos a lo largo del tiempo."
        },
        {
            nombre: "Método Feynman",
            icono: "💡",
            descripcion: "Explica el tema con palabras sencillas para comprobar que realmente lo entiendes."
        }
    ]
};


// ==========================================
// RECOMENDACIÓN SEGÚN LA MATERIA
// ==========================================

function obtenerCategoria(materia) {

    materia = materia.toLowerCase();

    if (
        materia.includes("mate") ||
        materia.includes("álgebra") ||
        materia.includes("algebra") ||
        materia.includes("cálculo") ||
        materia.includes("calculo") ||
        materia.includes("física") ||
        materia.includes("fisica")
    ) {
        return "matematicas";
    }

    if (
        materia.includes("química") ||
        materia.includes("quimica") ||
        materia.includes("biología") ||
        materia.includes("biologia") ||
        materia.includes("ciencia")
    ) {
        return "ciencias";
    }

    if (
        materia.includes("historia") ||
        materia.includes("geografía") ||
        materia.includes("geografia") ||
        materia.includes("social")
    ) {
        return "historia";
    }

    if (
        materia.includes("inglés") ||
        materia.includes("ingles") ||
        materia.includes("idioma") ||
        materia.includes("francés") ||
        materia.includes("frances")
    ) {
        return "idiomas";
    }

    if (
        materia.includes("literatura") ||
        materia.includes("lengua") ||
        materia.includes("lectura") ||
        materia.includes("comunicación") ||
        materia.includes("comunicacion")
    ) {
        return "lectura";
    }

    return "general";
}


// ==========================================
// CREAR PLAN
// ==========================================

function crearPlan() {

    const materiaInput = document.getElementById("materia");
    const tiempoInput = document.getElementById("tiempo");
    const objetivoInput = document.getElementById("objetivo");

    if (!materiaInput || !tiempoInput || !objetivoInput) {
        console.log("Faltan campos del formulario.");
        return;
    }

    const materia = materiaInput.value.trim();
    const tiempo = Number(tiempoInput.value);
    const objetivo = objetivoInput.value.trim();

    if (!materia || !tiempo || !objetivo) {
        alert("Completa todos los campos para crear tu plan de estudio.");
        return;
    }

    const categoria = obtenerCategoria(materia);
    const listaTecnicas = tecnicas[categoria];

    let cantidadTecnicas = 1;

    if (tiempo >= 60) {
        cantidadTecnicas = 2;
    }

    if (tiempo >= 120) {
        cantidadTecnicas = 3;
    }

    const tecnicasElegidas = listaTecnicas.slice(0, cantidadTecnicas);

    mostrarResultado(
        materia,
        tiempo,
        objetivo,
        tecnicasElegidas
    );
}


// ==========================================
// MOSTRAR RESULTADO
// ==========================================

function mostrarResultado(
    materia,
    tiempo,
    objetivo,
    tecnicasElegidas
) {

    const resultado = document.getElementById("resultado");

    if (!resultado) {
        return;
    }

    let tiempoEstudio = tiempo;

    let bloques = [];

    if (tiempo <= 30) {

        bloques = [
            `🎯 ${tiempo} minutos de concentración total`,
            "📝 5 minutos para recordar lo aprendido",
            "🔄 5 minutos de repaso"
        ];

    } else if (tiempo <= 60) {

        bloques = [
            "🍅 25 minutos de estudio",
            "☕ 5 minutos de descanso",
            "🍅 25 minutos de estudio",
            "📝 5 minutos de repaso"
        ];

    } else {

        const sesiones = Math.floor(tiempo / 30);

        for (let i = 0; i < sesiones; i++) {

            if (i % 2 === 0) {
                bloques.push("🍅 25 minutos de concentración");
            } else {
                bloques.push("☕ 5 minutos de descanso");
            }

        }

        bloques.push("📝 10 minutos de repaso final");
    }


    let tecnicasHTML = "";

    tecnicasElegidas.forEach(tecnica => {

        tecnicasHTML += `
            <div style="
                background:white;
                padding:18px;
                margin:12px 0;
                border-radius:14px;
                border:1px solid #e3e5ef;
            ">
                <h3>${tecnica.icono} ${tecnica.nombre}</h3>
                <p>${tecnica.descripcion}</p>
            </div>
        `;
    });


    resultado.innerHTML = `

        <h2>🎯 Tu plan personalizado</h2>

        <p>
            <strong>Materia:</strong> ${materia}
        </p>

        <p>
            <strong>Tiempo disponible:</strong> ${tiempo} minutos
        </p>

        <p>
            <strong>Objetivo:</strong> ${objetivo}
        </p>

        <hr style="margin:25px 0;border:0;border-top:1px solid #ddd;">

        <h3>🧠 Técnicas recomendadas para ti</h3>

        ${tecnicasHTML}

        <h3 style="margin-top:30px;">
            ⏱️ Cómo organizar tu tiempo
        </h3>

        <div style="margin-top:15px;">
            ${bloques.map(bloque => `
                <p style="
                    padding:8px 0;
                    margin:0;
                ">
                    ${bloque}
                </p>
            `).join("")}
        </div>

        <div style="
            margin-top:25px;
            padding:20px;
            background:#f0efff;
            border-radius:14px;
        ">
            <strong>💡 Consejo de Estudia+</strong>
            <p style="margin-top:8px;">
                No intentes memorizar todo de una sola vez.
                Primero comprende el tema, después practica
                y finalmente repasa.
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
// CONECTAR BOTÓN
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const boton = document.querySelector(".boton-generar");

    if (boton) {

        boton.addEventListener("click", function (evento) {

            evento.preventDefault();

            crearPlan();

        });

    }

});
