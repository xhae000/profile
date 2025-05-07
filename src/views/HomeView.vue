<template>
  <!-- Navigation Bar -->
  <nav
    v-if="currentSection > 1"
    class="fixed top-0 left-0 w-[20dvw] h-full bg-black text-white z-50 pt-[5rem] mobile:hidden transition-all duration-500"
  >
    <!-- Logo -->
    <div
      class="text-center mb-[8rem] opacity-0 animate-fade-in cursor-pointer"
      @click="scrollToSection(1)"
    >
      <span class="block font-bold text-[2.6rem]">WooJin</span>
      <span class="block font-[200] text-[1.2rem]">developer</span>
    </div>
    <!-- Section Buttons -->
    <div class="flex flex-col items-center space-y-8 opacity-0 animate-fade-in text-[1.6rem]">
      <button
        v-for="section in sections"
        :key="section.id"
        :class="section.id === currentSection ? 'font-bold' : 'font-[300]'"
        @click="scrollToSection(section.id)"
      >
        {{ section.name }}
      </button>
    </div>
    <!-- Contacts -->
    <div class="fixed bottom-5 w-[20dvw] px-7 py-1">
      <div
        v-for="contact in contacts"
        :key="contact.name"
        class="mb-3 cursor-pointer"
        @click="contact.handler"
      >
        <span class="flex justify-between items-center">
          <span class="flex items-center">
            <img
              :src="contact.icon"
              class="w-[1.6rem] mr-[0.8rem] inline-block bg-black rounded-[4px]"
            />
            {{ contact.name }}
          </span>
          <img :src="externalIcon" class="w-[0.9rem] inline-block" />
        </span>
      </div>
    </div>
  </nav>

  <!-- Section 1 -->
  <section
    id="section1"
    class=" h-screen bg-black text-white flex flex-col justify-between p-10 transition-opacity duration-1000"
    :class="section1Visible ? 'opacity-100' : 'opacity-0'"
    @wheel="handleSection1Scroll"
  >
    <div></div>
    <div class="text-center">
      <!-- Typing Effect -->
      <div class="text-[4.2rem] font-sans space-y-[5dvh] mobile:text-center">
        <span
          v-for="(char, i) in displayText"
          :key="i"
          class="font-bold tracking-[0.3rem] mobile:text-[2.9rem]"
        >
          {{ char }}
        </span>
      </div>
      <!-- Additional Text -->
      <div
        class="mt-10 leading-relaxed tracking-[0.1rem] text-[1.2rem] mobile:text-[1.5rem] opacity-0 transition-opacity duration-1000"
        :class="showAdditional ? 'opacity-100' : ''"
      >
        <span class="font-[600]">변화와 성장을 즐기며, 아이디어를 실현시키는 개발자</span> 김우진입니다.
        
      </div>
    </div>
    <!-- More Button -->
    <div class="text-center mt-8 cursor-pointer" @click="scrollToSection(2)">
      <div class="text-[1.4rem] font-[100]">more</div>
      <img :src="bottomArrow" class="w-[2rem] mt-4 inline-block" />
    </div>
  </section>

  <!-- Section 2 -->
  <section
    id="section2"
    class=" min-h-screen bg-white pl-[20dvw] mobile:pl-0 mt-[4rem]"
    @wheel="handleSection2Scroll"
  >
    <div class="p-[5rem] mobile:p-7">
      <h2 class="title mobile:text-[3rem]">INTRODUCTION</h2>
      <p
        class="whitespace-pre-line mt-7 w-[60dvw] mobile:w-full text-[1.1rem] mobile:text-[1.5rem] font-[350] text-gray-900 tracking-[0.04rem] leading-relaxed"
      >
        {{ introText }}
      </p>
    </div>
    <!-- Skills -->
    <div class="bg-[#ecfeff] p-[5rem] mobile:px-7 py-[5rem] mt-[3rem]">
      <h3 class="title text-[#354a54] mobile:text-[3rem]">SKILLS</h3>
      <div v-for="group in skillsGroups" :key="group.title" class="mt-10">
        <h4 class="font-extrabold text-xl text-gray-600">{{ group.title }}</h4>
        <div class="mt-6 flex flex-wrap gap-y-5 mobile:text-[1.5rem]">
          <div
            v-for="item in group.items"
            :key="item.name"
            class="my-1 mr-10 text-gray-800 flex items-center"
          >
            <img :src="item.icon" width="25rem" class="mr-2" />
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- Education / Certificate / Experience -->
    <div class="p-[5rem] mobile:px-10 bg-gray-900 text-white">
      <section
        v-for="edu in educationList"
        :key="edu.title"
        class="border-b border-gray-600 py-[5rem]"
      >
        <h3 class="title text-white mobile:text-[3rem]">{{ edu.title }}</h3>
        <div class="mt-8 mobile:text-[1.8rem]">
          <div v-if="edu.institution" class="flex mobile:flex-col">
            <span class="font-extrabold text-xl mobile:text-[1.8rem]">
              {{ edu.institution }}
            </span>
            <p class="font-light ml-12 mobile:ml-0 mobile:mt-5" v-html="edu.detail"></p>
          </div>
          <div v-else>
            <div
              v-for="item in edu.items"
              :key="item.name"
              class="flex mobile:flex-col mobile:text-[1.8rem] mt-20"
            >
              <span class="font-extrabold text-xl mobile:text-[1.8rem] w-[28dvw] mobile:w-full">
                {{ item.name }}
              </span>
              <p class="font-light ml-12 mobile:ml-0 mobile:mt-5" v-html="item.detail"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>

  <!-- Section 3 -->
  <section id="section3" class=" min-h-screen bg-[#ececec] pl-[20dvw] mobile:pl-0">
    <div class="p-[5rem] mobile:px-10">
      <h2 class="title mobile:text-[3rem]">PROJECT</h2>
      <div class="mt-4 space-y-6">
        <div
          v-for="proj in projects"
          :key="proj.id"
          class="flex bg-white p-5 shadow-lg mobile:flex-col"
        >
          <img :src="proj.img" class="w-[35%] rounded-2xl mobile:w-full" />
          <div class="px-7 mobile:mt-6 flex flex-col justify-between">
            <div>
              <div class="flex items-center">
                <h3 class="text-[2rem] mobile:text-[3rem] text-gray-800 font-bold">{{ proj.title }}</h3>
                <span class="text-gray-500 font-light mobile:text-[1.5rem] ml-6">{{ proj.period }}</span>
              </div>
              <p class="mt-2 text-gray-700 mobile:text-[1.45rem] text-[0.9rem]">{{ proj.description }}</p>
            </div>
            <div class="mt-4 space-y-2 mobile:my-7">
              <div
                v-for="feat in proj.features"
                :key="feat"
                class="text-[1.15rem] mobile:text-[2rem] font-[300] text-gray-900"
              >• {{ feat }}</div>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <SkillTag v-for="(sk, i) in proj.skills" :key="i" :name="sk" :boxColor="proj.boxColor" :textColor="proj.textColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4 -->
  <section id="section4" class=" min-h-screen bg-white mobile:pl-0 pl-[20dvw]">
    <h2 class="title mobile:pl-10 mobile:pt-10 pl-[5rem] pt-[5rem] text-[#000] mobile:text-[3rem]">Blog</h2>
    <div class="flex gap-[2%] p-[5rem] mobile:p-10 pt-[2rem] flex-wrap">
      <ArticleComp
        v-for="art in articles"
        :key="art.title"
        :title="art.title"
        :category="art.category"
        :date="art.date"
        :image="art.image"
        @click="goPage(art.url)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SkillTag from '../components/SkillTag.vue'
import ArticleComp from '../components/ArticleComp.vue'

// Imports for icons and images
import velogIcon from '../assets/velog.png'
import githubIcon from '../assets/github.png'
import externalIcon from '../assets/goExternal.png'
import bottomArrow from '../assets/bottom-arrow.png'
import kotlinIcon from '../assets/skills/Kotlin-Dark.svg'
import javaIcon from '../assets/skills/Java-Dark.svg'
import jsIcon from '../assets/skills/JavaScript.svg'
import htmlIcon from '../assets/skills/HTML.svg'
import cssIcon from '../assets/skills/CSS.svg'
import springIcon from '../assets/skills/Spring-Dark.svg'
import vueIcon from '../assets/skills/VueJS-Dark.svg'
import tailwindIcon from '../assets/skills/TailwindCSS-Dark.svg'
import awsIcon from '../assets/skills/AWS-Dark.svg'
import mysqlIcon from '../assets/skills/MySQL-Dark.svg'
import redisIcon from '../assets/skills/Redis-Dark.svg'
import ideaIcon from '../assets/skills/Idea-Dark.svg'
import vsCodeIcon from '../assets/skills/VSCode-Dark.svg'
import githubSkillIcon from '../assets/skills/Github-Dark.svg'
import figmaIcon from '../assets/skills/Figma-Dark.svg'
import postmanIcon from '../assets/skills/Postman.svg'
import vercelSkillIcon from '../assets/skills/Vercel-Dark.svg'

import khubusImg from '../assets/mockup/khubus.png'
import loopInImg from '../assets/mockup/loop-in.png'
import fairPairImg from '../assets/mockup/fair-pair.png'
import campingTutorImg from '../assets/mockup/camping-tutor.png'
import companyImg from '../assets/mockup/company.png'
import saltRoomImg from '../assets/mockup/salt-room.png'

// Navigation Sections
const sections = [
  { id: 2, name: 'ABOUT' },
  { id: 3, name: 'PROJECT' },
  { id: 4, name: 'ARTICLE' }
]
// Contact Buttons
const contacts = [
  { name: 'BLOG', icon: velogIcon, externalIcon, handler: () => window.open('https://velog.io/@xha314/posts', '_blank') },
  { name: 'GITHUB', icon: githubSkillIcon, externalIcon, handler: () => window.open('https://github.com/xhae000', '_blank') }
]

// Section1 state
const displayText = ref([])
const showAdditional = ref(false)
const section1Visible = ref(true)
const currentSection = ref(1)
let isTyping = false
const fullText = '안녕하세요! 김우진입니다'
const delay = { normal: 100, highlight: 300 }

function typeEffect() {
  if (isTyping) return
  isTyping = true
  displayText.value = []
  let idx = 0
  const tick = () => {
    if (idx < fullText.length) {
      displayText.value.push(fullText[idx])
      const hl = ['김','우','진'].includes(fullText[idx])
      idx++
      setTimeout(tick, hl ? delay.highlight : delay.normal)
    } else {
      setTimeout(() => { showAdditional.value = true; isTyping = false }, 500)
    }
  }
  setTimeout(tick, 200)
}

function handleSection1Scroll(e) {
  e.deltaY > 0 ? scrollToSection(2) : scrollToSection(1)
}
function handleSection2Scroll(e) {
  // if (e.deltaY < 0) scrollToSection(1)
}

typeEffect()

// Section2 data
const introText = `아이디어를 발전시키고, 실제 서비스로 구현하는 개발자 김우진입니다.
Spring Boot, MySQL, Redis, Docker, AWS, GitHub Actions 등 다양한 기술 스택을 활용해 기획부터 설계, 개발, 배포까지 전 과정을 주도적으로 진행해본 경험이 있습니다. 단순히 동작하는 코드를 넘어서, 확장성과 유지보수성, 운영 효율성까지 고려한 개발을 중요하게 생각합니다.

프로젝트를 진행하며 도메인 기반 설계, RESTful API 설계, 트랜잭션 처리, 캐시 적용, CI/CD 자동화 등 실제 서비스 수준의 품질을 구현하기 위해 노력해 왔습니다. Vue와 Figma를 활용한 프론트엔드 개발 및 UI 기획 경험도 보유하고 있으며, 사용자 경험을 가장 중요하게 여깁니다.

소프트웨어를 통해 사회적 문제를 해결하는 일에 관심이 많으며, 이를 위해 원활한 협업과 커뮤니케이션이 가장 중요하다고 생각합니다. 프로젝트를 혼자서는 완성할 수 없다는 사실을 이해하고 있으며, 팀 내에서 문제를 함께 정의하고 해결하는 데 능동적으로 참여해 왔습니다.

앞으로도 기술 역량과 협업 능력을 꾸준히 발전시키며, 인간에게 도움이 되는 가치를 만드는 개발자로 성장해 나가고자 합니다.`
const skillsGroups = [
  { title: 'Language', items: [
      { name: 'Kotlin', icon: kotlinIcon },
      { name: 'JAVA', icon: javaIcon },
      { name: 'JS', icon: jsIcon },
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon }
    ]
  },
  { title: 'Framework · Library', items: [
      { name: 'Spring Boot', icon: springIcon },
      { name: 'Vue JS', icon: vueIcon },
      { name: 'Tailwind', icon: tailwindIcon }
    ]
  },
  { title: 'Infrastructure · Database', items: [
      { name: 'AWS', icon: awsIcon },
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'Redis', icon: redisIcon }
    ]
  },
  { title: 'Tools', items: [
      { name: 'IntelliJ', icon: ideaIcon },
      { name: 'VSCode', icon: vsCodeIcon },
      { name: 'Github', icon: githubSkillIcon },
      { name: 'Figma', icon: figmaIcon },
      { name: 'Postman', icon: postmanIcon },
      { name: 'Vercel', icon: vercelSkillIcon }
    ]
  }
]

const educationList = [
  { title: 'EDUCATION', institution: '경희대학교', detail: '소프트웨어융합학과<br/>2022 - 재학중 (2028년 졸업 예정)' },
  { title: 'CERTIFICATE', items: [
      { name: 'SQLD (SQL Developer)', detail: '한국데이터진흥원<br/>2023.8' }
    ]
  },
  { title: 'EXPERIENCE', items: [
      { name: 'KVS(KHU Valley Start-up) 성장팀 선정', detail: '경희대학교<br/>2024.11' },
      { name: '관공데이터 활용 서비스개발 공모전 우수상', detail: '한국관광공사 및 카카오<br/>2024.10' },
      { name: '청소년 디지털 문제해결 프로젝트 대학생 멘토', detail: '한국과학창의재단<br/>2024.8 - 2024.11' },
      { name: '강원열린군대 스타트업 경진대회 대상', detail: '강원대학교 및 육군2군단<br/>2023.10' }
    ]
  }
]

const projects = [
  {
    id: 1,
    title: 'KHU BUS',
    period: '24.2 - 개발 진행 중',
    description: '경희대학교 학생들을 위한 캠퍼스 버스 정보제공 앱 서비스',
    features: ['버스 시점 정보 제공 알고리즘 개발 중', '기획, 백엔드, 프론트엔드, 디자인 담당'],
    skills: ['Spring Boot', 'Kotlin', 'Vue JS'],
    img: khubusImg,
    boxColor: '#FF6B6B',
    textColor: '#FFFFFF'
  },
  {
    id: 2,
    title: 'Loopin',
    period: '24.3 - 24.4',
    description: 'AI 기반의 대학생 실명기반 모임 플랫폼',
    features: [
      '프롬프트 튜닝을 활용한 AI 자유 입력 기반 맞춤형 추천 제공',
      'OCR 기술을 활용한 학생증 이미지 텍스트 자동 인식 및 처리',
      '오토 스케일링 및 로드 밸런싱을 통한 트래픽 대응 및 서버 안정성 향상',
      'JWT 기반 인증으로 사용자 식별 및 보안 강화',
      '백엔드, 프론트엔드 개발 담당'
    ],
    skills: ['Spring Boot', 'Kotlin', 'Vue JS', 'Python', 'FastAPI', 'AWS'],
    img: loopInImg,
    boxColor: '#6BCB77',
    textColor: '#FFFFFF'
  },
  {
    id: 3,
    title: 'Fair Pair',
    period: '24.10 - 24.12',
    description: '뚜벅이 대학생들을 위한 공평한 약속 장소 추천 프로그램',
    features: [
      'Google Maps/Matrix API를 활용한 대중교통 기반 소요 시간 계산',
      '유저별 목적지 기준 가중치 설정 및 소요 시간 차 최소화 알고리즘 적용',
      'Chart.js 기반 소요 시간 차이 감소 시각화',
      '기획, 백엔드, 프론트엔드, 디자인 담당'
    ],
    skills: ['Kotlin', 'Vue JS', 'Google Directions and Distance Matrix API', 'Chart.js'],
    img: fairPairImg,
    boxColor: '#4D96FF',
    textColor: '#FFFFFF'
  },
  {
    id: 4,
    title: '캠핑 튜터',
    period: '24.7 - 24.10',
    description: '초보 캠퍼들을 위한 캠핑 튜토리얼 및 가이드 서비스',
    features: [
      '한국관광공사 Open API 기반 캠핑장 정보 수집, 가공 및 DB 적재',
      'JWT 기반 인증 구조를 활용한 무상태 애플리케이션 구현',
      'SPA 방식으로 모바일 UX 최적화',
      '기획, 백엔드, 프론트엔드, 디자인, 배포 담당'
    ],
    skills: ['Spring Boot', 'Kotlin', 'Vue JS', 'H2DB', 'JWT', 'JPA', 'AWS'],
    img: campingTutorImg,
    boxColor: '#FFC75F',
    textColor: '#000000'
  },
  {
    id: 5,
    title: '기업 소개 페이지 (외주)',
    period: '24.8',
    description: '기업 서비스 상세소개 페이지',
    features: [
      '반응형 웹 (Mobile, Tablet, PC)',
      'Vanilla JS를 활용한 스크롤 이벤트 및 동적 엘리먼트 변화 구현',
      '프론트엔드 개발 담당'
    ],
    skills: ['HTML', 'CSS', 'vanilla JS', 'Netlify'],
    img: companyImg,
    boxColor: '#FF9671',
    textColor: '#FFFFFF'
  },
  {
    id: 6,
    title: '쇼핑몰 (외주)',
    period: '24.9 - 24.10',
    description: 'Key Ring 소개 및 판매 쇼핑몰',
    features: [
      'Vanilla JS 기반 도트 이미지 애니메이션 로직 구현',
      '섹션 단위 스크롤 트리거 애니메이션 구현',
      '프론트엔드 개발 담당'
    ],
    skills: ['Vue JS', 'JS', 'Vercel'],
    img: saltRoomImg,
    boxColor: '#845EC2',
    textColor: '#FFFFFF'
  }
]

const articles = [
  { title: '클라이언트 식별 시스템 구축기 - 인증 없이, 식별만 하기', category: 'Key-based identification with ThreadLocal', date: '25.04.08', image: 'https://velog.velcdn.com/images/xha314/post/3540cb9e-cc1e-44f7-b27f-3f9d0d446595/image.png', url: 'https://velog.io/@xha314/%ED%81%B4%EB%9D%BC%EC%9D%BC' }
,
  {title : "RestControllerAdvice가 Swagger를 깨트린 이유", category: 'Spring and Swagger compatible troubleshooting', date:'25.05.06', image : 'https://velog.velcdn.com/images/xha314/post/95136f77-1ddb-474c-8241-e70d8a7d95d1/image.png', url: 'https://velog.io/@xha314/RestControllerAdvice%EA%B0%80-Swagger%EB%A5%BC-%EA%B9%A8%ED%8A%B8%EB%A6%B0-%EC%9D%B4%EC%9C%A0'}
]

function scrollToSection(id) {
  const el = document.getElementById(`section${id}`)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  currentSection.value = id
}

function goPage(url) {
  window.open(url, '_blank')
}
</script>

<style scoped>
@keyframes fade-in { 0% { opacity:0; transform:translateY(10px) } 100% { opacity:1; transform:translateY(0) } }
.animate-fade-in { animation:fade-in 1s ease-out forwards }
nav button { transition:transform 0.2s ease-in-out }
nav button:hover { transform:scale(1.02) }
body { margin:0; font-family:'Noto Sans KR',sans-serif; overflow-x:hidden }
</style>