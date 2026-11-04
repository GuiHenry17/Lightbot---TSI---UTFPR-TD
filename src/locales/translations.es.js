// i18n resource table used by i18next. Keys match `data-i18n` / `data-i18n-title` attributes in `index.html`.
export const LIGHTBOT_TRANSLATIONS_ES = {
  "controls": {
    "run": "Ejecutar",
    "stop": "Detener"
  },
  "welcomeScreen": {
    "start": "Iniciar juego",
    "toggleAudio": "Activar/desactivar audio",
    "help": "Ayuda",
    "achievements": "Logros",
    "language": "Idioma"
  },
  "levelSelectScreen": {
    "title": "Seleccionar nivel",
    "mainMenu": "Menú principal"
  },
  "achievementsScreen": {
    "title": "Logros",
    "mainMenu": "Menú principal"
  },
  "achievements": {
    "completeLevel": {
      "title": "Acaba con él",
      "message": "Completa un nivel."
    },
    "earnGoldMedal": {
      "title": "Niño de mamá",
      "message": "Gana una medalla de oro."
    },
    "completeLevels5": {
      "title": "Ambicioso",
      "message": "Completa 5 niveles."
    },
    "completeLevels10": {
      "title": "Dedicado",
      "message": "Completa 10 niveles."
    },
    "completeLevels15": {
      "title": "Adicto",
      "message": "Completa 15 niveles."
    },
    "completeLevelsBronze": {
      "title": "Nerd",
      "message": "Gana medallas de bronce en todos los niveles."
    },
    "completeLevelsSilver": {
      "title": "Élite",
      "message": "Gana medallas de plata en todos los niveles."
    },
    "completeLevelsGold": {
      "title": "H4X0R",
      "message": "Gana medallas de oro en todos los niveles."
    }
  },
  "helpScreen": {
    "mainMenu": "Menú principal",
    "goal": {
      "title": "Objetivo del juego",
      "content": "Para completar el juego, tienes que indicarle al robot cómo encender todas las casillas de luz de un nivel. Sin embargo, la única forma de interactuar con el robot es combinando instrucciones en un programa que el robot pueda ejecutar."
    },
    "howTo": {
      "title": "Cómo jugar",
      "content": "Puedes crear un programa arrastrando instrucciones desde la lista de instrucciones y soltándolas en el marco del programa. Las instrucciones se añadirán automáticamente al final del bloque resaltado.\nEjecuta tu programa haciendo clic en el botón Ejecutar. Si no estás satisfecho con tu programa actual, puedes interrumpir la ejecución en cualquier momento haciendo clic en el botón Detener. Esto devolverá al robot a su posición inicial."
    },
    "objects": {
      "title": "Objetos del juego",
      "content": "Un nivel está formado por casillas grises que tienen una altura determinada. Por el nivel hay repartidas casillas de luz especiales. Estas casillas pueden ser azules, lo que significa que están apagadas, o amarillas, lo que significa que están encendidas. Si en algún momento todas las casillas de luz de un nivel están encendidas, habrás completado ese nivel."
    },
    "walkForward": {
      "title": "Instrucción: avanzar",
      "content": "Al avanzar, el robot se moverá una casilla en la dirección hacia la que esté mirando. Este movimiento solo se realizará si la casilla de destino tiene la misma altura que la casilla en la que se encuentra. En cualquier otro caso, el movimiento no se realizará."
    },
    "turnRight": {
      "title": "Instrucción: girar 90 grados a la derecha",
      "content": "Al girar 90 grados a la derecha, el robot se quedará en su lugar y girará 90 grados (un cuarto de vuelta) hacia la derecha (en el sentido de las agujas del reloj)."
    },
    "turnLeft": {
      "title": "Instrucción: girar 90 grados a la izquierda",
      "content": "Al girar 90 grados a la izquierda, el robot se quedará en su lugar y girará 90 grados (un cuarto de vuelta) hacia la izquierda (en sentido contrario a las agujas del reloj)."
    },
    "jump": {
      "title": "Instrucción: saltar",
      "content": "Saltar es una combinación de avanzar y cambiar de altura. El movimiento se realiza en la dirección hacia la que mira el robot. Un salto hacia arriba solo tiene éxito si la casilla de destino es exactamente un nivel más alta que la casilla de partida. Si la diferencia de altura es mayor que uno, el salto falla y no se realiza ningún movimiento. Al saltar hacia abajo, no hay límite de altura. La única condición es que la diferencia de altura sea de al menos uno."
    },
    "light": {
      "title": "Instrucción: luz",
      "content": "La instrucción de luz sirve para encender o apagar las casillas de luz. Si el robot está sobre una casilla de luz apagada cuando se ejecuta la instrucción, la casilla se encenderá. Sin embargo, si el robot está sobre una casilla ya encendida, esta se apagará. Si el robot está sobre una casilla normal, no ocurre nada."
    },
    "repeat": {
      "title": "Instrucción: repetir",
      "content": "La instrucción repetir es una instrucción especial que sirve para repetir algunas instrucciones un número determinado de veces. Tiene un marco propio donde puedes soltar instrucciones de la lista. También tiene un contador para definir cuántas veces se repetirán las instrucciones que contiene. Incluso es posible colocar una instrucción repetir dentro de otra, algo esencial para crear programas muy cortos."
    },
    "medals": {
      "title": "Medallas",
      "content": "Las medallas se otorgan por completar niveles usando muy pocas instrucciones. A veces, estos programas tan cortos hacen que el robot ejecute muchas instrucciones inútiles, lo cual es muy ineficiente y lleva mucho tiempo. Ten en cuenta que, en informática, el mejor programa no es el que contiene menos instrucciones, sino el que hace que el robot ejecute menos instrucciones."
    },
    "video": {
      "play": "reproducir"
    }
  },
  "gameScreen": {
    "back": "Volver",
    "toggleAudio": "Activar/desactivar audio",
    "clear": "Borrar",
    "run": "Ejecutar",
    "speed": "Velocidad:"
  },
  "instructions": {
    "title": "Instrucciones",
    "walk": "Avanzar",
    "turnRight": "Girar 90 grados a la derecha",
    "turnLeft": "Girar 90 grados a la izquierda",
    "jump": "Saltar",
    "light": "Luz",
    "repeat": {
      "label": "Repetir",
      "times": "veces"
    },
    "placeholder": "Suelta tus instrucciones aquí"
  },
  "program": {
    "title": "Programa",
    "clearAll": "Borrar todo"
  },
  "dialogs": {
    "levelComplete": {
      "title": "Nivel completado",
      "message": "¡Felicidades! ¡Has completado este nivel usando {{count}} instrucciones!",
      "bronzeMedalHint": "Completa el nivel con {{count}} instrucciones o menos para recibir una medalla de bronce.",
      "silverMedalHint": "Completa el nivel con {{count}} instrucciones o menos para recibir una medalla de plata.",
      "goldMedalHint": "Completa el nivel con {{count}} instrucciones o menos para recibir una medalla de oro."
    },
    "achievement": {
      "title": "¡Logro desbloqueado!"
    }
  }
};
