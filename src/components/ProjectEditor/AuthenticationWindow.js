import { useState } from "react";
import { AuthProvider } from "./AuthContext";

export default function AuthenticationWindow({ children }) {

    const [auth, setAuth] = useState();
    const [verified, setVerified] = useState(false); // TODO: Implement this

    const [loginText, setLoginText] = useState("")

    const authenticate = () => {

        fetch("/api/authenticate", {
            method: "POST",
            headers: {
                Authorization: `${loginText}`,
            },
        }).then((response) => {
            if (response.status === 200) {
                setAuth(loginText);
                setVerified(true);
            } else {
                setVerified(false);
            }
        })
    }

    return (<>
        {
            !verified ? (
                <div className="h-screen w-screen flex flex-col items-center content-center justify-center bg-slate-950">
                    <h1 className="text-purple-300 text-2xl font-semibold p-4">
                        neilstu.art<br/><p className={"text-xs text-red-400"}>Project Editor</p>
                    </h1>
                    <div className=" flex flex-row items-center content-center justify-center ">
                        <div class="relative h-10 m-3 w-full">
                            <input
                                class="peer h-full w-full  rounded-[7px] border-2 border-slate-500 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder="Authentication"
                                onChange={(e) => (setLoginText(e.target.value))}
                                onKeyDown={(e) => {
                                    // If enter is pressed, login
                                    if (e.key === "Enter") {
                                        authenticate();
                                    }
                                }}
                            />
                        </div>
                        <button
                            onClick={authenticate}
                            className="text-emerald-300 border-3 border-emerald-900 rounded-lg p-1 font-semibold"
                        >
                            Login
                        </button>
                    </div>
                </div>) : (
                <AuthProvider auth={auth}>
                    {children}
                </AuthProvider>
            )}
    </>
    );
}