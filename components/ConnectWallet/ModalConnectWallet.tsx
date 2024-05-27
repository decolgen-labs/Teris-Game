import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  ModalOverlay,
  Box,
} from "@chakra-ui/react";

import React from "react";

import BtnConnectWallet from "./BtnConnectWallet";
import wallets from "@/config/wallet";
import { useWalletContext } from "@/Provider/ProviderWalletContext";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function ModalConnectWallet({ isOpen, onClose }: IProps) {
  const { connectWallet } = useWalletContext();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        margin={{ md: 0, base: 4 }}
        background="#0B2544"
        border="2px solid #40E9F1"
        position="relative"
        color="#E4E8FF"
      >
        <HStack
          justifyContent="space-between"
          position="relative"
          padding={{ md: 8, base: 6 }}
        >
          <Text fontWeight="extrabold" fontSize="2xl">
            Connect Wallet
          </Text>
          <ModalCloseButton
            _hover={{
              bg: "#1B266B",
            }}
            position="relative"
            top={0}
            right={0}
          />
        </HStack>

        <ModalBody padding={0}>
          <Box px={2} pb={4}>
            {wallets.map((wallet) => (
              <BtnConnectWallet
                key={`connect-${wallet.label}`}
                onClick={async () => {
                  await connectWallet(wallet.index);
                }}
                icon={wallet.icon}
                label={wallet.label}
              />
            ))}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
