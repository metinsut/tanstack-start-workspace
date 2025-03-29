import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

const Separator = (props: Props) => {
  const { className, orientation = "horizontal", decorative = true, ...rest } = props;
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...rest}
    />
  );
};

export { Separator };
