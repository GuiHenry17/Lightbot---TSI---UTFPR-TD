// i18n resource table used by i18next. Keys match `data-i18n` / `data-i18n-title` attributes in `index.html`.
export const LIGHTBOT_TRANSLATIONS_PT_BR = {
  "controls": {
    "run": "Executar",
    "stop": "Parar"
  },
  "welcomeScreen": {
    "start": "Iniciar Jogo",
    "toggleAudio": "Alternar Áudio",
    "help": "Ajuda",
    "achievements": "Conquistas",
    "language": "Idioma"
  },
  "levelSelectScreen": {
    "title": "Selecionar fase",
    "mainMenu": "Menu Principal"
  },
  "achievementsScreen": {
    "title": "Conquistas",
    "mainMenu": "Menu Principal"
  },
  "achievements": {
    "completeLevel": {
      "title": "Finalize Ele",
      "message": "Complete uma fase."
    },
    "earnGoldMedal": {
      "title": "Filhinho da Mamãe",
      "message": "Ganhe uma medalha de ouro."
    },
    "completeLevels5": {
      "title": "Ambicioso",
      "message": "Complete 5 fases."
    },
    "completeLevels10": {
      "title": "Dedicado",
      "message": "Complete 10 fases."
    },
    "completeLevels15": {
      "title": "Viciado",
      "message": "Complete 15 fases."
    },
    "completeLevelsBronze": {
      "title": "Nerd",
      "message": "Ganhe medalhas de bronze em todas as fases."
    },
    "completeLevelsSilver": {
      "title": "Elite",
      "message": "Ganhe medalhas de prata em todas as fases."
    },
    "completeLevelsGold": {
      "title": "H4X0R",
      "message": "Ganhe medalhas de ouro em todas as fases."
    }
  },
  "helpScreen": {
    "mainMenu": "Menu Principal",
    "goal": {
      "title": "Objetivo do jogo",
      "content": "Para concluir o jogo, você deve orientar o robô a acender todos os blocos de luz em uma determinada fase. No entanto, sua única forma de interagir com o robô é combinando instruções em um programa que ele possa executar."
    },
    "howTo": {
      "title": "Como jogar",
      "content": "Você pode criar um programa arrastando instruções da lista de comandos e soltando-as no quadro do programa. As instruções serão adicionadas automaticamente ao final do bloco selecionado.\nExecute seu programa clicando no botão Executar. Se não estiver satisfeito com o programa atual, você pode interromper a execução a qualquer momento clicando no botão Parar. Isso fará com que o robô retorne à sua posição inicial."
    },
    "objects": {
      "title": "Objetos do jogo",
      "content": "Uma fase é composta por blocos cinzas que possuem diferentes alturas. Blocos de luz especiais estão espalhados pela fase. Esses blocos podem estar azuis, indicando que estão apagados, ou amarelos, indicando que estão acesos. Se em qualquer momento todos os blocos de luz da fase estiverem acesos, você terá completado a fase."
    },
    "walkForward": {
      "title": "Instrução: avançar",
      "content": "Ao avançar, o robô dará um passo na direção em que estiver virado. Esse movimento só será realizado se o espaço à frente estiver na mesma altura do bloco onde ele se encontra. Caso contrário, o movimento não será executado."
    },
    "turnRight": {
      "title": "Instrução: Virar 90 graus para a direita",
      "content": "Ao virar 90 graus para a direita, o robô permanecerá no mesmo lugar e girará 90 graus (um quarto de volta) para a direita (sentido horário)."
    },
    "turnLeft": {
      "title": "Instrução: Virar 90 graus para a esquerda",
      "content": "Ao virar 90 graus para a esquerda, o robô permanecerá no mesmo lugar e girará 90 graus (um quarto de volta) para a esquerda (sentido anti-horário)."
    },
    "jump": {
      "title": "Instrução: Pular",
      "content": "Pular é uma combinação de mover-se para frente e mudar de altura. O deslocamento ocorre na direção em que o robô está virado. Um pulo para cima só dá certo se o bloco de destino for exatamente um nível mais alto que o bloco inicial. Se a diferença de altura for maior que um, o pulo falha e nenhum movimento é feito. Ao pular para baixo, não há limite de altura para a queda. A única condição é que a diferença de altura seja de pelo menos um nível."
    },
    "light": {
      "title": "Instrução: Luz",
      "content": "A instrução de luz é usada para acender ou apagar blocos luminosos. Se o robô estiver sobre um bloco apagado quando a instrução for executada, o bloco será aceso. Porém, se o robô já estiver sobre um bloco aceso, ele será apagado. Ao executar essa ação sobre um bloco normal, nada acontece."
    },
    "repeat": {
      "title": "Instrução: Repetir",
      "content": "A instrução de repetição é um comando especial usado para executar determinadas instruções várias vezes. Ela possui uma área própria onde você pode soltar instruções da lista. Também conta com um contador para definir quantas vezes o bloco interno será repetido. É possível até mesmo aninhar instruções de repetição dentro de outras, o que é fundamental para criar programas bem compactos."
    },
    "medals": {
      "title": "Medalhas",
      "content": "As medalhas são concedidas ao completar fases utilizando uma quantidade bem reduzida de instruções. Às vezes, esses programas enxutos fazem o robô executar muitas instruções desnecessárias, o que é ineficiente e consome tempo. Tenha em mente que, na ciência da computação, o melhor programa não é necessariamente o que possui o menor número de linhas de instrução, mas sim aquele que faz o robô executar a menor quantidade de passos no total."
    },
    "video": {
      "play": "reproduzir"
    }
  },
  "gameScreen": {
    "back": "Voltar",
    "toggleAudio": "Alternar Áudio",
    "clear": "Limpar",
    "run": "Executar",
    "speed": "Velocidade:"
  },
  "instructions": {
    "title": "Instruções",
    "walk": "Avançar",
    "turnRight": "Virar 90 graus para a direita",
    "turnLeft": "Virar 90 graus para a esquerda",
    "jump": "Pular",
    "light": "Luz",
    "repeat": {
      "label": "Repetir",
      "times": "vezes"
    },
    "placeholder": "Solte suas instruções aqui"
  },
  "program": {
    "title": "Programa",
    "clearAll": "Limpar tudo"
  },
  "dialogs": {
    "levelComplete": {
      "title": "Fase concluída",
      "message": "Parabéns! Você concluiu esta fase usando {{count}} instruções!",
      "bronzeMedalHint": "Complete a fase com {{count}} instruções ou menos para receber uma medalha de bronze.",
      "silverMedalHint": "Complete a fase com {{count}} instruções ou menos para receber uma medalha de prata.",
      "goldMedalHint": "Complete a fase com {{count}} instruções ou menos para receber uma medalha de ouro."
    },
    "achievement": {
      "title": "Conquista desbloqueada!"
    }
  }
};