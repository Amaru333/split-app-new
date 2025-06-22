import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

type UIAvatarProps = {
  source?: ImageSourcePropType;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: 14,
  md: 20,
  lg: 28,
};

const UIAvatar = ({ source, size = "sm" }: UIAvatarProps) => {
  const sizeValue = sizes[size];
  return <Image source={source} className="rounded-full border border-muted-light" style={{ width: sizeValue, height: sizeValue }} />;
};

export default UIAvatar;
