import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MemberCard from "./MemberCard";
import AddMemberModal from "./AddMemberModal";
import UIButton from "@/components/widgets/UIButton";
import { useThemedColor } from "@/components/functions/getThemedColor";

const MembersList = () => {
  const router = useRouter();
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ]);

  const handleAddMember = (email: string) => {
    // TODO: Implement actual add member logic with backend
    const newMember = {
      id: members.length + 1,
      name: email.split("@")[0], // Temporary: using email username as name
      email,
    };
    setMembers([...members, newMember]);
  };

  const handleDeleteMember = (id: number) => {
    // TODO: Implement actual delete member logic with backend
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <ScrollView className="flex-1 bg-secondary-text dark:bg-primary-text pt-16 px-4">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity className="flex-row items-center gap-2" onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={useThemedColor("text")} className="mb-2" />
          <Text className="text-primary-text dark:text-secondary-text font-p_semi text-4xl">Members</Text>
        </TouchableOpacity>
      </View>
      <UIButton onPress={() => setShowAddMemberModal(true)}>
        <AntDesign name="plus" size={16} color={useThemedColor("text-reverse")} /> Add Member
      </UIButton>
      {/* Members List */}
      <View className="flex-1 mt-4">
        {members.map((member) => (
          <MemberCard key={member.id} name={member.name} email={member.email} onDelete={() => handleDeleteMember(member.id)} />
        ))}
      </View>

      {/* Add Member Modal */}
      <AddMemberModal isOpen={showAddMemberModal} onClose={() => setShowAddMemberModal(false)} onAdd={handleAddMember} />
    </ScrollView>
  );
};

export default MembersList;
