'use client'
import React from "react";
import { Submission } from '../../redux/type/submission'

type OutputProps = {
    outputDetails: Submission
}


const Output = ({outputDetails}:OutputProps) => {
    const getOutput = () => {
        let statusId = outputDetails?.status?.id;

        if (statusId === 6) {
            // compilation error
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {atob(outputDetails?.compile_output)}
                </pre>
            );
        } else if (statusId === 3) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-green-500">
                    {atob(outputDetails?.stdout) !== null
                        ? `${atob(outputDetails.stdout)}`
                        : null}
                </pre>
            );
        } else if (statusId === 5) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {`Time Limit Exceeded`}
                </pre>
            );
        } else {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {atob(outputDetails?.stderr)}
                </pre>
            );
        }
    };
    return (
        <>
            <div>
                Output
            </div>
            <div className="w-full h-56  rounded-md text-white font-normal text-sm overflow-y-auto">
                {outputDetails ? <>{getOutput()}</> : null}
            </div>
        </>
    );
};

export default Output;