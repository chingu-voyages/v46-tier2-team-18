export default function Footer() {
  return (
    <footer className="p-4 footer footer-center text-base md:text-sm bg-base-300 sticky top-[100vh]">
      <aside>
        <div className="flex items-center space-x-4 font-medium">
          Developed by
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/rosscondie"
            target="_blank"
            className="font-bold link link-hover"
          >
            {" "}
            Ross
          </a>
          <p> I</p>
          <a
            href="https://github.com/kelvinSeamount"
            target="_blank"
            className="font-bold link link-hover"
          >
            Emeka
          </a>
          <p> I</p>

          <a
            href="https://github.com/futurefounder"
            target="_blank"
            className="font-bold link link-hover"
          >
            Jesse
          </a>
        </div>
        <p className="font-medium">© 2023 – All rights reserved. </p>
      </aside>
    </footer>
  );
}
