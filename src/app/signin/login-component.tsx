'use client'
import {useEffect} from "react";
import {signIn} from "@/auth";
import {useSession} from "next-auth/react";

export default function LoginComponent() {
    const { status } = useSession();

    useEffect(() => {
        console.log(status);
        if (status === "unauthenticated") {
            void signIn("identity-server4");
        }
    }, [status]);

    return <></>

}