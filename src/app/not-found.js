import "./index.css";
import "./output.css";

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center w-screen grow bg-stone-900">
          <div className="p-4 border border-stone-950 dark:border-stone-50 rounded-2xl">
          <h2 className="pb-3 font-mono text-xl text-center text-rose-400">Not Found</h2>
          <p className="text-sm dark:text-stone-50 text-stone-950">You've reached the end.</p>
          </div>
      </div>
    );
  };
  export default NotFound;
  