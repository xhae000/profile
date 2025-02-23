<template>
  <div>
  <!-- 네비게이션 바 (section2부터 표시) -->
  <nav
      v-if="currentSection > 1"
      class="fixed top-0 left-0 w-[20dvw] h-full bg-black text-white z-50 transition-all duration-500 ease-out pt-[5rem]"
  >
      <div class="opacity-0 text-center mb-[8rem] animate-fade-in" style="cursor: pointer" @click="scrollToSection(1)">
        <span class="block font-bold text-[2.6rem]">
            WooJin
        </span>
        <span class="block font-[200] text-[1.2rem]">
            developer
        </span>
      </div>
      <br />
      <div>
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
      </div>
      <div class="fixed bottom-5 px-7 py-1 w-[20dvw]">
          <div class=" ">

              <div class="block mb-3" @click="goVelog" style="cursor:pointer">
                  <span class="flex justify-between">
                      <span class=" mr-[0.5rem] flex items-center">
                        <img class="w-[1.6rem] mr-[0.8rem] inline-block bg-white rounded-[4px]" src="../assets/velog.png" /> 
                        BLOG
                      </span>
                      <span>
                        <img class="ml-2 w-[0.9rem] inline-block" src="../assets/goExternal.png" />
                      </span>
                  </span>
              </div>
              
              <div class="block" @click="goGithub" style="cursor:pointer">
                  <span class="flex justify-between">
                      <span class=" mr-[0.5rem] flex items-center">
                        <img class="w-[1.6rem] mr-[0.8rem] inline-block  rounded-[3px]" src="../assets/github.png" /> 
                        GITHUB
                      </span>
                      <span>
                        <img class="ml-2 w-[0.9rem] inline-block" src="../assets/goExternal.png" />
                      </span>
                  </span>
              </div>

          </div>
      </div>
  </nav>

  <!-- section1 -->
  <div
      id="section1"
      class="w-screen h-screen bg-black text-white flex flex-col items-center justify-between p-10"
      @wheel="handleSection1Scroll"
      :class="section1Visibility ? 'opacity-100' : 'opacity-0'"
  >
      <div></div>
      <div>
      <div class="text-[4.2rem] font-sans space-y-[5dvh]">
          <span v-for="(char, index) in displayText" :key="index" class="font-bold tracking-[0.3rem]">
          {{ char }}
          </span>
      </div>
      <div
          class=" font-[100] text-center text-[1.2rem] font-sans leading-relaxed opacity-0 transition-opacity duration-1000 mt-10 leading-[2.22rem] tracking-[0.1rem]"
          :class="showAdditionalText ? 'opacity-100' : 'opacity-0'"
      >
          <span class="font-bold">변화와 성장을 열망하는 개발자</span>, 김우진입니다! <br />
          SW를 전공하고 있으며 사회문제를 해결하는 데에 관심이 많습니다. <br>
          항상 다양한 경험을 통해 통찰력과 깨달음을 얻고자 노력합니다.
      </div>
      </div>
      <div class="text-center mt-8" style="cursor:pointer" @click="scrollToSection(2)">
      <div class="text-[1.4rem] font-[100]">more</div>
      <img src="../assets/bottom-arrow.png" class="w-[2rem] inline-block mt-4" />
      </div>
  </div>

    <!-- section2 -->
    <div id="section2" class="w-screen min-h-screen bg-[#fff] pl-[20dvw] mt-[4rem]">
      <!-- INTRODUCTION -->
      <div class="p-[5rem]">
        <div class="title">
          INTRODUCTION
        </div>

        <div class="mt-7 w-[60dvw] text-[1.1rem] font-[350] text-gray-900 tracking-[0.04rem]">

          백엔드와 프론트엔드 개발 경험이 있으며 졸업 후 풀스택 개발자로 활동하고 싶습니다.
          Spring Boot, Vue, MySQL, AWS, Git, Figma 등을 활용하여 서비스의 기획부터 설계, 개발까지 주도적으로 진행해 본 경험이 있습니다.
          프로덕션의 독창성, 확장성, 유지보수성을 가장 중요하게 생각하며 사용자에게 더 나은 경험을 제공하기 위해 항상 고민합니다. <br>
          <br>
          저는 소프트웨어로 우리 사회 속 문제를 해결하는 데에 관심이 많습니다.
          그리고 이를 위한 가장 중요한 가치는 팀워크라고 믿습니다.
          아무리 뛰어난 기술력을 가진 팀이라도 원활한 커뮤니케이션과 목표를 향한 능동적인 협업이 뒷받침되지 않는다면, 좋은 결과물을 만들어내긴 어렵습니다.
          아직 개발 능력조차 부족한 학생 개발자이지만, 학부기간 동안은 개발이 아닌 다양한 경험을 통해 넓은 시야를 지니고자 노력하고 있습니다.
          이를 바탕으로 조직 내에서 좋은 커뮤니케이터이자 문제를 뚝딱뚝딱 해결할 수 있는 개발자로 성장하고 싶습니다!
          
        </div>
      </div>

      <!--SKILLS-->
      <div class="bg-[#ecfeff] p-[5rem] py-[5rem] mt-[3rem]">
        <div>
           <div class="title text-[#354a54]">
              SKILLS
           </div>

           <div>
             <div class="font-extrabold mt-10 text-xl text-gray-600">
               Language
             </div>
             <div class="mt-6 flex" >
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Kotlin-Dark.svg" width="25rem" class="mr-2 " />
                  Kotlin
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Java-Dark.svg" width="25rem" class="mr-2 " />
                  JAVA
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/JavaScript.svg" width="25rem" class="mr-2 " />
                  JS
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/HTML.svg" width="25rem" class="mr-2 " />
                  HTML
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/CSS.svg" width="25rem" class="mr-2 " />
                  CSS
                </div>
             </div>

             <div class="font-extrabold mt-10 text-xl text-gray-600">
               Framework  &middot;  Library
             </div>
             <div class="mt-6 flex" >
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Spring-Dark.svg" width="25rem" class="mr-2 " />
                  Spring Boot
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/VueJS-Dark.svg" width="25rem" class="mr-2 " />
                  Vue JS
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/TailwindCSS-Dark.svg" width="25rem" class="mr-2 " />
                  Tailwind
                </div>
             </div>

             <div class="font-extrabold mt-10 text-xl text-gray-600">
               Infrastructure  &middot;  Database
             </div>
             <div class="mt-6 flex" >
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/AWS-Dark.svg" width="25rem" class="mr-2 " />
                  AWS
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/MySQL-Dark.svg" width="25rem" class="mr-2 " />
                  MySQL
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Redis-Dark.svg" width="25rem" class="mr-2 " />
                  Redis
                </div>
             </div>

             <div class="font-extrabold mt-10 text-xl text-gray-600">
               Tools
             </div>
             <div class="mt-6 flex" >
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Idea-Dark.svg" width="25rem" class="mr-2 " />
                  IntelliJ
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/VSCode-Dark.svg" width="25rem" class="mr-2 " />
                  VSCode
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Github-Dark.svg" width="25rem" class="mr-2 " />
                  Github
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Figma-Dark.svg" width="25rem" class="mr-2 " />
                  Fimga
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Postman.svg" width="25rem" class="mr-2 " />
                  Postman
                </div>
                <div class="my-1 mr-10 text-gray-800 flex items-center">
                  <img src="../assets/skills/Vercel-Dark.svg" width="25rem" class="mr-2 " />
                  Vercel
                </div>

             </div>
           </div>
        </div>
      </div>

      <div class="p-[5rem] bg-gray-900">
        <!--EDUCATION-->
        <div class="border-b-[0.01px] border-gray-600 py-[5rem] ">
          <div class="title text-white">
            EDUCATION
          </div>

          <div class="text-white mt-[2.1rem]">
            <div class="flex">
              <div class="font-extrabold text-xl w-[]">경희대학교</div>
              <div class="font-light ml-12">
                소프트웨어융합학과
                <div class="font-light mt-1">
                  2022 - 재학중 (2028년 졸업 예정)
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--CERTIFICATE-->
        <div class="border-b-[0.01px] border-gray-600 py-[5rem] ">
          <div class="title text-white">
            CERTIFICATE
          </div>

          <div class="text-white mt-[2.1rem]">
            <div class="flex">
              <div class="font-extrabold text-xl w-[]">SQLD (SQL Developer)</div>
              <div class="font-light ml-10">
                  한국데이터진흥원
                <div class="font-light mt-1">
                  2023.8
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--EXPERIENCE-->
        <div class="border-b-[0.00px] border-gray-600 py-[5rem] pb-[4rem] ">
          <div class="title text-white">
            EXPERIENCE
          </div>

          <div class="text-white mt-[2.1rem]">
            <div class="flex">
              <div class="font-extrabold text-xl w-[28dvw]">KVS(KHU Valley Start-up) 성장팀 선정</div>
              <div class="font-light ml-10">
                경희대학교
                <div class="font-light mt-1">
                  2024.11
                </div>
              </div>
            </div>
            <div class="flex mt-5">
              <div class="font-extrabold text-xl w-[28dvw]">관광데이터 활용 서비스 개발 공모전 우수상</div>
              <div class="font-light ml-10">
                한국관광공사 및 카카오, 한국관광공사장상
                <div class="font-light mt-1">
                  2024.10
                </div>
              </div>
            </div>
            <div class="flex mt-5">
              <div class="font-extrabold text-xl w-[28dvw]">청소년 디지털 문제해결 프로젝트 대학생 멘토</div>
              <div class="font-light ml-10">
                한국과학창의재단
                <div class="font-light mt-1">
                  2024.8 - 2024.11
                </div>
              </div>
            </div>
            <div class="flex mt-5">
              <div class="font-extrabold text-xl w-[28dvw]">강원열린군대 스타트업 경진대회 대상</div>
              <div class="font-light ml-10">
                강원대학교 및 육군 2군단
                <div class="font-light mt-1">
                  2023.10
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
    
    <!-- section3 -->
    <div id="section3" class="w-screen min-h-screen bg-[#ececec] pl-[20dvw]">
      <!--PROJECTS-->
      <div class="p-[5rem]">
        <div class="title">
          PROJECT        
        </div>
        <!-- KHU BUS -->
        <div class="mt-4">
          <div class="flex justify-left w-full p-5 pr-1  bg-white h-[19rem] shadow-lg shadow-gray-500/15">
            <div class="h-full flex items-center">
                <img class="h-full rounded-2xl" src="../assets/mockup/khubus.png" />
            </div>
            <div class="px-7 flex flex-col justify-between">
                <div>
                    <div class="flex items-center ">
                        <div class="text-[2rem] text-gray-800 font-bold">
                            KHU BUS
                        </div>
                        <div class="text-gray-500 font-light ml-6">
                            24.2 - 개발 진행 중
                        </div>
                    </div>
                    <div class="mt-2 text-gray-700 text-[0.9rem]">
                        경희대학교 학생들을 위한 캠퍼스 버스 정보제공 앱 서비스
                    </div>
                </div>

                <div class="">
                    <div class="text-[1.15rem] text-blue-600 font-[300]">
                        &bull; 3월 배포 예정!
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 기획, 백엔드, 프론트엔드, 디자인 담당
                    </div>
                </div>

                <div>
                    <SkillTag name="Spring Boot" boxColor="#5713ff" textColor="#fff"/>
                    <SkillTag name="Kotlin" boxColor="#5713ff" textColor="#fff"/>
                    <SkillTag name="Vue JS" boxColor="#5713ff" textColor="#fff"/>
                </div>
            </div>
          </div>
        </div>

        <!--Made For You-->
        <div class="mt-4">
          <div class="flex justify-left w-full p-5 pr-1  bg-white h-[19rem] shadow-lg shadow-gray-500/15">
            <div class="h-full flex items-center">
                <img class="h-full rounded-2xl" src="../assets/mockup/made-for-you.png" />
            </div>
            <div class="px-7 flex flex-col justify-between">
                <div>
                    <div class="flex items-center ">
                        <div class="text-[2rem] text-gray-800 font-bold">
                            Made For You
                        </div>
                        <div class="text-gray-500 font-light ml-6">
                            24.12 - 개발 진행 중
                        </div>
                    </div>
                    <div class="mt-2 text-gray-700 text-[0.9rem]">
                        연인들을 위한 주문제작 선물 제작 및 추천 플랫폼
                    </div>
                    
                </div>
                
                <div class="">
                    <div class="text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 개발 기간 미정
                    </div>
                </div>


                <div>
                    <SkillTag name="Spring Boot" boxColor="#ff1d98" textColor="#fff"/>
                    <SkillTag name="Kotlin" boxColor="#ff1d98" textColor="#fff"/>
                    <SkillTag name="Vue JS" boxColor="#ff1d98" textColor="#fff"/>
                </div>
            </div>
          </div>
        </div>
        
        <!--Fair Pair-->
        <div class="mt-4">
          <div class="flex justify-left w-full p-5 pr-1  bg-white h-[19rem] shadow-lg shadow-gray-500/15">
            <div class="h-full flex items-center">
                <img class="h-full rounded-2xl" src="../assets/mockup/fair-pair.png" />
            </div>
            <div class="px-7 flex flex-col justify-between">
                <div>
                    <div class="flex items-center ">
                        <div class="text-[2rem] text-gray-800 font-bold">
                            Fair Pair
                        </div>
                        <div class="text-gray-500 font-light ml-6">
                            24.10 - 24.12
                        </div>
                    </div>
                    <div class="mt-2 text-gray-700 text-[0.9rem]">
                        '뚜벅이' 대학생들을 위한, 대중교통 기준의 공평한 약속 장소를 구해내는 프로그램
                    </div>
                </div>

                <div class="">
                    <div class="text-[1.15rem] text-gray-900 font-[300]">
                        &bull; Google Matrix/Maps API를 활용하여 두 지점의 대중교통 소요시간 계산 
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 각 유저의 목적지까지의 소요 시간을 고려하여 가중치 설정 및 소요시간 차 최소화
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; Chart.js를 활용하여 소요시간 차 감소 추이 시각화
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 기획, 백엔드, 프론트엔드, 디자인 담당
                    </div>
                </div>

                <div>
                    <SkillTag name="Kotlin" boxColor="#0e79ff" textColor="#fff"/>
                    <SkillTag name="Vue JS" boxColor="#0e79ff" textColor="#fff"/>
                    <SkillTag name="Google Directions and Distance Matrix API" boxColor="#0e79ff" textColor="#fff"/>
                    <SkillTag name="Chart.js" boxColor="#0e79ff" textColor="#fff"/>
                </div>
            </div>
          </div>
        </div>
        
        <!--Camping Tutor-->
        <div class="mt-4">
          <div class="flex justify-left w-full p-5 pr-1  bg-white h-[19rem] shadow-lg shadow-gray-500/15">
            <div class="h-full flex items-center">
                <img class="h-full rounded-2xl" src="../assets/mockup/camping-tutor.png" />
            </div>
            <div class="px-7 flex flex-col justify-between">
                <div>
                    <div class="flex items-center ">
                        <div class="text-[2rem] text-gray-800 font-bold">
                            캠핑 튜터
                        </div>
                        <div class="text-gray-500 font-light ml-6">
                            24.7 - 24.10
                        </div>
                    </div>
                    <div class="mt-2 text-gray-700 text-[0.9rem]">
                        초보 캠퍼들을 위한 캠핑 튜토리얼 및 가이드 서비스
                    </div>
                </div>

                <div class="">
                    <div class="text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 한국관광공사 OPEN API로 얻어낸 캠핑장 정보 적재 및 재가공
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; JWT를 활용한 state-less application 구현
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; single page application 구현으로 모바일 환경 최적화
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 기획, 백엔드, 프론트엔드, 디자인, 배포 담당
                    </div>
                </div>

                <div>
                    <SkillTag name="Spring Boot" boxColor="#03cf7e" textColor="#fff"/>
                    <SkillTag name="Kotlin" boxColor="#03cf7e" textColor="#fff"/>
                    <SkillTag name="Vue JS" boxColor="#03cf7e" textColor="#fff"/>
                    <SkillTag name="H2DB" boxColor="#03cf7e" textColor="#fff"/>
                    <SkillTag name="JWT" boxColor="#03cf7e" textColor="#fff"/>
                    <SkillTag name="JPA" boxColor="#03cf7e" textColor="#fff"/>
                    <SkillTag name="AWS" boxColor="#03cf7e" textColor="#fff"/>
                </div>
            </div>
          </div>
        </div>
         
        <!--company-->
        <div class="mt-4">
          <div class="flex justify-left w-full p-5 pr-1  bg-white h-[19rem] shadow-lg shadow-gray-500/15">
            <div class="h-full flex items-center">
                <img class="h-full rounded-2xl" src="../assets/mockup/company.png" />
            </div>
            <div class="px-7 flex flex-col justify-between">
                <div>
                    <div class="flex items-center ">
                        <div class="text-[2rem] text-gray-800 font-bold">
                            기업 소개 페이지 (외주)
                        </div>
                        <div class="text-gray-500 font-light ml-6">
                            24.8
                        </div>
                    </div>
                    <div class="mt-2 text-gray-700 text-[0.9rem]">
                        기업 서비스 상세소개 페이지
                    </div>
                </div>

                <div class="">
                    <div class="text-[1.15rem] text-gray-900 font-[300]">
                        &bull; Mobile, Table, PC 호환 반응형 웹
                    </div> 
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; Vanilla JS를 활용한 스크롤 이벤트, 엘리먼트 동적 변화 구현
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 프론트엔드 개발 담당
                    </div>
                </div>

                <div>
                    <SkillTag name="HTML" boxColor="#003cff" textColor="#fff"/>
                    <SkillTag name="CSS" boxColor="#003cff" textColor="#fff"/>
                    <SkillTag name="vanilla JS" boxColor="#003cff" textColor="#fff"/>
                    <SkillTag name="Netrify" boxColor="#003cff" textColor="#fff"/>
                </div>
            </div>
          </div>
        </div>

        <!--Salt Room-->
        <div class="mt-4">
          <div class="flex justify-left w-full p-5 pr-1  bg-white h-[19rem] shadow-lg shadow-gray-500/15">
            <div class="h-full flex items-center">
                <img class="h-full rounded-2xl" src="../assets/mockup/salt-room.png" />
            </div>
            <div class="px-7 flex flex-col justify-between">
                <div>
                    <div class="flex items-center ">
                        <div class="text-[2rem] text-gray-800 font-bold">
                            쇼핑몰 (외주)
                        </div>
                        <div class="text-gray-500 font-light ml-6">
                            24.9 - 24.10
                        </div>
                    </div>
                    <div class="mt-2 text-gray-700 text-[0.9rem]">
                        Key Ring 소개 및 판매 쇼핑몰
                    </div>
                </div>

                <div class="">
                    <div class="text-[1.15rem] text-gray-900 font-[300]">
                        &bull; Vanilla JS로 도트 이미지 애니메이션 구현
                    </div> 
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 페이지 내 section 구분에 대한 스크롤 애니메이션
                    </div>
                    <div class="mt-1 text-[1.15rem] text-gray-900 font-[300]">
                        &bull; 프론트엔드 개발, 배포 담당
                    </div>
                </div>

                <div>
                    <SkillTag name="Vue JS" boxColor="#8bc3ff" textColor="#fff"/>
                    <SkillTag name="JS" boxColor="#8bc3ff" textColor="#fff"/>
                    <SkillTag name="Vercel" boxColor="#8bc3ff" textColor="#fff"/>
                </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>

    <!-- section4 -->
    <div id="section4" class="w-screen min-h-screen bg-[#fff] pl-[20dvw]">
      <div class="w-full pt-[44dvh] text-center font-[100] text-[2rem]"><div>준비 중입니다.</div></div>

    </div>


  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SkillTag from "../components/SkillTag.vue"

// 섹션 데이터
const sections = [
{ id: 2, name: 'ABOUT' },
{ id: 3, name: 'PROJECT' },
{ id: 4, name: 'ARTICLE' },

]

// 상태 관리
const displayText = ref([])
const showAdditionalText = ref(false)
const currentSection = ref(1)
const section1Visibility = ref(true) // section1의 가시성 상태 추가
let isScrolling = false // 스크롤이 발생한 상태 추적

// 타이핑 효과
const fullText = '안녕하세요! 김우진입니다'
const delay = { normal: 100, highlight: 300 }
const isTyping = ref(false)

const typeEffect = () => {
if(isTyping.value) {
return
}

isTyping.value = true
setTimeout( ()=> {
let index = 0
displayText.value = [] // 애니메이션 시작 시 텍스트 리셋
const typing = () => {
if (index < fullText.length) {
  displayText.value.push(fullText[index])
  const isHighlight = ['김', '우', '진'].includes(fullText[index])
  index++
  setTimeout(typing, isHighlight ? delay.highlight : delay.normal)
} else {
  setTimeout(() => {
    showAdditionalText.value = true
    isTyping.value = false
  }, 500)
}
}
typing()
}, 200)
}

onMounted(() => {
typeEffect()
})

// `section1`에서 스크롤 처리
const handleSection1Scroll = (event) => {
if (event.deltaY > 0) {
autoScrollToSection(2)
} else {
autoScrollToSection(1)
}
}

// `section2`에서 위로 스크롤 처리
const handleSection2Scroll = (event) => {
if (event.deltaY < 0 && !isScrolling) {
isScrolling = true
autoScrollToSection(1)
setTimeout(() => {
isScrolling = false // 1번 섹션으로 이동한 후, 스크롤 상태 리셋
}, 500) // 부드러운 스크롤 이동이 끝나는 시간을 고려하여 타임아웃 설정
}
}

// 스크롤 이동 함수
const scrollToSection = (id) => {
const section = document.getElementById(`section${id}`)
section?.scrollIntoView({ behavior: 'smooth' })
}

// `section2` 이후부터 자동 섹션 인식
const onScroll = () => {
const scrollY = window.scrollY
const vh = window.innerHeight

// section1의 범위 확인
const section1 = document.getElementById('section1')
if (section1 && scrollY < section1.offsetTop + section1.offsetHeight / 2) {
currentSection.value = 1
return
}

// section2~4의 범위 확인
for (let i = 2; i <= sections.length + 1; i++) {
const section = document.getElementById(`section${i}`)
const offsetTop = section?.offsetTop || 0
if (scrollY >= offsetTop - vh / 2 && scrollY < offsetTop + vh / 2) {
currentSection.value = i
break
}
}

// section1로 다시 돌아갈 때
const section1InView = scrollY < section1.offsetTop + section1.offsetHeight && scrollY > section1.offsetTop
if (section1InView && !section1Visibility.value) {
section1Visibility.value = true
typeEffect() // section1으로 돌아올 때 애니메이션 재시작
} else if (scrollY > section1.offsetTop + section1.offsetHeight) {
section1Visibility.value = false
}
}

// 자동 스크롤 함수
const autoScrollToSection = (id) => {
const section = document.getElementById(`section${id}`)
section?.scrollIntoView({ behavior: 'smooth' })
currentSection.value = id
}

onMounted(() => {
window.addEventListener('scroll', onScroll)

// section2에서 위로 스크롤 시, section1으로 부드럽게 이동
const section2 = document.getElementById('section2')
if (section2) {
section2.addEventListener('wheel', handleSection2Scroll)
}
})

const goGithub = () => {
window.open('https://github.com/xhae000', '_blank');
}
const goVelog = () => {
window.open('https://velog.io/@xha314/posts', '_blank');
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  overflow-x: hidden;
}

@keyframes fade-in {
  0% {
  opacity: 0;
  transform: translateY(10px);
  }
  100% {
  opacity: 1;
  transform: translateY(0);
  }
}

nav .animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

nav * {
  animation: fade-in 1s ease-out forwards;
}

nav button {
  transition: transform 0.2s ease-in-out;
}

nav button:hover {
  transform: scale(1.02);
}

#section1 {
  transition: opacity 1s ease;
}
</style>
