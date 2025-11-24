"use client";

import Avatar, { AvatarSize } from "../Avatar";

const CreateChannelModal = () => {
  return (
    <div>
      <h1 className="text-xl p-3 border-b border-neutral-700">
        How you&apos;ll appear
      </h1>

      <div>
        <Avatar size={AvatarSize.large} imageSrc={null} />
      </div>
    </div>
  );
};

export default CreateChannelModal;
