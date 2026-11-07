/*
 * 앱 등록부 — 새 프로그램을 만들면 여기에 한 항목만 추가하면 허브에 나타납니다.
 *   status: "live"(사용 가능) | "soon"(준비 중)
 *   accent: 카드 상단 색 — marigold | coral | sky | blue | midnight | mocha
 */
window.HUB_APPS = [
  {
    id: "student-picker",
    title: "학생 뽑기",
    emoji: "🎲",
    description: "발표자·모둠장·청소 당번을 공정하게. 중복 없이 뽑고, 기록까지 남겨요.",
    category: "수업 운영",
    path: "apps/student-picker/",
    status: "live",
    accent: "marigold",
  },
  {
    id: "seat-shuffle",
    title: "자리 바꾸기",
    emoji: "🪑",
    description: "교실 배치에 맞춰 무작위로 자리를 배정해요.",
    category: "학급 운영",
    status: "soon",
    accent: "sky",
  },
  {
    id: "timer",
    title: "수업 타이머",
    emoji: "⏱️",
    description: "활동 시간을 크게 보여 주는 화면용 타이머.",
    category: "수업 운영",
    status: "soon",
    accent: "coral",
  },
  {
    id: "group-maker",
    title: "모둠 편성",
    emoji: "🧩",
    description: "인원 수에 맞춰 균형 있게 모둠을 나눠요.",
    category: "학급 운영",
    status: "soon",
    accent: "midnight",
  },
];
