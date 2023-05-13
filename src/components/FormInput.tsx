"use client";

import { useRef, useState } from "react";
import Select from "react-select/creatable";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { BlogData, Category } from "../../types";
import { addCategory } from "@/controller/categoryController";
import { useRouter } from "next/navigation";

interface FormInputProps extends Partial<BlogData> {
  heading: string;
  onSubmit: (blog: BlogData) => void;
  availableCategories: Category[];
}

const FormInput: React.FC<FormInputProps> = ({
  heading,
  onSubmit,
  availableCategories,
  title = "",
  image = "",
  categories = [],
  content = "",
}) => {
  const [contentValue, setContentValue] = useState(content);
  const [selectedCategories, setSelectedCategories] =
    useState<Category[]>(categories);
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  function submitHandler() {
    if (!contentValue || !titleRef.current?.value || !imageRef.current?.value) {
      return alert("Please fill all fields!");
    } else {
      onSubmit({
        title: titleRef.current.value,
        image: imageRef.current.value,
        content: contentValue,
        categories: selectedCategories,
      });
      router.push("/");
    }
  }

  return (
    <div className="py-5 px-7 mx-auto max-w-7xl h-screen">
      <h1 className="text-3xl md:text-4xl font-semibold">{heading}</h1>
      <div className="py-7 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-1">
          <label className="text-lg text-slate-400">Title :</label>
          <Input type="text" ref={titleRef} defaultValue={title} />
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-lg text-slate-400">Category :</label>
          <Select
            isMulti
            options={availableCategories.map((category) => ({
              value: category.id,
              label: category.label,
            }))}
            onCreateOption={async (label) => {
              const id = await addCategory(label);
              if (id) setSelectedCategories((prev) => [...prev, { id, label }]);
            }}
            value={selectedCategories.map((category) => ({
              value: category.id,
              label: category.label,
            }))}
            onChange={(categories) => {
              setSelectedCategories(
                categories.map((category) => ({
                  id: category.value,
                  label: category.label,
                }))
              );
            }}
            name="category"
            placeholder=""
            theme={(theme) => ({
              ...theme,
              borderRadius: 12,
              colors: {
                ...theme.colors,
                primary: "rgb(148 163 184)",
              },
            })}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-lg text-slate-400">Image :</label>
          <Input type="text" ref={imageRef} defaultValue={image} />
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-lg text-slate-400">Contents :</label>
          <textarea
            rows={5}
            defaultValue={content}
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
            placeholder="Write contents here..."
            className="w-full py-2 px-3 placeholder:text-slate-400 rounded-xl shadow-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
          ></textarea>
        </div>

        <div className="flex justify-end items-center gap-x-3 md:gap-x-5">
          <Button onClick={submitHandler}>Save</Button>
          <Button variant="secondary" outline onClick={() => router.push("/")}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
