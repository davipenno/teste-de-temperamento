import React, { useState } from "react";

// Use a self-contained Tailwind setup for simplicity within the immersive
const head = document.getElementsByTagName("head")[0];
const script = document.createElement("script");
script.src = "https://cdn.tailwindcss.com";
head.appendChild(script);

// Define the complete list of 232 questions from the PDF
const questions = [
  "Eu reajo rapidamente quando me deparo com uma ideia, uma pessoa ou uma situação.",
  "Eu reajo lentamente quando me deparo com uma ideia, uma pessoa ou uma situação.",
  "Eu reajo fortemente (em intensidade) quando me deparo com uma ideia, uma pessoa ou uma situação.",
  "Eu não reajo intensamente quando me deparo com uma ideia, uma pessoa ou uma situação.",
  "Tenho vontade de agir imediatamente diante de uma ideia, situação ou com uma pessoa.",
  "Quando me deparo com uma ideia, uma pessoa ou uma situação, fico calmo e espero para reagir.",
  "Eu não reajo inicialmente, mas minhas reações aumentam constantemente em intensidade.",
  "Impressões permanecem por um longo tempo.",
  "Impressões permanecem por um curto tempo.",
  "Pessoa que aceita.",
  "Aventureiro.",
  "Pessoa que se preocupa com detalhes insignificantes.",
  "Introspectivo.",
  "Facilmente provocado.",
  "Se provocado, irá retaliar.",
  "Sério.",
  "Aprecia elogios.",
  "Inclinado a elogiar.",
  "Cuidadoso.",
  "Reservado.",
  "Introvertido.",
  "Olho para detalhes.",
  "Distraído.",
  "Propenso a reflexão.",
  "Determinado.",
  "Confiável.",
  "Relutante.",
  "Desapegado.",
  "Companhia amável.",
  "Gosta de pessoas.",
  "Duvidoso.",
  "Habilidoso para interagir com outras pessoas.",
  "Incomodado com a desordem.",
  "Abomina injustiça.",
  "Justo.",
  "Facilmente irritado.",
  "Entusiasmado.",
  "Extrovertido.",
  "Sozinho.",
  "Cético.",
  "Centro das atenções.",
  "Vingativo.",
  "Exagera facilmente.",
  "Líder auto proclamado.",
  "Líder que serve aos demais.",
  "Carismático.",
  "Invejoso.",
  "Ciumento.",
  "Feliz.",
  "Otimista.",
  "Propenso a doença.",
  "Facilmente desencorajado.",
  "Cabeça dura.",
  "Racional.",
  "Diplomático.",
  "Tende a deixar as coisas escaparem.",
  "Desconfiado.",
  "Pacífico.",
  "Criativo.",
  "Toma a responsabilidade.",
  "Paciente.",
  "Questiona-se sobre fatos passados.",
  "Ama a paz e o silêncio.",
  "Obediente.",
  "Odeia conflito.",
  "Ama debater.",
  "Argumentador.",
  "Sentimental.",
  "Agrada ao público.",
  "Demora para se adaptar.",
  "Faz amigos rapidamente.",
  "Reticente.",
  "Lógico.",
  "Ponderador.",
  "Ama o silêncio.",
  "Fashion.",
  "Gosta de festas.",
  "Prefere ficar sozinho.",
  "Artístico.",
  "Poético.",
  "Pensador.",
  "Falante.",
  "Abomina sentimentalidade.",
  "Não é empático.",
  "Orientado por regras.",
  "Perseverante.",
  "Paquerador.",
  "Reservado.",
  "Facilmente escorrega na fofoca.",
  "Sempre certo.",
  "Aparência é importante.",
  "Pessoa de ideias.",
  "Não consegue seguir um plano ou ideia até o fim.",
  "Variedade no amor.",
  "Afetuoso.",
  "Não demonstra afeto.",
  "Indiferente.",
  "Hesitante.",
  "Difícil de agradar.",
  "Sóbrio e prático.",
  "Temperamental.",
  "Composto.",
  "Deliberado.",
  "Brincalhão.",
  "Obstinado.",
  "Pessimista.",
  "Tolerante.",
  "Corajoso.",
  "Tímido.",
  "Perdoar e esquecer.",
  "Vamos esperar para ver.",
  "Cabeça quente.",
  "Prefere seguir os outros.",
  "Imprudente.",
  "Intenso.",
  "Irritadiço.",
  "Franco.",
  "Impaciente.",
  "Equilibrado.",
  "Volúvel.",
  "Copo meio cheio.",
  "Copo meio vazio.",
  "Fanfarrão.",
  "Aproveite a oportunidade tão logo ela apareça.",
  "Descontrolado.",
  "Educado.",
  "Facilmente provocada para o debate.",
  "Paz interior.",
  "De boa natureza.",
  "Interruptivo.",
  "Conectada com os sentimentos de outras pessoas.",
  "Força de vontade.",
  "Contrário.",
  "Destemido.",
  "Ambicioso.",
  "Animado.",
  "Auto controle.",
  "Tende a tomar ação.",
  "Confortável em ser parte de um grupo.",
  "Prefere tomar a liderança do grupo.",
  "Não gosta de grupos.",
  "Reúne pessoas.",
  "Rápido e decidido.",
  "Robusto.",
  "Cordial.",
  "Gosta de mudanças.",
  "Prefere a rotina.",
  "Aberta e sociável.",
  "Curioso.",
  "Crítica.",
  "Foca em problemas.",
  "Impulsivo.",
  "Metódica.",
  "Corajoso.",
  "Toma iniciativa.",
  "Insistente no seu próprio plano.",
  "Confiante em si próprio.",
  "Conta consigo mesmo.",
  "Sensível.",
  "Facilmente magoado.",
  "Tendência a realizar superficialmente as coisas.",
  "Adaptável.",
  "Recluso.",
  "Consciente de si própria.",
  "Excessivamente cautelosa.",
  "Tende ao desencorajamento.",
  "Exclusivo.",
  "Privado.",
  "Mediador.",
  "Indeciso.",
  "Constante.",
  "Competitivo.",
  "Se sacrifica.",
  "Respeitoso.",
  "Adaptável.",
  "Analítico.",
  "Persistente.",
  "Brincalhão.",
  "Ri facilmente.",
  "Espontâneo.",
  "Hesitante.",
  "Programada.",
  "Sincero.",
  "Ordenado.",
  "Gosta de ajudar.",
  "Fiel.",
  "Idealístico.",
  "Inofensivo.",
  "Humor sagaz.",
  "Profundo.",
  "Mobilizador.",
  "Motivador.",
  "Atencioso com os outros.",
  "Mandão.",
  "Bem comportada.",
  "Voluntarioso.",
  "Perfeccionista.",
  "Mantenedor da paz.",
  "Não-passional.",
  "Controlador.",
  "Calma sob tensão.",
  "Espiritual.",
  "Ama agitação.",
  "Pensativo.",
  "Procrastinador.",
  "Dócil.",
  "Cabeça dura.",
  "Requer descanso.",
  "Exige reconhecimento.",
  "Precisa de encorajamento.",
  "Precisa de motivação.",
  "Precisa de amigos.",
  "Focado e intenso.",
  "Precisa de diversão.",
  "Gosta de estrutura, procedimentos.",
  "Precisa de inspiração.",
  "Não confrontativo.",
  "Confrontativo.",
  "Pragmático.",
  "Vivaz.",
  "Desconfiado com novas situações.",
  "Focado em si.",
  "Gosta de comprar e comer fora.",
  "Motivado.",
  "Irá subjugar os seus próprios interesses para agradar outros.",
  "Orientado por procedimentos.",
  "Orientado por objetivos.",
  "Confortável no presente momento.",
  "Orientado para o futuro.",
  "Uma borboleta social.",
  "Piadista.",
  "Caseiro.",
];

// Define the scoring key from the PDF
const scoreKey = {
  Colérico: [
    1, 3, 5, 8, 11, 14, 15, 25, 30, 36, 37, 38, 42, 43, 44, 50, 53, 54, 56, 60,
    66, 67, 73, 81, 83, 84, 86, 90, 92, 96, 105, 108, 112, 115, 116, 117, 118,
    121, 123, 124, 125, 127, 130, 132, 133, 134, 135, 138, 140, 143, 144, 154,
    155, 156, 157, 158, 167, 168, 172, 176, 177, 183, 191, 192, 194, 196, 200,
    207, 209, 213, 218, 219, 222, 224, 227,
  ],
  Sanguíneo: [
    1, 3, 5, 9, 10, 11, 14, 17, 18, 23, 26, 29, 30, 32, 36, 37, 38, 41, 43, 46,
    47, 48, 49, 50, 56, 59, 68, 69, 71, 76, 77, 79, 80, 82, 87, 89, 91, 92, 93,
    94, 95, 104, 107, 110, 112, 113, 114, 116, 117, 118, 120, 121, 129, 131,
    136, 138, 139, 142, 144, 145, 146, 148, 149, 152, 157, 159, 160, 161, 175,
    178, 179, 180, 203, 206, 212, 214, 220, 223, 226, 228, 230, 231,
  ],
  Melancólico: [
    2, 7, 8, 12, 13, 16, 19, 20, 21, 22, 24, 27, 28, 31, 33, 34, 39, 40, 42, 48,
    51, 52, 54, 57, 62, 63, 70, 72, 73, 74, 75, 78, 79, 80, 81, 88, 98, 99, 101,
    106, 109, 111, 122, 131, 133, 141, 150, 151, 153, 159, 163, 165, 166, 170,
    173, 176, 181, 182, 184, 186, 187, 190, 193, 197, 202, 204, 208, 210, 215,
    216, 221, 222, 227,
  ],
  Fleumático: [
    2, 4, 6, 9, 10, 21, 26, 28, 30, 31, 35, 39, 45, 52, 58, 61, 63, 64, 65, 68,
    70, 72, 75, 78, 85, 88, 97, 98, 100, 102, 103, 106, 107, 110, 111, 113, 119,
    122, 126, 128, 129, 131, 137, 139, 147, 153, 160, 162, 166, 169, 171, 173,
    174, 175, 185, 186, 188, 189, 195, 198, 199, 201, 204, 205, 206, 210, 211,
    215, 217, 219, 221, 225, 226, 228, 232,
  ],
};

// Define the descriptions for each temperament from the PDF
const descriptions = {
  Colérico:
    "Pessoa rápida para reagir, reação intensa de longa duração; líder, primeira a iniciar uma ação; lógica; pragmática; pessoa de ação; franca; leva os planos a frente; não demonstra emoções facilmente, exceto raiva; não é dada a ansiedade; impetuosa; deseja expressar-se; ama o debate; pode se tornar defensiva e orgulhosa; perseverante; confiante; independente; não segue os demais; motivada a atingir objetivos; privada; inclinada a retaliação; extrovertida; assume a responsabilidade; argumentativa; abomina sentimentalidade; lógica; orientada por objetivos; decidida, intensa; pavio curto; otimista; interruptiva; precisa de reconhecimento; quer estar certa; de ação; cabeça dura; competitiva; procura pelo positivo; impaciente; produtiva; toma decisões baseada em princípios/ideias.",
  Melancólico:
    "Pessoa devagar para reagir, com intensa reação crescendo ao longo do tempo e com longa duração; pensativa; espiritual; profunda; poética; introvertida; excessivamente cuidadosa; perfeccionista; pensadora; crítica; não prioriza bem; tende ao desencorajamento e pena de si própria; se preocupa com possíveis infortúnios; pode ser hipocondríaca; facilmente magoada; devagar e às vezes indecisa; pessimista; temperamental; orientada por objetivos; desconectada com o ambiente; poucos amigos; exclusiva; gosta de estar só; se questiona; introspectiva; guarda ressentimentos; abomina injustiça; é motivada por problemas; olha para o lado negativo; idealista; se sacrifica; sensível; toma decisões baseada em princípios/ideias.",
  Sanguíneo:
    "Pessoa rápida para reagir; reações de curta duração; orientada por relacionamentos; não guarda rancor; alma da festa; divertida; adora estar com pessoas; otimista; gosta de grupos; falante; popular; dócil; segue os demais; raramente envergonhada; ama a variedade; sintonizada com o ambiente; gosta de roupas; pode ser exagerada; adora fazer compras e comer fora; cheia de energia; rápida para perdoar; abraça mudanças; franca; falante; sociável; menos interessada em seguir procedimentos; pode ser superficial; cordial; faz amigos com facilidade; segura; despreocupada; ansiosa; gosta de falar na frente de grupos; entusiasta; tende a vaidade; artística e criativa; espontânea; às vezes esquecida; orientada pelo processo; incansável; toma decisões baseada em relacionamentos/sentimentos; precisa de ajuda para perseverar; borboleta social.",
  Fleumático:
    "Pessoa devagar para reagir; não reage intensamente; reações de curta duração; quieta; diplomática; pacífica; toma decisões baseada em relacionamentos/sentimentos; sensível para os outros; dependente; procedimental; não-passional; de humor sagaz; segue os demais; introvertida; calma sob pressão; obediente; gosta de estrutura; precisa de motivação; odeia conflitos; gosta de paz e silêncio; apreciada por quase todos; pacificadora; reservada; caseira; constante; educada; prefere a rotina; orientada pelo processo; paciente; tolerante, não facilmente provocada, mas pode se sentir facilmente magoada; bem comportada; respeitosa; prefere agradar os outros do que a si próprio; ordenada; pode ser lerda ou indiferente; desmotivada; discreta.",
};

function App() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(false));
  const [results, setResults] = useState(null);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Handle checking/unchecking a checkbox
  const handleAnswerChange = (index) => {
    const newAnswers = [...answers];
    newAnswers[index] = !newAnswers[index];
    setAnswers(newAnswers);
  };

  // Calculate the final scores based on the score key
  const calculateResults = () => {
    const scores = { Colérico: 0, Sanguíneo: 0, Melancólico: 0, Fleumático: 0 };
    Object.keys(scoreKey).forEach((temperament) => {
      scoreKey[temperament].forEach((questionNumber) => {
        // questionNumber is 1-based, so we subtract 1 to get the 0-based index
        if (answers[questionNumber - 1]) {
          scores[temperament]++;
        }
      });
    });
    setResults(scores);
  };

  // Reset the quiz to its initial state
  const resetQuiz = () => {
    setAnswers(Array(questions.length).fill(false));
    setResults(null);
    setShowDisclaimer(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans text-gray-800">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-10 w-full max-w-2xl mx-auto border-4 border-indigo-400">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-6">
          Indicador de Temperamento
        </h1>
        {showDisclaimer ? (
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
              Instruções
            </h2>
            <p className="text-lg mb-6 text-left">
              Assinale os itens abaixo que descrevem as suas tendências
              habituais, o padrão de reação evidente desde a infância, em
              relação a cada uma das qualidades a seguir. Não selecione
              qualidades que você gostaria de ter ou que você é obrigado a ter
              no trabalho. Escolha aquelas qualidades que mais frequentemente se
              aplicam a você, que o seu cônjuge ou os seus melhores amigos
              diriam que você tem, as qualidades em relação as quais você mais
              frequentemente se aproxima nos momentos fáceis ou em relação as
              quais você recorre em momentos de estresse, e mesmo aquelas
              tendências menos positivas que você está tentando evitar.
            </p>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="mt-4 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              Começar o Teste
            </button>
          </div>
        ) : results ? (
          // Results page
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
              Seu Resultado
            </h2>
            <p className="text-lg mb-6">
              Sua pontuação revela a sua combinação de temperamentos. O
              temperamento com a maior pontuação é o seu primário, e o próximo
              mais alto é o seu secundário.
            </p>
            <div className="space-y-4">
              {Object.entries(results)
                .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
                .map(([temperament, score], index) => (
                  <div
                    key={temperament}
                    className={`p-4 rounded-lg text-left shadow-md ${
                      index === 0
                        ? "bg-indigo-100 border-l-4 border-indigo-500"
                        : index === 1
                        ? "bg-purple-100 border-l-4 border-purple-500"
                        : "bg-gray-50"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-indigo-600">
                      {temperament}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 mt-1">
                      Pontuação: {score}
                    </p>
                    {index < 2 && (
                      <p className="mt-2 text-sm text-gray-700">
                        **Descrição:** {descriptions[temperament]}
                      </p>
                    )}
                  </div>
                ))}
            </div>
            <button
              onClick={resetQuiz}
              className="mt-8 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              Fazer o Teste Novamente
            </button>
          </div>
        ) : (
          // Quiz page
          <div>
            <div className="mb-6 text-center">
              <p className="text-md sm:text-lg text-gray-600">
                {`Qualidades assinaladas: ${
                  answers.filter((a) => a).length
                } de ${questions.length}`}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      (answers.filter((a) => a).length / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-indigo-50 p-4 rounded-lg shadow-inner"
                >
                  <input
                    type="checkbox"
                    id={`question-${index}`}
                    checked={answers[index]}
                    onChange={() => handleAnswerChange(index)}
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded-md focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`question-${index}`}
                    className="text-md font-medium text-gray-700 cursor-pointer"
                  >
                    {`${index + 1}. ${question}`}
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={calculateResults}
              className="mt-8 w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              Ver Resultados
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
