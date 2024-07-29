"use client";
import React, { useRef, useState } from "react";
import { ibmPlexSerif } from "@/app/fonts";
import { FiX, FiUpload, FiInfo } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { undefined, z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCohort } from "@/app/store/cohortsSlice";
import { DataItem } from "@/app/store/cohortsSlice";

interface CohortCreationModalProps {
  setShowCohortForm: (show: boolean) => void;
  handleSubmit: (cohortData: DataItem) => void; // Use CohortData type here
}

const FormSchema = z.object({
  name: z.string().min(1, { message: "Cohort name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  startDate: z.date({ required_error: "Start date is required." }),
  endDate: z.date({ required_error: "End date is required." }),
  programs: z.string(), // Assuming programs is intended to be a string; adjust as necessary
  image: z.string().optional(), // Optional image field as a string
});
type FormValues = z.infer<typeof FormSchema>;

const CohortCreationModal: React.FC<CohortCreationModalProps> = ({
                                                                   setShowCohortForm,
                                                                 }) => {
  const dispatch = useDispatch();
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      programs: "",
      image: "",
    },
  });
  // programs: programs.join(", "), // Join the array into a comma-separated string

  const onSubmit = (data: FormValues) => {
    // dispatch(addCohort(data));
    // dispatch(
    //     addCohort({
    //         ...data,
    //         id: Date.now(),
    //         programs: programs.join(", "),
    //         date: `${format(data.startDate, 'PPP')}`,
    //     })
    // );
    //
    // setShowCohortForm(false);
    // console.log(data);
    const cohortData: DataItem = {
      id: Date.now(), // Unique identifier
      name: data.name,
      description: data.description,
      // startDate: data.startDate,
      // endDate: data.endDate,
      image: data.image || "",
      // programs: programs.join(', '),  // Make sure programs is an array of strings
      programs: programs
          ? programs
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          : "",

      // date: `${format(data.startDate, "PPP")} - ${format(data.endDate, "PPP")}`,

      date: `${format(data.startDate, "PPP")}`,
    };

    dispatch(addCohort(cohortData)); // Dispatch the action with the correct type
    setShowCohortForm(false);
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [programs, setPrograms] = useState<string>("");

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(file);
    }
  };

  // const handleFileChange = (file: File) => {
  //     if (file) {
  //         const reader = new FileReader();
  //         reader.onloadend = () => {
  //             setPreviewUrl(reader.result as string);
  //         };
  //         reader.readAsDataURL(file);
  //         setSelectedFile(file);
  //     }
  // };

  const handleFileChange = (file: File) => {
    // if (file) {
    //     // Read file as ArrayBuffer (for storage)
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         form.setValue('image', reader.result as string);
    //     };
    //     reader.readAsArrayBuffer(file);
    //
    //     // Also get the data URL for preview (optional)
    //     const previewReader = new FileReader();
    //     previewReader.onloadend = () => {
    //         setPreviewUrl(previewReader.result as string);
    //     };
    //     previewReader.readAsDataURL(file);
    // }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        form.setValue("image", reader.result as string); // Set image as Base64 string
      };
      reader.readAsDataURL(file); // Read file as Data URL (Base64)

      const previewReader = new FileReader();
      previewReader.onloadend = () => {
        setPreviewUrl(previewReader.result as string);
      };
      previewReader.readAsDataURL(file);
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleProgramSelect = (value: string) => {
    // setPrograms((prevPrograms) =>
    //     prevPrograms.includes(value) ? prevPrograms.filter((p) => p !== value) : [...prevPrograms, value]
    // );

    setPrograms(value); // Update directly
  };

  return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-enumSteelBlue bg-opacity-50 z-50">
        <ScrollArea className="h-[75%] rounded-lg">
          <div className="bg-white rounded-lg p-8 w-[631px] px-[40px] py-[30px] grid gap-[10px] ">
            <div className={"flex items-center content-between gap-[35px]"}>
              <h2
                  className={`text-xl font-bold w-[500px] h-[31px] text-enumGray2 ${ibmPlexSerif.className}`}
              >
                Create a Cohort
              </h2>
              <button onClick={() => setShowCohortForm(false)}>
                <FiX className={"h-[18px] w-[18px]"} />
              </button>
            </div>
            <Form {...form}>
              <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                >
                  Cohort Name
                </label>
                <input
                    type="text"
                    id="name"
                    {...form.register("name")}
                    placeholder={"Ex. Cohort 1"}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {form.formState.errors.name && (
                    <span className="text-red-500">
                  {form.formState.errors.name.message}
                </span>
                )}
              </div>

              <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                >
                  Description
                </label>
                <textarea
                    id="description"
                    {...form.register("description")}
                    placeholder={"Ex. A space for python developers"}
                    rows={4}
                    className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {form.formState.errors.description && (
                    <span className="text-red-500">
                  {form.formState.errors.description.message}
                </span>
                )}
              </div>

              <div className={"mb-4"}>
                <label
                    htmlFor=""
                    className={"block text-gray-700 font-medium m-2"}
                >
                  Programs
                </label>
                <Select
                    onValueChange={handleProgramSelect}
                    value={programs}
                    // value={programs}
                    // multiple
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/*<SelectLabel>Programs</SelectLabel>*/}
                      <SelectItem value="softwareEngineer">
                        Software Engineer
                      </SelectItem>
                      <SelectItem value="productDesigner">
                        Product Designer
                      </SelectItem>
                      <SelectItem value="dataScientist">
                        Data Scientist
                      </SelectItem>
                      <SelectItem value="productManager">
                        Product Manager
                      </SelectItem>
                      <SelectItem value="uxDesigner">UX Designer</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Start and End Date (Modified) */}
              <div className="flex gap-4 mb-4">
                <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Start Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <button className="flex items-center justify-center pl-3 text-left font-normal border rounded-md py-2 w-[268px] px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                  {field.value &&
                                  format(new Date(), "PPP") !==
                                  format(field.value, "PPP") ? (
                                      format(field.value, "PPP")
                                  ) : (
                                      <span>&nbsp;</span> // Using a non-breaking space to keep the button's layout
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>End Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <button className="w-[268px] flex justify-center items-center pl-3 text-left font-normal border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                  {field.value &&
                                  format(new Date(), "PPP") !==
                                  format(field.value, "PPP") ? (
                                      format(field.value, "PPP")
                                  ) : (
                                      <span>&nbsp;</span> // Using a non-breaking space to keep the button's layout
                                  )}
                                  {/*{*/}
                                  {/*    field.value ? (*/}
                                  {/*        format(field.value, 'PPP')*/}
                                  {/*    ) : (*/}
                                  {/*        <span>&nbsp;</span>*/}
                                  {/*    ) // display a non-breaking space to keep the button's layout*/}
                                  {/*}*/}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  // disabled={(date) => date < form.getValues('startDate')}
                                  disabled={(date) => {
                                    const startDate = form.getValues("startDate");
                                    return (
                                        (startDate && date < startDate) ||
                                        date < new Date()
                                    );
                                  }}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                    )}
                />
              </div>
              <label
                  htmlFor="file-upload"
                  className={"block text-gray-700 font-medium m-2"}
              >
                Add a cohort avatar
              </label>
              {/*<div className="p-4 rounded-md border-dashed border-enumBlue shadow-sm  border-2 bg-[#F6FCFF]">*/}
              {/*    <div className="cursor-pointer flex flex-col items-center justify-center">*/}
              {/*        <FiUpload className={'h-[24px] w-[24px]'} />*/}
              {/*        {selectedFile ? (*/}
              {/*            <p className="text-xs text-gray-500">{selectedFile.name}</p>*/}
              {/*        ) : (*/}
              {/*            <p className="text-xs text-gray-500">*/}
              {/*                Drag and drop or <span className={'text-enumBlue'}>choose file</span>*/}
              {/*            </p>*/}
              {/*        )}*/}
              {/*        <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />*/}
              {/*        <p className="text-xs text-gray-400 mt-2">240x240 px Recommended, max size 1MB</p>*/}
              {/*    </div>*/}
              {/*</div>*/}
              <div className="p-4 rounded-md border-dashed border-enumBlue shadow-sm  border-2 bg-[#F6FCFF]">
                <div
                    onDragOver={dragOverHandler}
                    onDragLeave={dragLeaveHandler}
                    onDrop={dropHandler}
                    onClick={openFileDialog}
                    className="cursor-pointer flex flex-col items-center justify-center"
                >
                  {previewUrl ? (
                      <img
                          src={previewUrl}
                          alt="Image Preview"
                          className="max-w-[200px] max-h-[200px] mb-2"
                      />
                  ) : (
                      <>
                        <FiUpload className={"h-[24px] w-[24px]"} />
                        <p className="text-xs text-gray-500">
                          Drag and drop or{" "}
                          <span className={"text-enumBlue"}>choose file</span>
                        </p>
                      </>
                  )}

                  <input
                      id="file-upload"
                      type="file"
                      ref={fileInputRef}
                      className=" hidden h-full w-full"
                      onChange={(e) => handleFileChange(e.target.files![0])}
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    240x240 px Recommended, max size 1MB
                  </p>
                </div>
              </div>

              <p className={"flex items-center"}>
              <span>
                <FiInfo />
              </span>
                You can do this later.
              </p>

              <div className="flex items-center justify-end gap-[12px]">
                <button
                    type="button"
                    onClick={() => setShowCohortForm(false)}
                    className="bg-white hover:bg-gray-200 border-enumBlue border-2 text-enumBlue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
                <button
                    type="submit"
                    onClick={form.handleSubmit(onSubmit)}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Create Cohort
                </button>
              </div>
            </Form>
          </div>
        </ScrollArea>
      </div>
  );
};

export default CohortCreationModal;