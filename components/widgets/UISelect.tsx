import React, { createContext, ReactNode, useContext } from "react";
import { View, Text } from "react-native";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import { MUTED_COLOR, MUTED_LIGHT_COLOR, PRIMARY_DARK_COLOR, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "@/constants/palette";
import { useColorScheme } from "nativewind";

interface UISelectContextType {
  value?: string;
  onValueChange?: (value: string) => void;
}

const UISelectContext = createContext<UISelectContextType>({});

interface UISelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  children: ReactNode;
  disabled?: boolean;
  label?: string;
}

interface UISelectOptionProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

function UISelectOption({ value, children, disabled }: UISelectOptionProps) {
  const { value: selectedValue, onValueChange } = useContext(UISelectContext);
  return <SelectItem label={typeof children === "string" ? children : value} value={value} isDisabled={disabled} />;
}
//TODO: Fix the font color
export default function UISelect({ value, onValueChange, placeholder = "Select option", children, disabled = false, label }: UISelectProps) {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  return (
    <View className="mb-2">
      {label && <Text className="text-muted dark:text-muted-light font-p_reg text-sm mb-0.5">{label}</Text>}
      <UISelectContext.Provider value={{ value, onValueChange }}>
        <Select selectedValue={value} onValueChange={onValueChange} isDisabled={disabled}>
          <SelectTrigger className="border border-muted rounded-md pr-2" height="$9" borderColor={isDarkMode ? MUTED_COLOR : MUTED_LIGHT_COLOR}>
            <SelectInput
              placeholder={placeholder}
              className="text-primary-text dark:text-secondary-text font-p_reg text-base"
              placeholderTextColor={MUTED_COLOR}
              color={isDarkMode ? SECONDARY_TEXT_COLOR : PRIMARY_TEXT_COLOR}
              fontSize={14}
            />
            <SelectIcon as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {children}
            </SelectContent>
          </SelectPortal>
        </Select>
      </UISelectContext.Provider>
    </View>
  );
}

UISelect.Option = UISelectOption;
