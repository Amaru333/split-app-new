import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

type UIAvatarProps = {
  source?: ImageSourcePropType;
};

const UIAvatar = ({ source }: UIAvatarProps) => {
  return <Image source={source} className="w-4 h-4 rounded-full border border-muted-light" />;
};

export default UIAvatar;
