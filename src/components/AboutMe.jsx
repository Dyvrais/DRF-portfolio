export default function AboutMe() {
  return (
    <section id="about-me">
      <h1 className="text-center text-3xl font-semibold text-black dark:text-white mt-24 mb-7">
        <span className="text-warblue dark:text-waryellow font-mono">
          {">"}
        </span>{" "}
        About Me
      </h1>
      <div className="flex flex-col md:flex-row w-[65%] m-auto bg-warblue dark:bg-waryellow rounded-xl">
        <img
          src="https://i.postimg.cc/MpjmpgXX/IMG-0061.jpg"
          alt="placeholder img"
          className="w-1/2 rounded-full md:w-1/5 m-auto md:m-0 pt-4 md:p-0 md:rounded-[0px] md:rounded-l-xl"
        />
        <p className="text-white dark:text-black m-auto w-[70%] text-sm md:text-base py-4 md:p-0">
          My name is Deyver Reyes Faria, I am a computer engineer born in
          Maracaibo, Venezuela. Since I was a child I liked to spend a lot of
          time on the computer which resulted in me developing an interest in
          programming. Passionate about everything I do, I use different tools
          and languages to develop functional web sites and apps, always wanting
          to improve and face new challenges.
        </p>
      </div>
    </section>
  );
}
