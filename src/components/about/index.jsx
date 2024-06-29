import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Who Am I
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Hi, Im Madaka Pavan Kalyan, Graduated from Hindustan University in
            2022 with a degree in Electrical and Electronics Engineering,
            located in Chennai. Throughout my academic journey, I gained a
            comprehensive understanding of renewable energy and engineering
            projects, particularly focusing on the integration of AI, ML,
            MATLAB, and Image Processing technologies. Before my university
            education, I attended Sri Chaitanya Junior College in 2016-18 and
            completed my 10th grade at Abhyudaya School in 2015-16.
          </p>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            6+ <sub className="font-semibold text-base">Know languages</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">
              years of experience in HCL
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image
            className="w-full h-auto"
            src="https://media.licdn.com/dms/image/C5603AQE5i32gyMhduw/profile-displayphoto-shrink_200_200/0/1640667185199?e=1717632000&v=beta&t=hGeakxX18W-9FcrKZaw9C9JdLc4ZA1C-zeGNltHzZT0"
            alt="Madaka Pavan Kalyan"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Image
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=kalyanmadaka&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon=&text_bold=false"
            alt="Madaka Pavan Kalyan"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,html,css,nodejs,figma,aws,gcp,azure,react,vue,git,kubernetes,c,cs,cpp,vim,ae,anaconda,angular,apple,arduino,autocad,autocad,babel,bootstrap,cpp,codepen,discord,django,eclipse,firebase,flask,github,gitlab,gmail,js,jquery,linux,linkedin,mysql,mongodb,nestjs,nextjs,nodejs,npm,nuxtjs,py,raspberrypi,react,r,replit,stackoverflow,sublime,tensorflow,ts,ubuntu,wordpress,yarn`}
            alt="Madaka Pavan Kalyan"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=kalyanmadaka&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://ieeexplore.ieee.org/document/9782169"
            target="_blank"
            className="w-full"
          >
            <Image
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=kalyanmadaka&repo=Final-year-project&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="Madaka Pavan Kalyan"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
