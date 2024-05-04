import "./index.css";
import "./output.css";

const NotFound = () => {
    return (
      <div className="flex flex-row items-center justify-center w-screen h-screen gap-3 text-left bg-slate-950">
        <h1 className="text-[4rem] text-red-700">404</h1>
        <div className="flex flex-col gap-2 mt-3 text-sm text-emerald-200">
          <h2 className="text-base text-rose-400">Page not found</h2>
          <p className="text-sm italic text-slate-600">404: Not Found</p>
          <a className="font-semibold animate-pulse" href="https://neilstu.art/">Homepage</a>
        </div>
      </div>
    );
  };
  export default NotFound;
  