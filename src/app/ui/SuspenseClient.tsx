import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback: ReactNode;
    condition: boolean;
}

export default function SuspenseClient({ children, fallback, condition }: Props) {

    return (
        <>
        {condition 
            ? children 
            : fallback
        }
        </>
    )

}