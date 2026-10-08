"use client";

import { authClient } from "@/lib/auth-client";
import ActiveNavLink from "./ActiveNavLink";
import Link from "next/link";
import { toast } from "react-toastify";

const Userinfo = () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;
    console.log("User", user);

    const handelSingOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি!");
            return;
        }

        toast.success("সফলভাবে সাইন আউট হয়েছে!");
    };

    return (
        <div>
            {user ? (
                <div className="flex flex-col items-center sm:items-start gap-2 ml-4 sm:ml-0">
                    <div className="avatar mt-5">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <Link href="/profile">
                                <img
                                    alt="Tailwind-CSS-Avatar-con"
                                    src={user.image as string}
                                    referrerPolicy="no-referrer"
                                />
                            </Link>
                        </div>
                    </div>

                    <h2 className="text-center sm:text-left">{user.name}</h2>

                    <button
                        onClick={handelSingOut}
                        className="btn btn-outline w-full sm:w-auto"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <ActiveNavLink href="/signin">
                        সাইন ইন
                    </ActiveNavLink>

                    <Link href="/signup">
                        <button className="btn bg-red-700 text-white">
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Userinfo;