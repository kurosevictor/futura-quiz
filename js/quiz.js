/* ============================================
   FUTURA QUALIFICAÇÃO PROFISSIONAL
   Quiz de Perfil Profissional
============================================ */

// ============================================
// DADOS: CURSOS E ÁREAS
// ============================================

const AREAS = {
  'Administrativa':                    ['Administração', 'Informática'],
  'Industrial e Técnica':              ['Solda', 'Elétrica Industrial', 'Elétrica Geral', 'TPM', 'Mecânica Industrial'],
  'Mecânica':                          ['Mecânica de Motos', 'Mecânica de Carros'],
  'Idiomas':                           ['Inglês', 'Espanhol'],
  'Saúde e Serviços Especializados':   ['Tanatopraxia'],
};

const COURSE_TEXTS = {
  'Administração':
    'Seu perfil combina com Administração porque você demonstra interesse em organização, rotina empresarial, atendimento e crescimento profissional. É uma boa escolha para quem quer entrar no mercado com uma base sólida e versátil.',
  'Informática':
    'Seu perfil combina com Informática porque você mostra interesse em tecnologia, computador e melhoria de currículo. É uma formação importante para praticamente qualquer área profissional hoje.',
  'Mecânica de Motos':
    'Seu perfil combina com Mecânica de Motos porque você tem interesse em aprendizado prático, ferramentas, manutenção e uma profissão técnica com aplicação direta no mercado.',
  'Mecânica de Carros':
    'Seu perfil combina com Mecânica de Carros porque você se identifica com motores, manutenção e atividades práticas. É uma área ideal para quem quer desenvolver uma habilidade técnica valorizada.',
  'Solda':
    'Seu perfil combina com Solda porque você demonstra interesse por trabalho prático, técnico e industrial. É uma área muito ligada à indústria, manutenção e produção.',
  'Elétrica Industrial':
    'Seu perfil combina com Elétrica Industrial porque você se identifica com indústria, máquinas, processos e manutenção técnica. É uma área estratégica para quem quer atuar em ambientes industriais.',
  'Elétrica Geral':
    'Seu perfil combina com Elétrica Geral porque você busca uma formação técnica prática, útil e com aplicação em diferentes tipos de serviço e manutenção.',
  'Inglês':
    'Seu perfil combina com Inglês porque você busca ampliar oportunidades, melhorar currículo e se comunicar melhor. O inglês pode abrir portas em empresas, atendimento, tecnologia e crescimento profissional.',
  'Espanhol':
    'Seu perfil combina com Espanhol porque você demonstra interesse em comunicação e novas oportunidades. É uma boa escolha para quem quer ampliar o currículo e se destacar em atendimento, comércio ou empresas.',
  'Tanatopraxia':
    'Seu perfil combina com Tanatopraxia porque você demonstra abertura para uma área séria, especializada e diferente da maioria. É uma formação para quem busca um caminho profissional específico e com responsabilidade.',
  'TPM':
    'Seu perfil combina com TPM porque você se identifica com indústria, organização, produtividade e melhoria de processos. Em uma cidade industrial como Jaraguá do Sul, entender manutenção produtiva total pode ser um diferencial importante.',
  'Mecânica Industrial':
    'Seu perfil combina com Mecânica Industrial porque você demonstra interesse por trabalho técnico, prático e voltado para indústria. É uma área com alta demanda em cidades industriais como Jaraguá do Sul, ideal para quem quer atuar com máquinas, manutenção e processos produtivos.',
};

// ============================================
// DADOS: PERGUNTAS
// ============================================

const QUESTIONS = [
  {
    text: 'Qual é seu principal objetivo hoje?',
    options: [
      { text: 'Conseguir o primeiro emprego',
        scores: { 'Administração': 2, 'Informática': 2, 'Inglês': 1 } },
      { text: 'Mudar de área profissional',
        scores: { 'Mecânica de Motos': 2, 'Mecânica de Carros': 2, 'Solda': 2, 'Elétrica Industrial': 1, 'Elétrica Geral': 1, 'Tanatopraxia': 2, 'Mecânica Industrial': 2 } },
      { text: 'Crescer dentro da empresa onde trabalho',
        scores: { 'TPM': 3, 'Administração': 1, 'Inglês': 2, 'Elétrica Industrial': 2, 'Mecânica Industrial': 1 } },
      { text: 'Aprender uma profissão prática',
        scores: { 'Mecânica de Motos': 3, 'Mecânica de Carros': 3, 'Solda': 3, 'Elétrica Geral': 2, 'Mecânica Industrial': 3 } },
      { text: 'Melhorar meu currículo',
        scores: { 'Informática': 3, 'Administração': 2, 'Inglês': 2, 'Espanhol': 2 } },
    ],
  },
  {
    text: 'Com qual tipo de atividade você mais se identifica?',
    options: [
      { text: 'Organização, atendimento e rotina administrativa',
        scores: { 'Administração': 4 } },
      { text: 'Computadores, sistemas e tecnologia',
        scores: { 'Informática': 4 } },
      { text: 'Motores, ferramentas e manutenção',
        scores: { 'Mecânica de Motos': 4, 'Mecânica de Carros': 3, 'Mecânica Industrial': 2 } },
      { text: 'Indústria, máquinas e processos',
        scores: { 'Solda': 2, 'Elétrica Industrial': 3, 'Elétrica Geral': 2, 'TPM': 3, 'Mecânica Industrial': 3 } },
      { text: 'Comunicação, idiomas e contato com pessoas',
        scores: { 'Inglês': 3, 'Espanhol': 3 } },
      { text: 'Uma área diferente, técnica e especializada',
        scores: { 'Tanatopraxia': 4 } },
    ],
  },
  {
    text: 'Onde você se imagina trabalhando?',
    options: [
      { text: 'Escritório, recepção ou setor administrativo',
        scores: { 'Administração': 4 } },
      { text: 'Computador, sistema ou ambiente digital',
        scores: { 'Informática': 4 } },
      { text: 'Oficina mecânica',
        scores: { 'Mecânica de Motos': 3, 'Mecânica de Carros': 4, 'Mecânica Industrial': 2 } },
      { text: 'Indústria ou chão de fábrica',
        scores: { 'Solda': 2, 'Elétrica Industrial': 3, 'Elétrica Geral': 2, 'TPM': 3, 'Mecânica Industrial': 3 } },
      { text: 'Atendimento, vendas ou contato com pessoas',
        scores: { 'Inglês': 2, 'Espanhol': 2, 'Administração': 2 } },
      { text: 'Área especializada com alta responsabilidade',
        scores: { 'Tanatopraxia': 4 } },
    ],
  },
  {
    text: 'Você prefere aprender algo mais:',
    options: [
      { text: 'Organizado e voltado para empresas',
        scores: { 'Administração': 4 } },
      { text: 'Ligado à tecnologia e computador',
        scores: { 'Informática': 4 } },
      { text: 'Manual, prático e com ferramentas',
        scores: { 'Mecânica de Motos': 2, 'Mecânica de Carros': 2, 'Solda': 3, 'Mecânica Industrial': 3 } },
      { text: 'Técnico, industrial e voltado para processos',
        scores: { 'TPM': 3, 'Elétrica Industrial': 3, 'Elétrica Geral': 2, 'Solda': 2, 'Mecânica Industrial': 3 } },
      { text: 'Voltado para comunicação e oportunidades maiores',
        scores: { 'Inglês': 3, 'Espanhol': 3 } },
      { text: 'Diferenciado, sério e especializado',
        scores: { 'Tanatopraxia': 4 } },
    ],
  },
  {
    text: 'Qual dessas frases combina mais com você?',
    options: [
      { text: 'Quero começar a trabalhar com mais preparo',
        scores: { 'Administração': 2, 'Informática': 2 } },
      { text: 'Quero melhorar meu currículo',
        scores: { 'Inglês': 2, 'Espanhol': 2, 'Informática': 2 } },
      { text: 'Quero aprender uma profissão prática',
        scores: { 'Mecânica de Motos': 3, 'Mecânica de Carros': 3, 'Solda': 3, 'Mecânica Industrial': 3 } },
      { text: 'Quero crescer em uma área técnica',
        scores: { 'Elétrica Industrial': 3, 'Elétrica Geral': 2, 'TPM': 3, 'Mecânica Industrial': 3 } },
      { text: 'Quero ter mais oportunidades no futuro',
        scores: { 'Administração': 2, 'Inglês': 3, 'Informática': 2 } },
      { text: 'Quero uma formação diferente da maioria',
        scores: { 'Tanatopraxia': 4 } },
    ],
  },
  {
    text: 'Qual tipo de curso mais chama sua atenção?',
    options: [
      { text: 'Administração e carreira profissional',
        scores: { 'Administração': 5 } },
      { text: 'Informática e tecnologia',
        scores: { 'Informática': 5 } },
      { text: 'Mecânica de motos ou carros',
        scores: { 'Mecânica de Motos': 3, 'Mecânica de Carros': 3 } },
      { text: 'Solda, elétrica ou manutenção industrial',
        scores: { 'Solda': 2, 'Elétrica Industrial': 2, 'Elétrica Geral': 2, 'TPM': 2, 'Mecânica Industrial': 2 } },
      { text: 'Inglês ou espanhol',
        scores: { 'Inglês': 3, 'Espanhol': 3 } },
      { text: 'Tanatopraxia ou área especializada',
        scores: { 'Tanatopraxia': 5 } },
    ],
  },
  {
    text: 'Você está procurando o curso para quem?',
    options: [
      { text: 'Para mim mesmo',
        scores: {} },
      { text: 'Para meu filho / minha filha',
        scores: { 'Administração': 1, 'Informática': 1, 'Inglês': 1, 'Mecânica de Motos': 1 } },
      { text: 'Para um familiar',
        scores: {} },
      { text: 'Ainda estou pesquisando',
        scores: { 'Administração': 1, 'Informática': 1, 'Inglês': 1 } },
    ],
  },
];

// ============================================
// ESTADO
// ============================================

const state = {
  current: 0,
  answers: [],          // índice da opção escolhida em cada pergunta
  scores: {},
  lead: {},
};

function initScores() {
  const allCourses = Object.values(AREAS).flat();
  allCourses.forEach(c => { state.scores[c] = 0; });
}

// ============================================
// LÓGICA DE PONTUAÇÃO
// ============================================

function applyScores(optionScores) {
  Object.entries(optionScores).forEach(([course, pts]) => {
    if (Object.prototype.hasOwnProperty.call(state.scores, course)) {
      state.scores[course] += pts;
    }
  });
}

function getAreaForCourse(course) {
  for (const [area, courses] of Object.entries(AREAS)) {
    if (courses.includes(course)) return area;
  }
  return '';
}

function calculateResult() {
  const allCourses = Object.values(AREAS).flat();
  const maxScore = Math.max(...allCourses.map(c => state.scores[c]));

  // Todos os cursos empatados no topo
  let tied = allCourses.filter(c => state.scores[c] === maxScore);

  if (tied.length === 1) return { course: tied[0], area: getAreaForCourse(tied[0]) };

  // DESEMPATE 1 — usar resposta da pergunta 6 (índice 5), que é a mais direta
  const q6idx = state.answers[5];
  if (q6idx !== undefined) {
    const q6scores = QUESTIONS[5].options[q6idx].scores;
    const tiedWithQ6 = tied.filter(c => q6scores[c]);
    if (tiedWithQ6.length === 1) {
      return { course: tiedWithQ6[0], area: getAreaForCourse(tiedWithQ6[0]) };
    }
    if (tiedWithQ6.length > 1) {
      tied = tiedWithQ6;
    }
  }

  // DESEMPATE 2 — usar respostas das perguntas 2 e 3 (índices 1 e 2)
  for (const qIdx of [1, 2]) {
    const aIdx = state.answers[qIdx];
    if (aIdx !== undefined) {
      const qscores = QUESTIONS[qIdx].options[aIdx].scores;
      const tiedWithQ = tied.filter(c => qscores[c]);
      if (tiedWithQ.length === 1) {
        return { course: tiedWithQ[0], area: getAreaForCourse(tiedWithQ[0]) };
      }
      if (tiedWithQ.length > 1) {
        tied = tiedWithQ;
      }
    }
  }

  // DESEMPATE 3 — regras fixas para pares sempre empatados
  const fixedOrder = [
    ['Mecânica de Motos', 'Mecânica de Carros'],
    ['Inglês', 'Espanhol'],
    ['Elétrica Industrial', 'Elétrica Geral'],
    ['Administração', 'Informática'],
  ];
  for (const [a, b] of fixedOrder) {
    if (tied.includes(a) && tied.includes(b)) {
      const winner = state.scores[a] >= state.scores[b] ? a : b;
      tied = tied.filter(c => c !== (winner === a ? b : a));
      if (tied.length === 1) break;
    }
  }

  const course = tied[0];
  return { course, area: getAreaForCourse(course) };
}

// ============================================
// NAVEGAÇÃO ENTRE TELAS
// ============================================

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ============================================
// PROGRESSO
// ============================================

function updateProgress(currentIdx) {
  const pct = (currentIdx / QUESTIONS.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent =
    (currentIdx + 1) + ' / ' + QUESTIONS.length;
}

// ============================================
// RENDERIZAR PERGUNTA
// ============================================

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function renderQuestion() {
  const q = QUESTIONS[state.current];
  updateProgress(state.current);

  const optionsHtml = q.options.map((opt, i) => `
    <button class="opt-btn" data-idx="${i}">
      <span class="opt-letter">${LETTERS[i]}</span>
      <span>${opt.text}</span>
    </button>
  `).join('');

  document.getElementById('question-container').innerHTML = `
    <div class="q-card">
      <div class="q-num">Pergunta ${state.current + 1} de ${QUESTIONS.length}</div>
      <div class="q-text">${q.text}</div>
      <div class="options">${optionsHtml}</div>
    </div>
  `;

  // Bind option clicks
  document.querySelectorAll('.opt-btn').forEach(btn => {
    btn.addEventListener('click', () => pickOption(parseInt(btn.dataset.idx, 10)));
  });
}

function pickOption(optIdx) {
  // Feedback visual
  document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
  document.querySelectorAll('.opt-btn')[optIdx].classList.add('selected');

  // Pontuar
  applyScores(QUESTIONS[state.current].options[optIdx].scores);
  state.answers.push(optIdx);

  // Próxima tela após pequeno delay
  setTimeout(() => {
    state.current++;
    if (state.current >= QUESTIONS.length) {
      showScreen('screen-lead');
    } else {
      renderQuestion();
    }
  }, 340);
}

// ============================================
// FORMULÁRIO DE LEAD
// ============================================

function maskPhone(raw) {
  let v = raw.replace(/\D/g, '').slice(0, 11);
  if (v.length > 7)      return `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
  if (v.length > 6)      return `(${v.slice(0,2)}) ${v.slice(2,7)}-`;
  if (v.length > 2)      return `(${v.slice(0,2)}) ${v.slice(2)}`;
  if (v.length > 0)      return `(${v}`;
  return v;
}

function setupLeadForm() {
  const phoneInput = document.getElementById('input-phone');
  phoneInput.addEventListener('input', e => {
    const caret = e.target.selectionStart;
    const oldLen = e.target.value.length;
    e.target.value = maskPhone(e.target.value);
    const diff = e.target.value.length - oldLen;
    e.target.setSelectionRange(caret + diff, caret + diff);
  });

  document.getElementById('lead-form').addEventListener('submit', e => {
    e.preventDefault();
    if (!validateLead()) return;

    state.lead = {
      name:  document.getElementById('input-name').value.trim(),
      phone: document.getElementById('input-phone').value.trim(),
      city:  document.getElementById('input-city').value.trim(),
    };

    // Mostra resultado imediatamente — envio ao Formspree em paralelo
    renderResult();
    showScreen('screen-result');

    const { course, area } = calculateResult();
    fetch('https://formspree.io/f/maqkadve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        nome:               state.lead.name,
        whatsapp:           state.lead.phone,
        cidade:             state.lead.city,
        curso_recomendado:  course,
        area_recomendada:   area,
      }),
    }).catch(() => {}); // falha silenciosa — não bloqueia o usuário
  });
}

function validateLead() {
  let ok = true;

  function check(inputId, errorId, condition) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (condition) {
      input.classList.remove('has-error');
      error.classList.remove('show');
    } else {
      input.classList.add('has-error');
      error.classList.add('show');
      ok = false;
    }
  }

  const name  = document.getElementById('input-name').value.trim();
  const phone = document.getElementById('input-phone').value.replace(/\D/g, '');
  const city  = document.getElementById('input-city').value.trim();

  check('input-name',  'error-name',  name.length >= 2);
  check('input-phone', 'error-phone', phone.length >= 10);
  check('input-city',  'error-city',  city.length >= 2);

  return ok;
}

// ============================================
// RENDERIZAR RESULTADO
// ============================================

function renderResult() {
  const { course, area } = calculateResult();
  const { name, phone, city } = state.lead;
  const firstName = name.split(' ')[0];
  const explanation = COURSE_TEXTS[course] || '';

  const waMsg = encodeURIComponent(
    `Olá, fiz o quiz da Futura. Meu nome é ${name}, sou de ${city}, e meu resultado foi ${course} na área ${area}. Quero saber mais e garantir meu desconto de 20%.`
  );
  const waUrl = `https://wa.me/554796595686?text=${waMsg}`;

  document.getElementById('result-content').innerHTML = `
    <div class="res-hero">
      <div class="res-hi">Olá, ${firstName}!</div>
      <div class="res-headline">Seu perfil foi analisado<br>com sucesso.</div>

      <div class="res-area-label">Área recomendada</div>
      <div class="res-area">${area}</div>

      <div class="res-course-pill">
        <span class="pill-tag">Curso</span>
        <span class="pill-course">${course}</span>
      </div>

      <div class="res-explanation">${explanation}</div>
    </div>

    <div class="res-offer">
      <div class="offer-label">Sua oferta exclusiva</div>
      <div class="offer-big"><sup>−</sup>20%</div>
      <div class="offer-body">de desconto em qualquer curso da Futura</div>
      <div class="offer-note">Válido ao entrar em contato pelo WhatsApp</div>
    </div>

    <div class="res-cta">
      <div class="cta-title">Pronto para dar o próximo passo?</div>
      <div class="cta-text">
        Fale com a equipe da Futura agora, garanta seu desconto de 20% e
        descubra como começar sua formação em <strong>${course}</strong>.
      </div>
      <a href="${waUrl}" target="_blank" rel="noopener" class="btn-whatsapp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chamar no WhatsApp e garantir desconto
      </a>
    </div>
  `;
}

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initScores();

  document.getElementById('btn-start').addEventListener('click', () => {
    showScreen('screen-quiz');
    renderQuestion();
  });

  setupLeadForm();
});
