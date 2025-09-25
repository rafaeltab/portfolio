import { Container } from "../../components/container";
import Balancer from "react-wrap-balancer";

export default function Home() {
  // Start of degree computer science
  // Start of mobile app project with TypeScript and React Native
  // Ethical hacking
  // First internship, and later job
  // Machine learning
  // Security lab
  // Kubernetes
  // Degree
  // Job at Methylium
  return (
    <div className="items-center justify-center">
      <Container>
        <section className="ml-20 mt-8 bg-opacity-10 bg-gray-300 rounded-md xl:w-2/3 w-3/4 p-10">
          <h2 className="text-2xl pb-2 text-orange-400">
            <Balancer>Exploring Coding Through Minecraft</Balancer>
          </h2>
          <p className="w-full indent-2 pr-5">
            <Balancer>
              At the age of 13, I ventured into the realm of programming with a
              clear mission: crafting mods for Minecraft, my beloved game, using
              the Java language. Little did I anticipate that what commenced as
              an exploration would develop into a lifelong passion. While my
              initial motivation was the allure of creating Minecraft mods, I
              soon discovered a profound fascination with the art of coding. For
              me, the joy of programming transcended mere end products; it was
              about the intricate dance of problem-solving, the boundless scope
              for creativity, and the enchantment of transmuting lines of code
              into functional software.
            </Balancer>
          </p>
        </section>
        <section className="ml-20 mt-8 bg-opacity-10 bg-gray-300 rounded-md xl:w-2/3 w-3/4 p-10">
          <h2 className="text-2xl pb-2 text-orange-400">
            <Balancer>Clash of Clans Web Dev Journey</Balancer>
          </h2>
          <p className="w-full indent-2 pr-5">
            <Balancer>
              As my programming journey continued, I ventured into new and
              exciting territories. I began by creating websites, starting with
              a specialized project for a Clash of Clans clan. This experience
              was pivotal for me as it marked my initial exploration into web
              development using HTML, CSS, JavaScript, jQuery, and PHP. During
              this project, I also delved into database management, creating my
              first MySQL database to facilitate a chat system for clan members.
            </Balancer>
          </p>
          <br />
          <p className="w-full indent-2 pr-5">
            <Balancer>
              Additionally, I integrated the Clash of Clans API into the
              website, providing real-time game data to clan members. To make my
              projects more accessible, I learned how to host websites in the
              cloud, using Apache and FTP for server management. Securing all
              the connections with my first SSL certificate.
            </Balancer>
          </p>
        </section>
        <section className="ml-20 mt-8 bg-opacity-10 bg-gray-300 rounded-md xl:w-2/3 w-3/4 p-10">
          <h2 className="text-2xl pb-2 text-orange-400">
            <Balancer>Infinite Procedural Worlds in Unity</Balancer>
          </h2>
          <p className="w-full indent-2 pr-5">
            <Balancer>
              My journey into programming led me to explore game development
              using Unity and C#. While I delved into the exciting world of
              creating games, I discovered a particular fascination with the
              coding aspect. It wasn&apos;t just about crafting games; it was
              about the creative problem-solving and the intricate dance of
              code. I experimented with procedural terrain generation
              techniques, harnessing the power of Perlin and Voronoi noise
              algorithms to shape game worlds which were infinite size.
            </Balancer>
          </p>
          <br />
          <p className="w-full indent-2 pr-5">
            <Balancer>
              As my passion for coding continued to grow, I made the decision to
              pivot my focus. I eventually parted ways with Unity to pursue C#
              programming more extensively, diving deeper into the
              language&apos;s capabilities and expanding my coding horizons.
            </Balancer>
          </p>
        </section>
        <section className="ml-20 mt-8 bg-opacity-10 bg-gray-300 rounded-md xl:w-2/3 w-3/4 p-10">
          <h2 className="text-2xl pb-2 text-orange-400">
            <Balancer>Exploring C# APIs and Dynamic Plugins in WPF</Balancer>
          </h2>
          <p className="w-full indent-2 pr-5">
            <Balancer>
              As my programming journey progressed, I delved deeper into C#
              development, crafting various small WPF applications that expanded
              my knowledge and skills in the language. However, the turning
              point arrived with a single project where I combined these skills.
              This project involved creating a C# API with advanced login
              capabilities, and it featured a dynamic plugin system using WPF
              that could load DLLs on the fly, enhancing modularity and
              flexibility. It was here that I discovered the power of combining
              different aspects of programming to create something truly dynamic
              and useful.
            </Balancer>
          </p>
          <br />
          <p className="w-full indent-2 pr-5">
            <Balancer>
              Furthermore, my journey led me to explore containerization,
              particularly with Docker, as a means to efficiently host and
              manage applications. This exposure to infrastructure management
              ignited my passion for system administration. While my use of
              PostgreSQL was less extensive at this stage, it opened the door to
              the vast possibilities within the realm of databases, propelling
              me further along my programming path.
            </Balancer>
          </p>
        </section>
      </Container>
    </div>
  );
}
