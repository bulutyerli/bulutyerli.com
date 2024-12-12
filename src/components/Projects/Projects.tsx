import Container from 'components/Container/Container';
import SectionTitle from 'components/SectionTitle/SectionTitle';

export default function Projects() {
  return (
    <section className="">
      <svg
        id="visual"
        viewBox="0 0 900 50"
        width="900"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto fill-white dark:fill-zinc-900 bg-zinc-100 dark:bg-zinc-950 pt-2"
        version="1.1"
      >
        <path d="M0 25L50 20.8C100 16.7 200 8.3 300 9.7C400 11 500 22 600 23C700 24 800 15 850 10.5L900 6L900 51L850 51C800 51 700 51 600 51C500 51 400 51 300 51C200 51 100 51 50 51L0 51Z"></path>
      </svg>
      <Container>
        <SectionTitle>projects.</SectionTitle>
        <div></div>
      </Container>
    </section>
  );
}
