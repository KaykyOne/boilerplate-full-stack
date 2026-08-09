import { ReactNode } from "react"

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-background">
            <div className="max-w-[300px]">
                {children}
            </div>
        </div>
    )
}
