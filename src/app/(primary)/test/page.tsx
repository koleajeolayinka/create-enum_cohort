"use client";
import React, { useState } from "react";
import LineConnection from "@/components/shared/LineConnection";
import FirstLineConnection from "@/components/shared/FirstLineConnection";
import ModuleBlock from "@/components/shared/ModuleBlock";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CourseProfileProps {} // Placeholder for potential future props

const CourseProfile: React.FC<CourseProfileProps> = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    // const [lineHeight, setLineHeight] = useState<number>(100); // Default height

    const toggleLineColor = (sectionName: string) => {
        setActiveSection(sectionName === activeSection ? null : sectionName);
    };

    return (
        <div className={'w-[337px] overflow-y-auto border-r border-solid border-enumGrey5 '}>
            <ScrollArea className="h-[91vh] ">
                <section className="grid place-items-center  ">
                    <div className="relative">
                        <header
                            className="absolute  top-0 left-0 mt-4 w-[300px] h-[40px] rounded-sm bg-enumBlue2 text-white px-4 py-2">
                            About course
                        </header>

                        <div className="invisible">Don't remove</div>

                        <main className="ml-4 pl-2 space-y-4">
                            <section className="flex items-end gap-[0px] -mt-4">
                                <FirstLineConnection
                                    className="-mt-[0.5rem] z-50"
                                    connectionColour={
                                        activeSection === "createCourse"   ? "#095AD3" : "#D0D5DD"
                                    }
                                />
                                <button
                                    className={`w-[242px] rounded-md  bg-white px-4 py-2 text-left ${activeSection === "createCourse" ? "active-button" : "border border-enumGrey5"}`}
                                    onClick={() => toggleLineColor("createCourse")}
                                >
                                    <p
                                        className={`${activeSection === "createCourse" ? "text-enumBlue2 font-extrabold" : ""}`}
                                    >
                                        How to create a course
                                    </p>
                                </button>
                            </section>

                            <section className="flex items-center gap-[0px]">
                                <LineConnection
                                    className="-mt-20 z-10"
                                    connectionColour={
                                        activeSection === "coursedetails"  ? "#095AD3" : "#D0D5DD"
                                    }
                                    height={100}
                                />
                                <button
                                    className={`w-[242px] rounded-md bg-white px-4 py-2 text-left items-start ${activeSection === "coursedetails" ? "active-button" : "border border-enumGrey5"}`}
                                    onClick={() => toggleLineColor("coursedetails")}
                                >
                                    <p
                                        className={`${activeSection === "coursedetails" ? "text-enumBlue2 font-extrabold" : ""}`}
                                    >
                                        Course Details
                                    </p>
                                </button>
                            </section>

                            <section className="flex items-center gap-[0px]">
                                <LineConnection
                                    className="-mt-20 -z-50"
                                    connectionColour={
                                        activeSection === "courseoutcome" ? "#095AD3" : "#D0D5DD"
                                    }
                                />
                                <button
                                    className={`flex w-[242px] items-start rounded-md  bg-white px-4 py-2 text-left ${activeSection === "courseoutcome" ? "active-button" : "border border-enumGrey5"}`}
                                    onClick={() => toggleLineColor("courseoutcome")}
                                >
                                    <p
                                        className={`${activeSection === "courseoutcome" ? "text-enumBlue2 font-extrabold" : ""}`}
                                    >
                                        Course Outcome
                                    </p>
                                </button>
                            </section>
                        </main>
                        <ModuleBlock />
                    </div>
                </section>
            </ScrollArea>
        </div>
    );
};

export default CourseProfile;