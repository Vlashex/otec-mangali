import Image from "next/image";
import Link from "next/link";

import img from '@/../public/МБ_26.jpg'

export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <Link href='/'>Лучший<br/>Мангал</Link>
        <a href="tel:+79184492447">+79184492447</a>
      </header>
      <main>
        <section 
          className="flex relative p-5 min-h-96" 
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '0px'
          }}
        >
          <div className="flex flex-col items-start z-30 text-white font-bold text-3xl my-auto">
            <h1 className="shadow-2xl">Мангалы под ключ</h1>
            <h2 className="shadow-2xl">Быстро</h2>
            <h2 className="shadow-2xl">Качественно</h2>
            <h2 className="shadow-2xl">Не дорого</h2>
            <a 
              href="tel:+79184492447"
              className="
                bg-yellow-500 px-4 py-2 rounded-full transition-all ease duration-500
                hover:bg-yellow-400
                hover:px-5
              "
            >Узнать стоимость</a>
          </div>
        </section>
      </main>
    </>
  );
}
