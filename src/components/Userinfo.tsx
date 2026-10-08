"use client";
import { authClient } from "@/lib/auth-client";
import ActiveNavLink from "./ActiveNavLink";
import Link from "next/link";
import { use } from "react";
import { toast } from "react-toastify";

const Userinfo = () => {
    const { data: session } = authClient.useSession(); /// authClient keno?
    // console.log("Useinfo",session)

    const user = session?.user;
    console.log("User", user);

    const handelSingOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি!");
            return; //return দেওয়া হয়েছে error হলে নিচের code আর execute না করার জন্য।
        }

        toast.success("সফলভাবে সাইন আউট হয়েছে!");
    };

    return (
        <div>
            {user ? (
                <div className=" flex flex-col gap-2">
                    <div className="avatar mt-5">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <Link href={"/profile"}>
                                <img alt="Tailwind-CSS-Avatar-con"
                                    src={user.image as string} referrerPolicy="no-referrer" />
                            </Link>
                        </div>
                    </div>
                    <h2>{user.name}</h2>
                    <button onClick={handelSingOut} className="btn btn-outline">
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <ActiveNavLink href="/signin">সাইন ইন</ActiveNavLink>

                    <Link href="/signup">
                        <button className="btn bg-red-700 text-white">সাইন আপ</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Userinfo;
