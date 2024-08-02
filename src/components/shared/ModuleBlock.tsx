"use client";
import React, { useState, useEffect, useRef } from "react";
import PlusBar from "./PlusBar";
import SubModuleLongLine from "../shared/SubModuleLongLine";
import CurveArrow from "./CurveArrow";

const ModuleBlock = () => {
    const [modules, setModules] = useState<{ name: string, lessons: string[] }[]>([{ name: "Module 1", lessons: [] }]);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [activeSubSection, setActiveSubSection] = useState<string | null>(null);
    const [fontSize, setFontSize] = useState<string>("text-base");
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedModule, setSelectedModule] = useState<string | null>(null);
    const [modalPosition, setModalPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
    const [lineHeights, setLineHeights] = useState<number[]>([50]); // Default height for each module
    const modalRef = useRef<HTMLDivElement>(null);

    const [activeNextModule, setActiveNextModule] = useState<string | null>(null);
    const [pendingSubmodules, setPendingSubmodules] = useState<number>(0); // Track pending submodules

    const addModule = () => {
        const newModuleName = `Module ${modules.length + 1}`;
        const newLineHeight = 50 + pendingSubmodules * 50; // Calculate new module height
        setModules([...modules, { name: newModuleName, lessons: [] }]);
        setLineHeights([...lineHeights, newLineHeight]); // Add calculated height for the new module
        setPendingSubmodules(0); // Reset pending submodules

        // Set the new module as the active next module if the current active section is not the last module
        if (activeSection && modules.findIndex(module => module.name === activeSection) < modules.length - 1) {
            setActiveNextModule(newModuleName);
        }
    };

    const addLesson = (moduleName: string) => {
        setModules(modules.map(module =>
            module.name === moduleName
                ? { ...module, lessons: [...module.lessons, `Lesson ${module.lessons.length + 1}`] }
                : module
        ));
        setIsModalOpen(false);

        // Ensure the module remains open after adding a submodule
        setActiveSection(moduleName);

        const moduleIndex = modules.findIndex(module => module.name === moduleName);
        if (moduleIndex < modules.length - 1) {
            setActiveNextModule(modules[moduleIndex + 1].name);
            // Increase the height of the next module's line by 50 units
            setLineHeights(prevHeights => {
                const newHeights = [...prevHeights];
                newHeights[moduleIndex + 1] += 50;
                return newHeights;
            });
        } else {
            // Track pending submodules if there is no next module
            setPendingSubmodules(pendingSubmodules + 1);
        }
    };

    const toggleLineColor = (sectionName: string) => {
        const isOpen = sectionName === activeSection ? null : sectionName;
        setActiveSection(isOpen);
        setActiveSubSection(null); // Reset submodule active state
        setFontSize(isOpen ? "text-sm" : "text-base");
        setActiveButton(isOpen ? sectionName : null);

        if (!isOpen) {
            setActiveNextModule(null);
            // Reset the height of the next module's line to the original height
            const moduleIndex = modules.findIndex(module => module.name === sectionName);
            if (moduleIndex < modules.length - 1) {
                setLineHeights(prevHeights => {
                    const newHeights = [...prevHeights];
                    newHeights[moduleIndex + 1] = 50;
                    return newHeights;
                });
            }
        } else {
            const moduleIndex = modules.findIndex(module => module.name === sectionName);
            if (moduleIndex < modules.length - 1) {
                setActiveNextModule(modules[moduleIndex + 1].name);
                // Increase the height of the next module's line by 50 units for each submodule in the current module
                setLineHeights(prevHeights => {
                    const newHeights = [...prevHeights];
                    newHeights[moduleIndex + 1] = 50 + modules[moduleIndex].lessons.length * 50;
                    return newHeights;
                });
            } else {
                setActiveNextModule(null);
            }
        }
    };

    const toggleSubLineColor = (subSectionName: string) => {
        setActiveSubSection(subSectionName === activeSubSection ? null : subSectionName);
    };

    const openModal = (moduleName: string, event: MouseEvent) => {
        event.stopPropagation(); // Prevent the module from closing when the PlusBar is clicked
        const viewportHeight = window.innerHeight;
        const modalHeight = 320; // Assuming the modal height is 320px
        const top = event.clientY + modalHeight > viewportHeight ? event.clientY - modalHeight : event.clientY;
        setSelectedModule(moduleName);
        setModalPosition({ top, left: event.clientX });
        setIsModalOpen(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div>
            <div className="flex justify-between rounded-sm mt-[44px] bg-enumBlue2 text-enumWhite px-4 py-2 w-[300px] h-[40px] cursor-pointer">
                <h1 className={"text-enumWhite "}>Module</h1>
                <PlusBar color={'white'} onClick={addModule} />
            </div>
            <div className="">
                <main className="ml-4 pl-2 space-y-2 -mt-0">
                    {modules.map((module, index) => (
                        <div key={index}>
                            <section className="flex items-end gap-[0px] -mt-10">
                                <div className="grid">
                                    <div className={`w-[3px] z-10 bg-enumPurple`} style={{ height: `${lineHeights[index]}px` }}></div>
                                    <CurveArrow/>
                                </div>
                                <button
                                    className={`w-[242px] h-[40px] rounded-md bg-white px-2 py-2 text-left flex items-center justify-between ${
                                        activeSection === module.name ? "active-button" : "border border-enumGrey5"
                                    }`}
                                    onClick={() => toggleLineColor(module.name)}
                                >
                                    <p className={`flex-1 ${fontSize} ${activeSection === module.name ? "text-enumBlue2 font-[700]" : ""}`}>
                                        {module.name} - Introduction...
                                    </p>

                                    <PlusBar color={activeButton === module.name ? '#095AD3' : '#667085'} onClick={(e) => openModal(module.name, e)} />
                                </button>
                            </section>
                            {activeSection === module.name && (
                                <div className="">
                                    {module.lessons.map((lesson, lessonIndex) => (
                                        <section key={lessonIndex} className={"flex items-end gap-[0px] ml-9 "}>
                                            {lessonIndex === 0 ? (
                                                <SubModuleLongLine
                                                    className="z-50"
                                                    connectionColour="#D0D5DD"
                                                />
                                            ) : (
                                                <SubModuleLongLine
                                                    className="z-50"
                                                    connectionColour="#D0D5DD"
                                                />
                                            )}
                                            <button
                                                className={`rounded-md bg-white px-4 py-2 text-left items-start w-[218px] ${
                                                    activeSubSection === lesson ? "active-button" : "border border-enumGrey5"
                                                }`}
                                                onClick={() => toggleSubLineColor(lesson)}
                                            >
                                                <p className={`${activeSubSection === lesson ? "text-enumBlue2 font-extrabold" : ""}`}>
                                                    Learning objectives
                                                </p>
                                            </button>
                                        </section>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </main>
            </div>
            {isModalOpen && (
                <div ref={modalRef} className="fixed ml-14 w-[237px] h-[320px] max-h-[100vh] overflow-y-auto"
                     style={{top: modalPosition.top, left: modalPosition.left}}>
                    <div className="bg-white p-4 rounded-md shadow-md border border-gray-200">
                        <button
                            className="block w-full bg-enumblueLight text-enumBlue2 font-bold py-2 px-4 rounded mb-2 text-left">
                            Add objective
                        </button>

                        <ul className="space-y-1">
                            <li>
                                <button onClick={() => addLesson(selectedModule!)}
                                        className="block w-full text-gray-700 hover:text-gray-900 py-2 px-4 text-left">
                                    Add lesson
                                </button>
                            </li>
                            <li>
                                <button className="block w-full text-gray-700 hover:text-gray-900 py-2 px-4 text-left">
                                    Add pre-test
                                </button>
                            </li>
                            <li>
                                <button className="block w-full text-gray-700 hover:text-gray-900 py-2 px-4 text-left">
                                    Add post-test
                                </button>
                            </li>
                            <li>
                                <button className="block w-full text-enumRed hover:text-red-700 py-2 px-4 text-left">
                                    Delete module
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModuleBlock;