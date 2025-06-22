import { Text, View } from "react-native";
import React, { useState } from "react";
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, InputField } from "@gluestack-ui/themed";
import UIButton from "@/components/widgets/UIButton";

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (email: string) => void;
}

const AddMemberModal = ({ isOpen, onClose, onAdd }: AddMemberModalProps) => {
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    onAdd(email);
    setEmail("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent className="bg-secondary-text dark:bg-primary-text">
        <ModalHeader>
          <Text className="text-primary-text font-p_semi text-xl">Add Member</Text>
        </ModalHeader>
        <ModalBody>
          <View className="space-y-4">
            <View>
              <Text className="text-muted dark:text-muted font-p_med mb-1">Email</Text>
              <Input className="bg-white dark:bg-secondary-text">
                <InputField
                  placeholder="Enter email"
                  placeholderTextColor="#666"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="text-primary-text dark:text-secondary-text"
                />
              </Input>
            </View>
          </View>
        </ModalBody>
        <ModalFooter className="flex-row justify-between gap-x-4">
          <UIButton onPress={onClose}>Cancel</UIButton>
          <UIButton onPress={handleAdd}>Confirm</UIButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddMemberModal;
