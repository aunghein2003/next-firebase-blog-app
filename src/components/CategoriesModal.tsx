import {
  deleteCategory,
  getCategories,
  updateCategory,
} from "@/controller/categoryController";
import Modal, { ModalProps } from "./ui/Modal";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useQueryClient } from "@tanstack/react-query";
import { RiDeleteBinFill } from "react-icons/ri";

interface CategoriesModalProps
  extends Omit<ModalProps, "children" | "heading"> {}

function CategoriesModal({ open, close }: CategoriesModalProps) {
  const { data: categories } = getCategories();
  const queryClient = useQueryClient();

  return (
    <Modal open={open} close={close} heading="Categories">
      <div className="py-5 px-2 flex flex-col gap-y-3">
        {categories?.map((category) => (
          <div
            key={category.id}
            className="flex justify-between items-center gap-x-4"
          >
            <Input
              defaultValue={category.label}
              onChange={async (e) => {
                await updateCategory(category.id, e.target.value);
                queryClient.invalidateQueries(["categories"]);
              }}
            />
            <Button
              variant="danger"
              onClick={async () => {
                await deleteCategory(category.id);
                queryClient.invalidateQueries(["categories"]);
              }}
            >
              <RiDeleteBinFill />
            </Button>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default CategoriesModal;
