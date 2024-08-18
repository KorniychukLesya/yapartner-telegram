import {useEffect, useState} from "react";
import WelcomeWindow from "@/components/registration/WelcomeWindow";
import PhoneRegistration from "@/components/registration/PhoneRegistration";


export default function HomeScreen() {
    const [loading, setLoading] = useState(true);
    const duration = 500;
    const durationStep = 10;
    const newUser = true;
    const [twoStepAuth, setTwoStepAuth] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, duration * durationStep);
    }, []);

    function onStart() {
        setTwoStepAuth(true);
        // router.push("./explore", { relativeToDirectory: true })
    }

    if (newUser) {
        if (!twoStepAuth) {
            return (
                <WelcomeWindow onStart={onStart} loading={loading} duration={duration} durationStep={durationStep}/>
            );
        } else {
            return (
                <PhoneRegistration/>
            )
        }
    }
}
