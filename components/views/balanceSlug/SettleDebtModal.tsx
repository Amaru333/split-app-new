import { Text, View } from "react-native";
import React, { useState } from "react";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
  Input,
  InputField,
  Icon,
  Pressable,
} from "@gluestack-ui/themed";
import { ChevronDownIcon, RepeatIcon } from "@gluestack-ui/themed";
import UIButton from "@/components/widgets/UIButton";

interface SettleDebtModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettleDebtModal = ({ isOpen, onClose }: SettleDebtModalProps) => {
  const [fromPerson, setFromPerson] = useState("Me");
  const [toPerson, setToPerson] = useState("");
  const [isFromDisabled, setIsFromDisabled] = useState(true);
  const [amount, setAmount] = useState("");

  const randomNames = ["John", "Alice", "Bob", "Emma", "David"];

  const handleExchange = () => {
    if (isFromDisabled) {
      // If "From" is disabled (showing "Me"), move "Me" to "To" and enable "From"
      setToPerson("Me");
      setFromPerson(toPerson || "");
      setIsFromDisabled(false);
    } else {
      // If "From" is enabled, move its value to "To" and set "From" to "Me"
      setToPerson(fromPerson || "");
      setFromPerson("Me");
      setIsFromDisabled(true);
    }
  };

  const SelectPersonMe = () => {
    return (
      <Select selectedValue={"Me"} onValueChange={() => {}} isDisabled={true}>
        <SelectTrigger className="pr-2">
          <SelectInput placeholder="Select person" />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Me" value="Me" />
          </SelectContent>
        </SelectPortal>
      </Select>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Text className="text-primary-text font-p_semi text-lg">Settle a Debt</Text>
        </ModalHeader>
        <ModalBody>
          <View className="space-y-4">
            {/* From Dropdown */}
            <View>
              <Text className="text-muted font-p_med mb-1">From</Text>
              {isFromDisabled ? (
                <SelectPersonMe />
              ) : (
                <Select selectedValue={fromPerson} onValueChange={setFromPerson} isDisabled={isFromDisabled}>
                  <SelectTrigger className="pr-2">
                    <SelectInput placeholder="Select person" />
                    <SelectIcon>
                      <ChevronDownIcon />
                    </SelectIcon>
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      {randomNames.map((name) => (
                        <SelectItem key={name} label={name} value={name} />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            </View>

            {/* Exchange Button */}
            <Pressable onPress={handleExchange} className="items-center mt-4">
              <Icon as={RepeatIcon} size="md" color="$primary500" />
            </Pressable>

            {/* To Dropdown */}
            <View>
              <Text className="text-muted font-p_med mb-1">To</Text>
              {!isFromDisabled ? (
                <SelectPersonMe />
              ) : (
                <Select selectedValue={toPerson} onValueChange={setToPerson} isDisabled={!isFromDisabled}>
                  <SelectTrigger className="pr-2">
                    <SelectInput placeholder="Select person" />
                    <SelectIcon>
                      <ChevronDownIcon />
                    </SelectIcon>
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      {randomNames.map((name) => (
                        <SelectItem key={name} label={name} value={name} />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            </View>

            {/* Amount Input */}
            <View className="mt-4">
              <Text className="text-muted font-p_med mb-1">Amount</Text>
              <Input>
                <InputField placeholder="Enter amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />
              </Input>
            </View>
          </View>
        </ModalBody>
        <ModalFooter className="flex-row justify-between gap-x-4">
          <UIButton onPress={onClose}>Cancel</UIButton>
          <UIButton
            onPress={() => {
              // Handle confirm action
              onClose();
            }}
          >
            Confirm
          </UIButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettleDebtModal;
